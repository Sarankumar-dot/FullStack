import React from 'react'
import styled   from 'styled-components';
import Counter from './Counter';

// using styled component library for styling
    let Button = styled.button
    `background-color : red;
    color : white;
    border-radius : 20px;
    border : 0px ;
    `

    // creating new button using old style components
    let NewButton = styled(Button)
    `box-shadow : 5px 5px 10px red;
    `


    let user = "saran";
    function printAnything(e){
        user = user + " welcome";
        console.log(user);

        console.log(e.target.innerText);
        
        console.log("print printAnything");
    }

    function printAnything1(value,event){
      user = user + " not welcome";
      console.log(user);
        console.log(event.target.innerText)
        console.log("print printAnything" , value);
    }
const Content = () => {
  return (
    
    <main>
        {/* for styling you there are two types inline or external css */}
        <h3 style={{backgroundColor : "red" ,color : "white"}}>Content {user}</h3>
        <Button onClick={printAnything}>Click me </Button>
        <NewButton onClick={(e) => {printAnything1("saran",e)}}>Dulplicate</NewButton>
        <Counter />
    </main>
  )
}

export default Content