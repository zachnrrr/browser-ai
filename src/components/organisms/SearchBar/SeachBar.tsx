import React from "react";
import HoverableIcon from "../../atoms/HoverableIcon/HoverableIcon";
import AddressBar from "../../atoms/AddressBar/AddressBar";

export interface SearchBarProps {
    onSearch?: () => void;
    onHomeClicked?: () => void;
    onReload?: () => void;
    onBack?: () => void;
    onForward?: () => void;
}

const SearchBar = (props: SearchBarProps) => {
    return (
        <div className="flex bg-[#121826] p-2">
            <HoverableIcon src={"/icons/ic_chevron_left_white.svg"} srcOnHover={"/icons/ic_chevron_left_navy.svg"} onClick={props.onBack} />
            <HoverableIcon src={"/icons/ic_chevron_right_white.svg"} srcOnHover={"/icons/ic_chevron_right_navy.svg"} onClick={props.onForward} />
            <HoverableIcon src={"/icons/ic_reload_white.svg"} srcOnHover={"/icons/ic_reload_navy.svg"}onClick={props.onReload}/>
            <HoverableIcon src={"/icons/ic_home_white.svg"} srcOnHover={"/icons/ic_home_navy.svg"} onClick={props.onHomeClicked}/>
            <AddressBar className={`ms-4`} onSearch={props.onSearch} />
        </div>
    );
}

export default SearchBar;