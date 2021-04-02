const headers = new Headers();

//headers.append("Content-Type", "application/json; charset=utf-8");
headers.append('Accept', 'application/json');
//headers.append('Origin','http://allmateste.com.br');

const myInit = { 
    method: 'GET',
    headers: headers,
};

export const useFetch = () => {

    const _fetchData = async () => {
        try {
            const res = await fetch("http://localhost/extractXml.php", myInit);
            const data = await res.json();
  
            return data;                    

        } catch (error) {
            console.log("Error", error);
            return "Failed";
        }        
    }

    return { _fetchData }
}