import React, {useEffect, useRef, useState} from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import {URL_GOOGLE} from "../../../utils/constants";

export interface BrowserContentProps {
    className?: string;
}

const BrowserContent = (props: BrowserContentProps) => {
    const webviewRef = useRef<Electron.WebviewTag>(null);
    const [isCanGoBack, setIsCanGoBack] = useState(false);
    const [isCanGoForward, setIsCanGoForward] = useState(false);
    const [currentUrl, setCurrentUrl] = useState(URL_GOOGLE);
    const goBack = () => webviewRef.current?.goBack();
    const goForward = () => webviewRef.current?.goForward();
    const reload = () => webviewRef.current?.reload();

    const goHome = () => {
        webviewRef.current?.loadURL(URL_GOOGLE).catch(err => {
            console.error('Failed to go home:', err);
        });
    };

    const handleSearch = (url: string) => {
        webviewRef.current?.loadURL(url).catch(err => {
            console.error(`Failed to load URL "${url}":`, err);
        });
    };

    useEffect(() => {
        const webview = webviewRef.current;
        if (!webview) return;

        const updateNavState = () => {
            setIsCanGoBack(webview.canGoBack());
            setIsCanGoForward(webview.canGoForward());
        };

        const handleNavigation = (event: Electron.DidNavigateEvent | Electron.DidNavigateInPageEvent) => {
            setCurrentUrl(event.url);
            updateNavState();
        };

        webview.addEventListener("did-navigate", handleNavigation);
        webview.addEventListener("did-navigate-in-page", handleNavigation);

        return () => {
            webview.removeEventListener("did-navigate", handleNavigation);
            webview.removeEventListener("did-navigate-in-page", handleNavigation);
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
