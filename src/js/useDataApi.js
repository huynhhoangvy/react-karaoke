import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataApi = (initialData, initialUrl) => {
    const [data, setData] = useState(initialData);
    const [url, setUrl] = useState(initialUrl);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [nextPageToken, setNextPageToken] = useState('');
  
    useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      try {
        const result = await axios(url);
        setNextPageToken(result.data.nextPageToken);
        setData(result.data.items);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    
    fetchData();
    }, [url]);
  
    return [{ data, setData, isLoading, setIsLoading, isError, setIsError, nextPageToken, setNextPageToken }, setUrl]
  }  

export default useDataApi;