import React from "react";
import AddressBar, {AddressBarProps} from "./AddressBar";

const meta = {
    title: 'components/atoms/AddressBar',
    component: AddressBar,
    tags: ['autodocs']
}

export default meta;

export const SearchBarPreview = {
    args: {
      onSearch: {}
    },
    render: ({onSearch}: AddressBarProps) => {
        return <AddressBar onSearch={onSearch} />
    }
}
