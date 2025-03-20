// Copyright Rob Gage 2025

"use server"

const API_SERVER_DATABASE: string = "localhost:4200";

export type ApiResult<T> =
    | { response: T; ok: true }
    | { ok: false; status: number };

async function create_prompt(text: string, thread_id: number): Promise<ApiResult<{ prompt_id: number }>> {
    const response: Response = await fetch(`http://${API_SERVER_DATABASE}/prompts/create`, {
        method: "POST",
        body: JSON.stringify({
            text: text,
            thread_id: thread_id,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    console.log(response)
    if (response.ok) {
        return {
            response: await response.json(),
            ok: true,
        };
    }
    else { return { ok: false, status: response.status } }
}

async function create_thread(text: string): Promise<ApiResult<{ thread_id: number, thread_url: string }>> {
    const response: Response = await fetch(`http://${API_SERVER_DATABASE}/threads/create`, {
        method: "POST",
        body: JSON.stringify({
            prompt_text: text,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    console.log(response)
    if (response.ok) {
        return {
            response: await response.json(),
            ok: true,
        };
    }
    else { return { ok: false, status: response.status } }
}

export { create_prompt, create_thread };