import React from "react";
import Student from "./Student";
import Task from "./task";

const App = () => {

   const arr = [
     {
       id: 1,
       name: "Kumar",
       role: "Developer",
     },
     {
       id: 2,
       name: "Rahul",
       role: "Tester",
     },
   ];
  return (
    // <div>
    //   <h1>Sarankumar</h1>
    //   <h2 className="h1">Unemployed</h2>
    //   <h2>Full stack developer</h2>

    //   {arr.map((value,index) => <Student key ={index} name = {value.name} age = {value.id} email = {value.role}/>)}



    //   {/* <Student name="saran" age="22" email="kumarsaran2004@gmail.com" />
    //   <Student name="Sarankumar" age="22" email="saran@gmail.com" />
    //   <Student name="Rahul" age="21" email="rahul@gmail.com" />
    //   <Student name="Kumar" age="23" email="kumar@gmail.com" /> */}
    // </div>

    <div>
      <Task />
    </div>

   
  );
};

export default App;
