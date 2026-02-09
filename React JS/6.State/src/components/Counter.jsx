import React, { useState } from 'react'
import { use } from 'react';



const Counter = () => {

// Normal variables reset on every render because the component function runs again.
// So React does not remember their value.

// useState is a hook that allows React to remember values between renders.
// When the state updates, React re-renders the component,
// but it keeps the latest stored state value instead of resetting it.

// Normal variable → resets because function runs again
// useState → stored by React outside the function
// setState → tells React to update value and re-render
// Re-render does NOT reset state


    function returnState(){
        return 100;
    }
    const [state,setState] = useState(returnState);

    // let user = 0;
    // syntax for useState


    const [count , setCount] = useState(state);

   

    function handleIncrease(){
        // user+=1;
        // console.log(user);

        // setCount(count +1); instead of using like this we can use an anonymous function
        setCount((prevCount) => prevCount +1);
        setCount((prevCount) => prevCount +1);
        setCount((prevCount) => prevCount +1);
    }

    function handleDecrease(){
        // user-=1;
        // console.log(user)
        // setCount(count -1);

        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
    }


  return (
    <div>
        <h1>Counter {count}</h1>
        <button onClick={ handleIncrease }>Increase Count</button>
        <button onClick={ handleDecrease }>Decrease Count</button>
    </div>
  )
}

export default Counter