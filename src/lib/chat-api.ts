export interface ChatApi {
    send(message: string) : Promise<string>;
}