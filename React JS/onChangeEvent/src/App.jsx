import React, { useState } from "react";

const App = () => {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");

  const [same, setSame] = useState(false);
  const [check, setCheck] = useState(false);

  function handlePwd1(event) {
    setPwd1(event.target.value);
    // console.log(event.target.value);
  }

  function handlePwd2(event) {
    setPwd2(event.target.value);
    // console.log(event.target.value);
  }

  function checkSame(event) {
    console.log(event.target.checked);

    setCheck(event.target.checked);
    if (pwd1 == pwd2) {
      setSame(true);
    } else {
      setSame(false);
    }
  }

  return (
    <>
      <form
        style={{
          width: "300px",
          margin: "auto",
          marginTop: "200px",
          fontWeight: "bold",
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pwd1}
            onChange={handlePwd1}
          />

          <label className="form-label">Retype Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={pwd2}
            onChange={handlePwd2}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={checkSame}
          />
          <label className="form-check-label">Check me out</label>
        </div>

        {same
          ? check && <p>the passwords are same</p>
          : check && <p>passwords are not same re enter them</p>}
        <button type="submit" className="btn btn-primary">
          log in
        </button>
      </form>
    </>
  );
};

export default App;
