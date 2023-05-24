import {useEffect, useState} from "react";
import {loadedApp} from "@/utils/event";

export const useExternalScript = (url: true) => {
    let [state, setState] = useState(url ? "loading" : "idle");

    useEffect(() => {
        if (!url) {
            setState("idle");
            return;
        }

        loadScriptBody('/js/modernizr.js',);
        loadScriptBody('/js/jquery-3.2.1.min.js',);
        loadScriptBody('/js/plugins.js',);
        loadScriptBody('/js/main.js');

        return () => {
            setTimeout(() => {
                setState('ready');
                loadedApp();
            }, 0)
        };
    }, [url]);

    return state;
};

const loadScriptBody = function (src: string) {
    let plugin: any = document.querySelector(`script[src="${src}"]`);

    if (!plugin) {
        plugin = document.createElement("script");
        plugin.setAttribute("src", src);
        plugin.async = false;
        plugin.defer = true;
        plugin.type = 'text/javascript';
        document.body.appendChild(plugin);
    } else {
        plugin.remove()
    }
}
