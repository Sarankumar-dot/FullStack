import React, { useContext } from 'react'
import { userContext } from '../App';

const Child = ({name = "guest" , age = 18}) => {
    
    // const {name , age} = value;
    // console.log(name , age);


    // receiving the data from the app.jsx -> header.jsx -> Child.jsx
    // thats how props drilling works


    // using context api 

    let {namee , agee, genderr} = useContext(userContext);
    console.log( " oooooo ",namee , agee ,genderr);

    console.log(name , age);
  return (
     

    <div>

    </div>
  )
}

export default Child

