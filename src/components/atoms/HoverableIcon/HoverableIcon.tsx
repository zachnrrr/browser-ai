import React, {useState} from "react";

export interface HoverableIconProps {
    src: string;
    srcOnHover: string;
    onClick?: () => void;
}

const HoverableIcon = (props: HoverableIconProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={props.onClick}
            className={`hover:bg-[#5ABCE9] rounded-xl px-1`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`flex items-center m-2`}>
                <img
                    src={isHovered && props.srcOnHover ? props.srcOnHover : props.src}
                    alt="icon"
                    className={`w-5 h-5 object-contain`}
                />
            </div>
        </button>
    )
}

export default HoverableIcon;
