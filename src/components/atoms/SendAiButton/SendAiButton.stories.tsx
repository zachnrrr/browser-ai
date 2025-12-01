import React from "react";
import SendAiButton, {SendAiButtonProps} from "./SendAiButton";

const meta = {
    title: "components/atoms/SendAiButton",
    component: SendAiButton,
    tags: ["autodocs"]
};

export default meta;

export const SendAiButtonPreview = {
    args: {
        onClick: () => alert("Clicked!"),
    },
    render: ({onClick}: SendAiButtonProps) => {
        return <SendAiButton onClick={onClick} />
    }
}
