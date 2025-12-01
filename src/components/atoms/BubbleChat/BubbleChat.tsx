import React from "react";

export interface BubbleChatProps {
    message: string;
    time?: string;
}

const BubbleChat: React.FC<BubbleChatProps> = ({ message, time }) => {
    return (
        <div className="flex items-start gap-2 my-2">
            {/* AI Avatar Circle */}
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                AI
            </div>

            {/* Chat Bubble */}
            <div className="bg-[#1A2234] text-gray-200 px-4 py-3 rounded-2xl max-w-md shadow-md">
                <p className="text-sm leading-relaxed">{message}</p>
                {time && (
                    <p className="text-[10px] text-gray-400 mt-1 text-right">{time}</p>
                )}
            </div>
        </div>
    );
};

export default BubbleChat;
