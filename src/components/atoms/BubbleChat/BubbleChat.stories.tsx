import React from "react";
import BubbleChat, {BubbleChatProps} from "./BubbleChat";

const meta= {
    title: "components/atoms/BubbleChat",
    component: BubbleChat,
    tags: ["autodocs"],
    args: {
        message:
            "Hello! I'm your AI automation assistant. I can help you browse, automate tasks, extract data, and more. What would you like me to do?",
        time: "22:13",
    },
    argTypes: {
        message: {
            control: "text",
            description: "Message text displayed in the bubble",
        },
        time: {
            control: "text",
            description: "Optional timestamp",
        },
    },
};

export default meta;

export const BubbleChatPreview = {
    args: {
        message:
            "Hello! I'm your AI automation assistant. I can help you browse, automate tasks, extract data, and more. What would you like me to do?",
        time: "22:13",
    },
    render: ({message, time}: BubbleChatProps) => {
        return <BubbleChat message={message} time={time}/>
    }
}
