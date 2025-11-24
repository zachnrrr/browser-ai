import React from "react";

export interface BrowserTabProps {
    title: string;
    isActive: boolean;
}

const BrowserTab = ({title, isActive} : BrowserTabProps) => {
    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 rounded-t-xl border font-mono ${isActive ? "bg-[#111827] border-[#374151]" : "bg-[#0f1626] border-[#1f2937] opacity-60"}`}
        >
            {/* Circle Icon */}
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>

            {/* Title */}
            <span className="text-white text-sm whitespace-nowrap">
         {title}
            </span>
        </div>
    )
}

export default BrowserTab;