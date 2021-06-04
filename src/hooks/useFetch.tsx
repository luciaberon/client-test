import { useEffect, useState } from 'react';
import { Data } from '../types/Data';


const useFetch = (city: string) => {
  const [result, setResult] = useState<Data>();

  useEffect(() => {
    fetch(`https://localhost:44391/api/city/${city}`, {
      mode: 'cors'      
    })
    .then(res => res.json())
    .then(response => setResult(response))    

  }, []);

  return result;
};

export default useFetch;