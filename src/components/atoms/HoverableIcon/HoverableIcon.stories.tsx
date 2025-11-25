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
        onClick: {}
    },
    render: ({src, onClick, srcOnHover} : HoverableIconProps) => {
        return <HoverableIcon src={src} onClick={onClick} srcOnHover={srcOnHover}/>
    }
};
