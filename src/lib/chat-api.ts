export interface ChatApi {
    send(message: string, ctx? : Record<string, unknown>) : Promise<string>;
}