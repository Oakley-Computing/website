// Copyright Rob Gage 2025

"use server"

const API_SERVER_DATABASE: string = "localhost:4200";

export type ApiResult<T> =
    | { response: T; ok: true }
    | { ok: false; status: number };

async function create_thread(): Promise<ApiResult<{ thread_id: number }>> {
    const response: Response = await fetch(`http://${API_SERVER_DATABASE}/thread/create`, {
        method: "POST",
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

export { create_thread };