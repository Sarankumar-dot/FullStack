import { useState, useEffect } from "react";

// custom hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [fetchError, SetFetchError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("response error");
          }
          console.log(res);
          return res.json();
        })
        .then((data) => setData(data))
        .catch((err) => {
          SetFetchError(err.message);
          console.log(err.message);
        });
    }, 2000);
  }, []);

  return [data, fetchError];
};

export default useFetch;
