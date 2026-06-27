import React from "react";

const Student = (props) => {
    const {name , age ,email} = props;

   

    return (
        <>
            <h1 className="btn btn-outline-success">{name}</h1>
            <h2>{age}</h2>
            <h3>{email}</h3>
        </>
    );
}

export default Student;