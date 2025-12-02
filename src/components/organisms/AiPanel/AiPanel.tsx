import React from "react";
import PromptInput from "../../molecules/PromptInput/PromptInput";
import {ChatState} from "../../../redux/ChatSlice";
import BubbleChat from "../../atoms/BubbleChat/BubbleChat";
import AiHeaderPanel from "../../molecules/AiHeaderPanel/AiHeaderPanel";

export interface AiPanelProps {
    className?: string;
    chats: ChatState[];
    onSendPrompt: (prompt: string) => void;
    isOpen: boolean;
    onPanelClosed?: () => void;
}

const AiPanel = (props: AiPanelProps) => {
    return (
        <div className={`
            ${props.className} flex flex-col h-full 
            bg-[#0b111f] border-l border-t border-[#252D41]
            transform transition-all duration-300 ease-in-out
            ${props.isOpen ? "translate-x-0 w-1/3" : "translate-x-full w-0"}
        `}>
            {/* Header Section */}
            <AiHeaderPanel onPanelClosed={props.onPanelClosed}/>

            {/* Bubble chat section */}
            <div className="flex flex-col min-w-48 bg-[#121826] p-4 flex-1 text-white">
                {props.chats.map((chat: ChatState) => (
                    <BubbleChat message={chat.message} time={chat.timestamp} key={chat.chatId}/>
                ))}
            </div>

            {/* Prompt section */}
            <PromptInput className={`w-full border-t border-[#252D41]`} onSendPrompt={props.onSendPrompt} />
        </div>
    )
}

export default AiPanel;
