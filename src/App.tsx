import React from 'react';
import BrowserTab from "./components/atoms/BrowserTab/BrowserTab";
import BrowserContent from "./components/organisms/BrowserHeader/BrowserContent";

function App() {
    const onTabClosed = () => {
        // TODO: To be implemented
    }
    return (
        <div className={`flex flex-col h-full w-full`}>
            <BrowserTab title={"Google"} isActive={true} onTabClosed={onTabClosed}/>
            <BrowserContent className={`flex-1`}/>
        </div>
    );
}

export default App;
