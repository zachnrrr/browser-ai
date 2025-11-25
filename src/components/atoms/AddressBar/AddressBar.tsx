import React, {useEffect, useState} from "react";

export interface AddressBarProps {
    className?: string;
    onSearch: (url: string) => void;
    webAddress?: string;
}

const AddressBar = (props : AddressBarProps) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState(props.webAddress);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (!isEditing) {
            setValue(props.webAddress);
        }
    }, [props.webAddress, isEditing]);

    return (
        <div
            className={`${props.className} flex items-center w-full rounded-2xl px-4 py-2 bg-[#21293A] border 
                transition-all duration-200 ${focused
                ? "border-[#4b71ff] shadow-[0_0_12px_2px_#4b71ff55]"
                : "border-[#2a3550]"}`}
        >
            {/* Icon */}
            <img
                src="/icons/ic_lock_white.svg"
                alt="lock"
                className="w-4 h-4 opacity-80"
            />

            <input
                type="text"
                placeholder={props.webAddress}
                value={value}
                onFocus={() => {
                    setIsEditing(true);
                    setFocused(true);
                }}
                onBlur={() => {
                    setIsEditing(false);
                    setFocused(false);
                }}
                onChange={(e) => {
                    setIsEditing(true);
                    setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") props.onSearch(value);
                }}
                className="bg-transparent outline-none text-gray-200 text-sm w-full ml-3"
            />
        </div>
    );
};

export default AddressBar;
