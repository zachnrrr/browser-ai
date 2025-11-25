import React from "react";

export interface BrowserTabProps {
    title: string;
    isActive: boolean;
    onTabClosed: () => void;
}

const BrowserTab = ({title, isActive, onTabClosed}: BrowserTabProps) => {
    const borderActiveStyle = isActive
        ? "bg-[#111827] border-t-2 border-l-2 border-r-2 border-[#D9D9D9]"
        : "bg-[#0f1626] opacity-60";

    return (
        <div
            className={`flex items-center gap-2 px-4 py-2 rounded-t-xl font-mono ${borderActiveStyle}`}
        >
            {/* Globe Icon */}
            <img
                src="/icons/ic_globe.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
            />

            {/* Title */}
            <span className="text-white text-sm whitespace-nowrap ml-2">{title}</span>

            {/* Icon close */}
            <button onClick={onTabClosed} className={`ml-auto`}>
                <div className="flex items-center m-2 hover:bg-red-500 rounded">
                    <img
                        src="/icons/ic_cross_white.svg"
                        alt="icon"
                        className="w-5 h-5 object-contain"
                    />
                </div>
            </button>
        </div>
    );
};

export default BrowserTab;
