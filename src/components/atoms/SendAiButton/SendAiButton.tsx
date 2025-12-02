import React from "react";
import { Send } from "lucide-react";

export interface SendAiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

const SendAiButton= (props: SendAiButtonProps) => {
    return (
        <button
            onClick={props.onClick}
            className={`
                ${props.className} 
                flex items-center
                px-5 py-2
                rounded-xl
                justify-center
                text-white
                font-medium
                bg-gradient-to-r from-[#3B3BFA] to-[#7B3BFA]
                hover:opacity-90
                active:scale-95
                transition-all
                shadow-md
            `}
        >
            Send
            <Send className={`w-5 h-5 ms-2`} />
        </button>
    );
};

export default SendAiButton;
