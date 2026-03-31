import React, { useContext,useState } from "react";
import { userContext } from "../App";
import PropTypes from "prop-types";


const Child = ({name = "sarankumar" , age = "sara"}) => {
  // const {name , age} = value;
  // console.log(name , age);

  // receiving the data from the app.jsx -> header.jsx -> Child.jsx
  // thats how props drilling works

  // using context api

  // let { namee, agee, genderr } = useContext(userContext);
  // console.log(" oooooo ", namee, agee, genderr);

  // console.log(name, age);

  const [val, setValue] = useState(true);

  console.log("TYPE:", typeof age);
  if (val == true) {
    
    return (
      <div>
        <h2>
          {name} , {age}
        </h2>
      </div>
    );
  } else {
    
    return (
      <>
        <h2>else block</h2>
      </>
    );
  }
};

export default Child;

// Child.defaultProps = {
//   name : "gopal",
//   age : 33
// }

Child.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number
}
