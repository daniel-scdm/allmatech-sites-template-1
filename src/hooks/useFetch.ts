import { useEffect, useState } from "react";
import convertXML from "xml-js";
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
        fetch("http://localhost:3000/api/hello", myInit)
            .then((data) => data.json())
            .then(res => {
                setState("processing");
                const parsedXml = convertXML.xml2json(res.data, { compact: true, spaces: 4 });
                const parsedJSON = JSON.parse(parsedXml);

                if(parsedJSON) {
                    setParsedXml(parsedJSON);                
                    setState("done");
                }
            })
            .catch(err => console.log(err));
    }

    return { parsedXml, state, _fetchData }
}