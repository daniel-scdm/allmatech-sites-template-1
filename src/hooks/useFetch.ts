import { useEffect, useState } from "react";
import { ICarga } from "interfaces";

const headers = new Headers();

headers.append("Content-Type", "application/xml; charset=utf-8");
headers.append("X-Custom-Header", "ProcessThisImmediately");

const myInit = { 
    method: 'GET',
    headers: headers,
};

export const useFetch = () => {

    const [parsedXml, setParsedXml] = useState<ICarga>();
    const [state, setState] = useState("waiting");

    useEffect(() => {
        _fetchData();      
    }, []);

    const _fetchData = () => {
        fetch("http://localhost/extractXml.php", myInit)
            .then(res => res.json())
            .then((data : any) => {
                setState("processing");
                if(data) {
                    setParsedXml(data);                
                    setState("done");
                }
            })
            .catch(err => console.log(err));
    }

    return { parsedXml, state, _fetchData }
}