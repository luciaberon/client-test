import { useEffect, useState } from 'react';
import { Data } from '../types/Data';


const useFetch = (city: string) => {
  const [result, setResult] = useState<Data>();
  const [error, setError] = useState<string>();
  const [loading, isLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        isLoading(true);
        const res = await fetch(`https://localhost:44391/api/city/${city}`, {
          mode: 'cors'      
        })
        const response = await res.json();
        setResult(response);
        isLoading(false);
      } catch {
        isLoading(false);
        setError("Error: couldn't load data");
      }
    }    
    fetchData();
  }, []);

  return { result, loading, error }
};

export default useFetch;