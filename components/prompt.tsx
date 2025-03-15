// Copyright Rob Gage 2025

import Form from "next/form";

export default function Prompt({ server_action }: {
    server_action: (formData: FormData) => void
}) {
    return <Form action={server_action}>
        <div className="w-full p-2 rounded-lg border-2 border-neutral-200">
                        <textarea name="PROMPT" rows={3} className="w-full resize-none text-lg focus:outline-0"
                                  placeholder="Enter a task for the agent to complete." autoFocus required />
            <div className="h-10 w-full flex flex-row-reverse">
                <button type="submit" className="h-full aspect-square p-2 rounded-lg bg-primary">
                    <svg viewBox="0 -960 960 960" className="fill-light">
                        <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
                    </svg>
                </button>
            </div>
        </div>
    </Form>;
}
