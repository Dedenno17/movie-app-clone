import { useEffect, useState } from 'react';

const useFetch = (
  url: string,
  idAddress: string | string[] | undefined,
  setState: (data: any | undefined) => void
) => {
  // state is Loading
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchDetailMovieData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('failed to Fetch!');
        }
        const data = await res.json();
        setState(data);
        setIsLoading(false);
      } catch (err) {
        alert(err);
      }
    };

    if (idAddress) {
      fetchDetailMovieData();
    }
  }, [url, idAddress, setState]);

  return {
    isLoading,
  };
};

export default useFetch;
