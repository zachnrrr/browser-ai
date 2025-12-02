import React, {InputHTMLAttributes, useState} from "react";
import SendAiButton from "../../atoms/SendAiButton/SendAiButton";

export interface PromptInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    onSendPrompt?: (prompt: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = (props) => {
    const [value, setValue] = useState("");
    return (
        <div className={`${props.className} flex flex-col w-full p-4 bg-[#0b111f]`}>
            <div
                className={`
                rounded-2xl p-[2px]
                transition-all duration-200
                border border-transparent
                focus-within:border-blue-500
                focus-within:shadow-[0_0_10px_rgba(59,130,246,0.6)]
                `}
            >
                <input
                    {...props}
                    className="
                    w-full px-4 py-3 rounded-xl
                    bg-[#121826] text-gray-300
                    outline-none border-none
                    placeholder-gray-500
                "
                    value={value}
                    placeholder={"Ask anything about BSN..."}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") props.onSendPrompt(value ?? '');
                    }}
                />
            </div>
            <SendAiButton
                className={`my-4`}
                onClick={ () => {
                    props.onSendPrompt(value);
                }}
            />
        </div>
    );
};

export default PromptInput;
