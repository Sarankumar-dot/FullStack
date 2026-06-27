import React, { createContext } from "react";
import Dummy1 from "./Dummy1";

export const UserContext = createContext();

const Dummy = () => {
  return (
    <UserContext.Provider value="saran">
      <Dummy1 />
    </UserContext.Provider>
  );
};

export default Dummy;
