import { useContext } from "react";
import Child from "./Child";
 import PropTypes from 'prop-types';
import { userContext } from "../App";



// props are the properties in which they are passed from a parent component to a child component

function Header(props) {
  // we can also style using variable objects
  let HeadingStyle = {
    backgroundColor: "black",
    color: "red",
    boxShadow: "5px 5px 10px red",
  };

  // first we have to destructure it and then we can use it
  const { value } = props;
  const { name, age } = value;
  console.log(name);

  // Context - api
  // for using the userContext we have to create a useContext hook
  let data = useContext(userContext);
  let {namee , agee , genderr} = data;
  
  console.log("the data is " ,namee , agee , genderr)

  return (
    <header>
      {/* for styling you there are two types inline or external css */}
      {/* style={HeadingStyle} */}
      <h1>Todo - List</h1>
      <Child name="saran" age="kumar"/>
    </header>
  );
}

export default Header;

// Header.defaultProps = {
//   name : "guest",
//   age : 18
// }

// Header.propTypes = {
//   name : PropTypes.string.isRequired,
//   age : PropTypes.number.isRequired
// };
