import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

export let context = createContext();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <context.Provider value={{name : "kuamr",data : "27/12/2004"}}>
      <App name="sarn" />
    </context.Provider>
  </StrictMode>,
);
