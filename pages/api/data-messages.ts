import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Message } from "../../typing";

type Data = {
    message: Message;
};

type ErrorData = {
    body: string;
};

const handler = async function (
    request: NextApiRequest,
    response: NextApiResponse<Data | ErrorData>
) {
    try {
        if (request.method !== "POST") {
            response.status(405).json({
                body: "Method Not Allowed",
            });
            return;
        }

        const { message } = request.body;

        const newMessage = {
            ...message,
            created_at: Date.now(),
        };
        await redis.hset("messages", message.id, JSON.stringify(newMessage));
        response.status(200).json({
            message: newMessage,
        });
    } catch (error: any) {
        response.status(500).json({
            message: error.message,
        });
    }
};

export default handler;
