import { useEffect, useState, useReducer } from "react";
import convertXML from "xml-js";

const headers = new Headers();

headers.append("Content-Type", "application/xml; charset=utf-8");
headers.append("X-Custom-Header", "ProcessThisImmediately");

const myInit = { 
    method: 'GET',
    headers: headers,
};

const initState : string = "waiting";

const reducer = (state, action) => action;

export const useFetch = () => {

    const [parsedXml, setParsedXml] = useState<object>({});
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        _fetchData();      
    }, []);

    const _fetchData = () => {
        fetch("http://localhost:3000/api/hello", myInit)
            .then((data) => data.json())
            .then(res => {
                dispatch("processing");
                const parsedXml = convertXML.xml2json(res.data, { compact: true, spaces: 4 });
                const parsedJSON = JSON.parse(parsedXml);

                setParsedXml(parsedJSON);

                dispatch("done");
            })
            .catch(err => console.log(err));
    }

    const filterList = () => {

    }

    return { parsedXml, state, filterList }
}