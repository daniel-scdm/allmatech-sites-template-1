export interface MapWindow extends Window {
    Microsoft: any,
    bingAPIReady: () => void
}

declare let window : MapWindow;
export let Microsoft : any;

export function loadBingApi (apiKey? : string) : Promise<void> {
    const callBackName = "bingAPIReady";
    let url = `https://www.bing.com/api/maps/mapcontrol?callback=${callBackName}`;

    if(apiKey) {
        url += `&key=${apiKey}`;
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = url;
        window.bingAPIReady = () => {
            Microsoft = window.Microsoft;
            resolve();
        };

        script.onerror = (error: Event) => {
            reject(error);
        };
        document.body.appendChild(script);
    });
}