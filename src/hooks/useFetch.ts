import { useEffect, useState } from "react";
import { ICarga } from "interfaces";

const headers = new Headers();

headers.append("Content-Type", "application/json; charset=utf-8");
headers.append('Accept', 'application/json');
headers.append('Origin','http://allmateste.com.br');

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
        fetch("https://allmateste.com.br/site-next/extractXml.php", myInit)
            .then(res => res.json())
            .then((data : any) => {
                setState("processing");
                if(data) {
                    setParsedXml(data);                
                    setState("done");
                    console.log(data)
                }
            })
            .catch(err => console.log(err));
    }

    return { parsedXml, state, _fetchData }
}