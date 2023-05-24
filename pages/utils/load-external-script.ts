import {useEffect, useState} from "react";

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
                // window.document.dispatchEvent(
                //     new CustomEvent("ready", {
                //         detail: {
                //             done: 1,
                //         },
                //     })
                // )
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
    }
}
