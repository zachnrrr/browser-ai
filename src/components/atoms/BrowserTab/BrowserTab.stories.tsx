import React from "react";
import BrowserTab, {BrowserTabProps} from "./BrowserTab";

const meta = {
    title: 'components/atoms/BrowserTab',
    component: BrowserTab,
    tags: ['autodocs']
}

export default meta;

export const BrowserTabPreview = {
    args: {
        title: 'Google',
        isActive: true,
        onTabClosed: {}
    },
    render: ({ title, isActive, onTabClosed }: BrowserTabProps) => {
        return <BrowserTab title={title} isActive={isActive} onTabClosed={onTabClosed} />;
    },
};
