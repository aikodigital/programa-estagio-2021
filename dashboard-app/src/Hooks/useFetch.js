import { useCallback, useState } from 'react';

const useFetch = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    
    //o useCallback é utilizado para não recriar a função quando presiar chamar apenas outros dados
    const request = useCallback(async (url, options) => {
        let response;
        let json;
        try{
            response = await fetch(url, options);
            json = await response.json();
            //console.log(response)
            if (response.ok === false) throw new Error('Erro')
        }catch(err){
            json = null;
            setError(err);
        }finally{
            setData(json);
        }


    } , [])
    
    return { request, data,error }
};

export default useFetch;