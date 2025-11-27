import React, {useState} from "react";

export interface HoverableIconProps {
    className?: string;
    src: string;
    srcOnHover: string;
    isDisabled?: boolean;
    onClick?: () => void;
}

const HoverableIcon = (props: HoverableIconProps) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <button
            onClick={props.onClick}
            disabled={props.isDisabled}
            className={`${props.className} hover:bg-[#5ABCE9] rounded-xl px-1`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex items-center m-2`}>
                <img
                    src={isHovered && props.srcOnHover ? props.srcOnHover : props.src}
                    alt="icon"
                    className={`w-4 h-4 object-contain flex-shrink-0`}
                />
            </div>
        </button>
    )
}

export default HoverableIcon;
