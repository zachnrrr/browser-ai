import React, {useEffect, useRef, useState} from "react";
import SearchBar from "../../molecules/SearchBar/SeachBar";
import {URL_GOOGLE} from "../../../utils/constants";

export interface BrowserContentProps {
    className?: string;
}

const BrowserContent = (props: BrowserContentProps) => {
    const webviewRef = useRef<Electron.WebviewTag>(null);
    const [isCanGoBack, setIsCanGoBack] = useState(true);
    const [isCanGoForward, setIsCanGoForward] = useState(true);
    const [currentUrl, setCurrentUrl] = useState(URL_GOOGLE);
    const goBack = () => webviewRef.current?.goBack();
    const goForward = () => webviewRef.current?.goForward();
    const reload = () => webviewRef.current?.reload();
    const goHome = () => {
        webviewRef.current?.loadURL(URL_GOOGLE).then(_ => {
            // Not implemented
        });
    };

    const handleSearch = (url: string) => {
        webviewRef.current?.loadURL(url).then(_ => {
            // Not implemented
        });
    };

    useEffect(() => {
        const webview = webviewRef.current;
        if (!webview) return;

        const updateNavState = () => {
            setIsCanGoBack(webview.canGoBack());
            setIsCanGoForward(webview.canGoForward());
        };

        const updateUrl = (event: any) => {
            setCurrentUrl(event.url);
        };

        webview.addEventListener("did-navigate", (event) => {
            updateUrl(event);
            updateNavState();
        });

        webview.addEventListener("did-navigate-in-page", (event) => {
            updateUrl(event);
            updateNavState();
        });

        return () => {
            webview.removeEventListener("did-navigate", updateUrl);
            webview.removeEventListener("did-navigate-in-page", updateUrl);
        };
    }, []);

    return (
        <div className={`${props.className} flex flex-col w-full`}>
            {/* Header browser section */}
            <SearchBar
                onBack={goBack}
                onForward={goForward}
                onReload={reload}
                onHomeClicked={goHome}
                onSearch={handleSearch}
                isBackDisabled={!isCanGoBack}
                isForwardDisabled={!isCanGoForward}
                webAddress={currentUrl}
            />

            {/* Browser content */}
            <webview
                ref={webviewRef}
                className="flex-1 w-full"
                src={URL_GOOGLE}
                partition="persist:browser"
            />
        </div>
    );
};

export default BrowserContent;
