export interface MapWindow extends Window {
    Microsoft: any,
    bingAPIReady: () => void
}

declare let window : MapWindow;
export let Microsoft : any;

//<link rel="" href="" type="">
//</link><script src=""></script>

export function loadBingApi () : Promise<void> {
    let url = `https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.js`;
    let urlStyle = `https://atlas.microsoft.com/sdk/javascript/mapcontrol/2/atlas.min.css`;

    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        const stylesheet = document.createElement("link");

        stylesheet.rel = "stylesheet";
        stylesheet.type = "text/css";
        stylesheet.href = urlStyle;

        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = url;

        window.bingAPIReady = () => {
            Microsoft = window.Microsoft;
            resolve();
        };

        script.onerror = (error: Event | string) => {
            reject(error);
        };

        stylesheet.onerror = (error: Event | string) => {
            reject(error);
        };

        document.body.appendChild(stylesheet);
        document.body.appendChild(script);
    });
}