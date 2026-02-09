
import styled from "styled-components";
// example of functional component


function Header(props){

     // we can also style using variable objects
     let HeadingStyle = {
        backgroundColor : "black",
        color : "red",
        boxShadow : "5px 5px 10px red"
     }
    console.log(props);

    
    return(
        <header>
            {/* for styling you there are two types inline or external css */}
            {/* style={HeadingStyle} */}
            <h1 >Todo - List</h1>   
        </header>
    )
}

export default Header;