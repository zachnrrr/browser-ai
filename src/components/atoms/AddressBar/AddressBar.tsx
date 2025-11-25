import React, {useState} from "react";

export interface AddressBarProps {
    className?: string;
    onSearch: () => void;
}

const AddressBar = ({className, onSearch} : AddressBarProps) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div
            className={`
                ${className}
                flex items-center 
                w-full 
                rounded-2xl 
                px-4 py-2 
                bg-[#21293A] 
                border 
                ${focused
                ? "border-[#4b71ff] shadow-[0_0_12px_2px_#4b71ff55]"
                : "border-[#2a3550]"
            } 
                transition-all duration-200
            `}
        >
            {/* Icon */}
            <img
                src="/icons/ic_lock_white.svg"
                alt="lock"
                className="w-4 h-4 opacity-80"
            />

            <input
                type="text"
                placeholder="https://ai-browser.dev"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSearch();   // ← triggers on Enter
                    }
                }}
                className="bg-transparent outline-none text-gray-200 text-sm w-full ml-3"
            />
        </div>
    );
};

export default AddressBar;
