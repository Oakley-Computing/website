// Copyright Rob Gage 2025

import {ApiResult, create_prompt, create_thread} from "@/app/actions";
import Logo from "@/components/logo";
import Dashboard from "@/components/dashboard";
import {redirect} from "next/navigation";
import Prompt from "@/components/prompt";

export default function Page() {
    // Creates a new thread for a task to execute in
    async function redirect_to_new_thread(form_data: FormData) {
        "use server"
        const create_thread_result: ApiResult<{ thread_id: number, thread_url: string }> =
            await create_thread(form_data.get("PROMPT") as string)
        if (create_thread_result.ok) {
            const create_prompt_result: ApiResult<{ prompt_id: number }> = await create_prompt(
                form_data.get("PROMPT") as string, create_thread_result.response.thread_id
            )
            if (create_prompt_result.ok) {
                redirect(`/threads/${create_thread_result.response.thread_url}`)
            }
            else { form_data.set("PROMPT", "") }
        } else { form_data.set("PROMPT", "") }
    }
    return <Dashboard>
        <div className="my-auto flex flex-col p-2 items-center">
            <div className="w-1/3 mb-8 fill-primary"><Logo/></div>
            <h1 className="mb-8 text-4xl text-center text-primary-dark">What would you like to happen?</h1>
            <div className="min-h-24 w-full md:w-6/10 mx-auto">
                <Prompt server_action={redirect_to_new_thread} />
            </div>
        </div>
    </Dashboard>;
}
