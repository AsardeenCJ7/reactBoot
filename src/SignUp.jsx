import React, { useState } from "react";

export default function SignUp() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [check, setCheck] = useState(false);

  function handleOnchangePwd1(event) {
    setPwd1(event.target.value);
    console.log(pwd1);
  }

  function handleOnchangePwd2(event) {
    // setPwd2(event.target.value);
    const value = event.target.value;
    setPwd2(value);
    if (pwd1 == value) {
      setCheck(true);
      console.log({ check });
    } else {
      setCheck(false);
      console.log({ check });
    }
    //console.log(pwd2);
    // buttonCheck();  this is not proper way bcz, You're calling buttonCheck() after updating pwd2, but due to state update delay, pwd2 still holds the old value.
  }

  // function buttonCheck() {
  //   if (pwd1 == pwd2) {
  //     setCheck(true);
  //     console.log({ check });
  //   } else {
  //     setCheck(false);
  //     console.log({ check });
  //   }
  // }

  return (
    <>
      <form
        className="my-5"
        style={{
          width: "25%",
          margin: "auto",
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Type Your Password
          </label>
          <input
            onChange={handleOnchangePwd1}
            value={pwd1} //this like show in field
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Re-Type Your Password
          </label>
          <input
            onChange={handleOnchangePwd2}
            value={pwd2} //this like show in field
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            // onChange={buttonCheck}
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            I Agree
          </label>
        </div>
        {/* {check ? <p>Password match</p> : <p>Password Does not match</p>}  or */}
        {check && <p>Password Match</p>}
        {!check && <p>Password Does not Match</p>}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
