import React from "react";
import {X} from "lucide-react";

export interface AiHeaderPanelProps {
    className?: string;
    onPanelClosed?: () => void;
}

const AiHeaderPanel = (props: AiHeaderPanelProps) => {
    return (
        <div className={`${props.className} flex w-full border-b border-[#252D41]`}>
            <div className="flex w-full bg-[#0b111f] p-4 items-center">
                <div className="flex flex-col rounded-xl bg-[#1D264B] p-2 items-center justify-center w-10 h-10">
                    <img
                        className={`w-6 h-6 flex-shrink-0`}
                        src={'/icons/ic_ai.svg'}
                        alt="icon"
                    />
                </div>
                <div className="flex flex-col ms-4">
                    <span className={`text-white`}>AI-Sharia</span>
                    <span className={`text-[#919CAF] text-sm`}>PT Bank Syariah Nasional</span>
                </div>
                <button
                    className={`flex hover:bg-[#1D264B] ml-auto rounded-lg w-8 h-8 items-center justify-center`}
                    onClick={props.onPanelClosed}
                >
                    <X className={`w-4 h-4 flex-shrink-0 text-white`}/>
                </button>
            </div>
        </div>
    )
}

export default AiHeaderPanel;
