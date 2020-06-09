import { useState, useEffect } from 'react';

const requestOptions = {
  method: 'GET',
};

const useFetch = (url) => {
  const [response, setResponse] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url, requestOptions);
      const jsonData = await result.json();
      setResponse(jsonData);
    };

    fetchData();
  }, [url]);
  return { response };
};

export default useFetch;
