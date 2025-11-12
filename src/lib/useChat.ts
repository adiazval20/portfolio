// lib/useChat.ts
import { useState, useCallback } from "react";
import type { ChatApi } from "./chat-api";
import { MessageModel } from "@chatscope/chat-ui-kit-react";

export function useChat(api: ChatApi) {
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [typing, setTyping] = useState(false);

    const handleSend = useCallback(
        async (text: string) => {
            const userMsg: MessageModel = {
                message: text,
                direction: "outgoing",
                position: 0
            };

            setMessages(prev => [...prev, userMsg]);
            setTyping(true);

            try {
                const reply = await api.send(text);

                const botMsg: MessageModel = {
                    message: reply,
                    direction: "incoming",
                    sender: "assistant",
                    position: 0
                };
                setMessages(prev => [...prev, botMsg]);
            } catch (e: unknown) {
                let errorMessage = "Sorry, I couldn't process that.";

                if (e instanceof Error) {
                    errorMessage += ` ${e.message}`;
                }

                const errMsg: MessageModel = {
                    message: errorMessage,
                    direction: "incoming",
                    sender: "assistant",
                    position: 0
                };
                setMessages(prev => [...prev, errMsg]);
            } finally {
                setTyping(false);
            }
        },
        [api]
    );

    return { messages, typing, handleSend };
}