import { ChatApi } from "./chat-api";

export class HttpChatApi implements ChatApi {
    constructor(private endpoint: string, private headers: HeadersInit = {}) { }


    async send(message: string, ctx?: Record<string, unknown>): Promise<string> {
        const res = await fetch(this.endpoint, {
            method: "POSt",
            headers: { "Content-Type": "application/json", ...this.headers },
            body: JSON.stringify(message)
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`HTTP ${res.status}: ${text}`);
        }

        const contentType = res.headers.get("content-type") ?? "";
        return contentType.includes("application/json")
            ? (await res.json()).reply
            : await res.text();
    }
}