// src/components/ChatClient.tsx
"use client";

import React, { useCallback, useState } from "react";
import { Avatar, ChatContainer, ConversationHeader, MainContainer, Message, MessageInput, MessageList, MessageModel, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { CloseButton } from "@headlessui/react";

export default function ChatClient() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [typing, setTyping] = useState(false);

    const sendToApi = useCallback(async (text: string) => {
        const res = await fetch("https://localhost:7212/Chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(text)
        })

        if (!res.ok) {
            const errText = await res.text().catch(() => "");
            throw new Error(`API error ${res.status}: ${errText}`);
        }

        const data: string = await res.text();
        return data;
    }, [])

    const handleSend = useCallback(async (text: string) => {
        const userMsg: MessageModel = {
            message: text,
            direction: 'outgoing',
            position: 0
        }

        setMessages(prev => [...prev, userMsg]);
        setTyping(true);

        try {
            const reply = await sendToApi(text);
            console.info(reply)

            const botMsg: MessageModel = {
                message: reply,
                direction: "incoming",
                sender: "assistant",
                position: 0
            };
            setMessages(prev => [...prev, botMsg]);
        } catch (e: any) {
            const errMsg: MessageModel = {
                message: `Sorry, I couldn't process that. ${e?.message ?? ""}`,
                direction: "incoming",
                sender: "assistant",
                position: 0
            };
            setMessages(prev => [...prev, errMsg]);
        } finally {
            setTyping(false);
        }

    }, [sendToApi]);

    return (
        <>

            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg">
                {open &&
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>

                }
                {!open &&
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z" clipRule="evenodd" />
                    </svg>
                }
            </button>
            {open &&
                <div
                    className="chat-ui fixed bottom-20 right-6 w-80 h-120 rounded-2xl shadow-2xl bg-white overflow-hidden z-50"
                    style={{ border: "1px solid #ddd" }}>
                    <MainContainer>
                        <ChatContainer>
                            <ConversationHeader>
                                <ConversationHeader.Content>
                                    <Avatar
                                        name="Susy"
                                        src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg" />
                                    <button onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2">
                                        <svg className="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                        </svg>
                                    </button>
                                </ConversationHeader.Content>
                            </ConversationHeader>
                            <MessageList>
                                {messages.map((m, i) => (
                                    <Message key={i} model={m} />
                                ))}
                                {typing &&
                                    <TypingIndicator content="Akane is typing" />
                                }
                            </MessageList>
                            <MessageInput
                                placeholder="Type message here"
                                onSend={handleSend}
                            />
                        </ChatContainer>
                    </MainContainer>
                </div>
            }
        </>
    );
}