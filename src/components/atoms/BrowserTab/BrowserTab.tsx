import React from "react";

export interface BrowserTabProps {
    className?: string;
    title: string;
    isActive: boolean;
    onTabClosed: () => void;
}

const BrowserTab = (props: BrowserTabProps) => {
    const borderActiveStyle = props.isActive
        ? "bg-[#111827] border-t border-l border-r border-[#242d42]"
        : "bg-[#0f1626] opacity-60";

    return (
        <div
            className={`${props.className} flex items-center gap-2 px-4 py-2 rounded-t-xl font-mono ${borderActiveStyle}`}
        >
            {/* Globe Icon */}
            <img
                src="/icons/ic_globe.svg"
                alt="icon"
                className="w-5 h-5 object-contain"
            />

            {/* Title */}
            <span className="text-white text-sm whitespace-nowrap ms-1 mt-0.5">{props.title}</span>

            {/* Icon close */}
            <button onClick={props.onTabClosed} className={`ml-auto`}>
                <div className="flex items-center hover:bg-red-500 rounded">
                    <img
                        src="/icons/ic_cross_white.svg"
                        alt="icon"
                        className="w-4 h-4 object-contain"
                    />
                </div>
            </button>
        </div>
    );
};

export default BrowserTab;
