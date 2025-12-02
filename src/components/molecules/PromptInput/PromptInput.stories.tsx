import React from "react";
import PromptInput, {PromptInputProps} from "./PromptInput";

const meta = {
    title: "components/atoms/PromptInput",
    component: PromptInput,
    tags: ["autodocs"],
    args: {
        placeholder: "Type your automation command...",
    },
};

export default meta;

export const PromptInputPreview = {
    args: {
        onSendPrompt: {}
    },
    render: ({onSendPrompt}: PromptInputProps) => {
        return <PromptInput onSendPrompt={onSendPrompt} />
    }
};
