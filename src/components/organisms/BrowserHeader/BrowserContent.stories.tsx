import React from "react";
import BrowserContent from "./BrowserContent";

const meta = {
    title: 'components/organisms/BrowserContent',
    component: BrowserContent,
    tags: ['autodocs']
}

export default meta;

export const SearchBarPreview = {
    render: () => {
        return <BrowserContent />;
    },
};