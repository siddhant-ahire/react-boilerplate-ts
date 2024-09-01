import { useQuery } from 'react-query';
import axios from 'axios';

const useFetch = (url: string) => {
  return useQuery(url, async () => {
    const { data } = await axios.get(url);
    return data;
  });
};

export default useFetch;
