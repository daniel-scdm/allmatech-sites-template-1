const headers = new Headers();

//headers.append("Content-Type", "application/json; charset=utf-8");
headers.append('Accept', 'application/json');
//headers.append('Access-Control-Allow-Origin','http://allmateste.com.br');

type IFormValues = {
    name: string,
    email: string,
    subject: string,
    message: string
}

const myInit = { 
    method: 'GET',
    headers: headers,
};

export const useApi = () => {
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

    const _sendEmail = async (formValues : IFormValues) => {

        const myInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formValues)
        }

        const isSuccefull = fetch("http://localhost/index.php", myInit)
            .then((data) => data.json())
            .then(res => {
                if(!res && !res.Success) {
                    return false;
                }

                return true;
            })
            .catch(() => {
                return false;
            });

        return isSuccefull;
    }

    return { _fetchData, _sendEmail }
}