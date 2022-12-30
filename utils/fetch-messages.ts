import { Message } from "../typing";

const fetcher = async function () {
    const response = await fetch("/api/get-messages");
    const data = await response.json();
    const messages: Message[] = data.messages;

    return messages;
};

export default fetcher;
