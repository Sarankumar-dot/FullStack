import React, { useEffect, useState } from "react";
import "./index.css";
const Effect = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      async function getData() {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const res = await data.json();
        setData(res);
        setLoader(false);
      }

      getData();
    }, 2000);
  }, []);

  if (loader) {
    return (
      <div className="loader-container">
        <img className="loader" src="/favicon.svg" alt="loading" />
      </div>
    );
  }

  return (
    <>
      {/* {loader && (
        <div className="loader-container">
          <img className="loader" src="/favicon.svg"></img>
        </div>
      )} */}
      <ul>
        {data.map((val, index) => (
          <li key={val.id}>{val.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Effect;
