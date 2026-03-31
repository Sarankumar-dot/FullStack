import React, { useContext } from "react";
import { context } from "../main";


const Header = (props) => {

  
const cont = useContext(context);

  return (
    <div>
      <header className="head">
        <h2 id="pageName">Goalie</h2>
        <ul id="list">
          <li>{cont.name}</li>
          <li>{props.name}</li>
          <li>{cont.data}</li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

