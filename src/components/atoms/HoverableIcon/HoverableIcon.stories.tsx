import React from "react";
import HoverableIcon, {HoverableIconProps} from "./HoverableIcon";

const meta = {
    title: 'components/atoms/HoverableIcon',
    component: HoverableIcon,
    tags: ['autodocs']
}

export default meta;

export const HoverableIconPreview = {
    args : {
        src: "/icons/ic_home_white.svg",
        srcOnHover: "/icons/ic_home_navy.svg",
        isDisabled: true,
        onClick: {}
    },
    render: ({src, onClick, srcOnHover, isDisabled} : HoverableIconProps) => {
        return <HoverableIcon src={src} onClick={onClick} srcOnHover={srcOnHover} isDisabled={isDisabled}/>
    }
};
