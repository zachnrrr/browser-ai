import React from "react";
import AiPanel from "./AiPanel";

const meta = {
    title: 'components/organisms/AiPanel',
    component: AiPanel,
    tags: ['autodocs']
}

export default meta;

export const AiPanelPreview = {
    render: () => {
        return <AiPanel onSendPrompt={()=> {/**/}} chats={[]} onPanelClosed={()=> {/**/}} isOpen={true}/>;
    },
};
