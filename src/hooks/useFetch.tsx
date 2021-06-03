import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Data } from '../types/Data';

export interface Info {
  results: Data[];
}

const useFetch = () => {
  const [result, setResult] = useState<Service<Info>>({
    state: 'loading'
  });

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=87637f2cc3b84045a971e158a727c524')
      .then(response => response.json())
      .then(response => setResult({state: 'loaded', payload: response}))
      .catch(error => setResult({ state: 'error', error }));
  }, []);

  return result;
};

export default useFetch;