const headers = new Headers();

//headers.append("Content-Type", "application/json; charset=utf-8");
headers.append('Accept', 'application/json');
//headers.append('Access-Control-Allow-Origin','http://allmateste.com.br');

const myInit = { 
    method: 'GET',
    headers: headers,
};

export const useFetch = () => {
    const _fetchData = async () => {
        try {
            const res = await fetch("https://allmateste.com.br/site-next/extractXml.php", myInit);
            const data = await res.json();
  
            return data;                    

        } catch (error) {
            console.log("Error", error);
            return "Failed";
        }        
    }

    return { _fetchData }
}