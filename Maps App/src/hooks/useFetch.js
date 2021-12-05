import {useEffect, useState, useCallback} from 'react';
import axios from 'axios';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = useCallback(async () => {
    try {
      const {data: response} = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err.message);
    }
  }, [url]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {data, loading, error};
}
