"use client";

import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { AiOutlineSend } from "react-icons/ai";
import { Message } from "../typing";
import useSWR from "swr";
import fetcher from "../utils/fetch-messages";

const ChatInput = function () {
    const [input, setInput] = useState("");
    // const {
    //     data: messages,
    //     error,
    //     mutate,
    // } = useSWR("/api/get-messages", fetcher);

    const addMessage = async function (event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!input) {
            return;
        }
        const mesageToSend = input;

        setInput("");

        const id = uuid();

        const message: Message = {
            id,
            message: mesageToSend,
            created_at: Date.now(),
            username: "Nguyen Khanh",
            profileImage: "",
            email: "nguyenkhanh17112003@gmail.com",
        };

        const uploadMessageToUpstash = async function () {
            const response = await fetch("/api/data-messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                }),
            });
            const data = response.json();
            console.log(data);
        };
        uploadMessageToUpstash();
    };
    return (
        <form
            onSubmit={addMessage}
            className="fixed bottom-0 z-50 w-full flex px-10 py-5 space-x-2 border-t border-gray-100"
        >
            <input
                type="text"
                value={input}
                onChange={function (event) {
                    return setInput(event.target.value);
                }}
                placeholder="Enter message here ..."
                className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
                type="submit"
                disabled={!input}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2 font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
            >
                <span>Send</span>
                <AiOutlineSend />
            </button>
        </form>
    );
};

export default ChatInput;
