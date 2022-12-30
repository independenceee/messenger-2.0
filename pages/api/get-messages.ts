import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";

import { Message } from "../../typing";

type Data = {
    messages: Message[];
};

type ErrorData = {
    body: string;
};

const handler = async function (
    request: NextApiRequest,
    response: NextApiResponse<Data | ErrorData>
) {
    if (request.method !== "GET") {
        response.status(405).json({
            body: "Method Not Allowed",
        });
        return;
    }

    const messagesResponse = await redis.hvals("messages");
    const messages: Message[] = messagesResponse
        .map((message) => JSON.parse(message))
        .sort((a, b) => b.created_at - a.created_at);

    response.status(200).json({
        messages,
    });
};

export default handler;
