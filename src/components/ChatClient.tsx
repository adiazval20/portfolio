"use client";

import React from "react";
import { Avatar, ChatContainer, ConversationHeader, MainContainer, Message, MessageInput, MessageList, MessageModel, TypingIndicator } from "@chatscope/chat-ui-kit-react";
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
            className="chat-ui fixed bottom-20 right-6 w-80 h-120 rounded-lg bg-white overflow-hidden z-50">
            <MainContainer>
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Content>
                            <Avatar
                                name="Susy"
                                src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg" />
                            <div className="py-2 px-3 rounded-bl-lg bg-white">
                                <button onClick={onClose} className="rounded-full p-2 border-2 border-gray-400">
                                    <svg className="w-3 h-3 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
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
                        {typing &&
                            <TypingIndicator content="Akane is typing" />
                        }
                    </MessageList>
                    <MessageInput
                        placeholder="Type message here"
                        attachButton={false}
                        onSend={handleSend}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}