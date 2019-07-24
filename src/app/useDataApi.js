import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = (initialData, initialUrl) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      // setIsLoading(true);
      try {
        const result = await axios(url);
        console.log('result: ', result);
        setData(result.data.items);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    
    fetchData();
    console.log('data dau roi dit me: ', data);
    }, [url]);
  
    return [{ data, isLoading, isError }, setUrl]
  }  

export default useDataApi;