"use client";

import React from "react";
import { Avatar, ChatContainer, ConversationHeader, MainContainer, Message, MessageInput, MessageList, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { HttpChatApi } from "@/lib/http-chat-api";
import { useChat } from "@/lib/useChat";

type ChatClientProps = {
    apiEndpoint: string,
    onClose: () => void
};

export default function ChatClient({ apiEndpoint, onClose }: ChatClientProps) {
    if (!apiEndpoint) throw new Error("NEXT_PUBLIC_CHAT_API_URL is missing");

    const api = new HttpChatApi(apiEndpoint);
    const { messages, typing, handleSend } = useChat(api);

    return (
        <div
            className="chat-ui fixed bottom-20 right-6 w-80 h-120 rounded-3xl bg-white overflow-hidden z-50">
            <MainContainer>
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Content>
                            <Avatar
                                name="Andy"
                                className="border-2 border-gray-400 my-2 ml-4"
                                src="avatar_circle.png" />
                            <div>
                                {typing &&
                                    <TypingIndicator content="Thinking" />
                                }
                            </div>
                            <div className="py-2 pr-4 pl-4 rounded-bl-2xl bg-white self-start">
                                <button onClick={onClose} className="rounded-full p-1 border-2 border-gray-400 hover:bg-gray-100 hover:border-gray-500 cursor-pointer">
                                    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                </button>
                            </div>
                        </ConversationHeader.Content>
                    </ConversationHeader>
                    <MessageList>
                        {messages.map((m, i) => (
                            <Message key={i} model={m} />
                        ))}

                    </MessageList>
                    <MessageInput
                        placeholder="Ask about me!"
                        attachButton={false}
                        onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}