import React, { useContext } from "react";
import { UserContext } from "./Dummy";

const Dummy1 = () => {
  const user = useContext(UserContext);

  return <p>{user}</p>;
};

export default Dummy1;
