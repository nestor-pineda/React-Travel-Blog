import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("No hemos podido encontrar esa data");
        }
        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, [url]);

  return { apiData, loading, error };
  //it could be return [apiData, loading, error]
};

export default useFetch;
