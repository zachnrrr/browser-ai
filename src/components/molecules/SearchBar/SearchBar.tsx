import React from "react";
import HoverableIcon from "../../atoms/HoverableIcon/HoverableIcon";
import AddressBar from "../../atoms/AddressBar/AddressBar";

export interface SearchBarProps {
    className?: string;
    onSearch?: (url: string) => void;
    onHomeClicked?: () => void;
    onReload?: () => void;
    onBack?: () => void;
    onForward?: () => void;
    webAddress?: string;
    isBackDisabled?: boolean;
    isForwardDisabled?: boolean;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <div className={`${props.className} flex bg-[#121826] p-3 gap-1`}>
            <HoverableIcon
                src={"/icons/ic_chevron_left_white.svg"}
                srcOnHover={"/icons/ic_chevron_left_navy.svg"}
                onClick={props.onBack}
                isDisabled={props.isBackDisabled}/>
            <HoverableIcon
                src={"/icons/ic_chevron_right_white.svg"}
                srcOnHover={"/icons/ic_chevron_right_navy.svg"}
                onClick={props.onForward}
                isDisabled={props.isForwardDisabled}/>
            <HoverableIcon
                src={"/icons/ic_reload_white.svg"}
                srcOnHover={"/icons/ic_reload_navy.svg"}
                onClick={props.onReload}/>
            <HoverableIcon
                src={"/icons/ic_home_white.svg"}
                srcOnHover={"/icons/ic_home_navy.svg"}
                onClick={props.onHomeClicked}/>
            {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
            <AddressBar className={`ms-2`} onSearch={props.onSearch ?? (() => {})} webAddress={props.webAddress}/>
        </div>
    );
}

export default SearchBar;
