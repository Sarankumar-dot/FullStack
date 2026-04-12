import React, { useEffect, useState } from "react";
import Items from "./Items";
import useFetch from "./useFetch";

const ItemsFetch = () => {
  
  const [data, fetchError] = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  // async function getItems() {
  //   try {
  //     const response = await fetch("http://localhost:3000/courses");

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  let items = null;
  if (data != null) {
    items = data.map((val, index) => (
      <Items key={index} userId={val.userId} title={val.title}></Items>
    ));
  }

  if (!data) {
    return (
      <>
        {fetchError == null ? (
          <img id="load" src="/react.svg" alt="loading" />
        ) : (
          <p>{fetchError}</p>
        )}
      </>
    );
  }

  return <>{items}</>;
};

export default ItemsFetch;
