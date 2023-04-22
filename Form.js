import React from "react";

export default function Form() {
  return (
    <div className="d-flex justify-content-center">
      <form className="col-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-primary">
            Email or Phone
          </label>
          <input
            type="email,tel"
            className="form-control border-primary"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-primary">
            Password
          </label>
          <input
            type="password"
            className="form-control border-primary"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <span className="text-primary">Forgot Password</span>
        </div>
        <div className="d-flex justify-content-center m-4">
        <button type="submit" className="btn btn-outline-primary m-3 col-2">
          <center>Login</center>
        </button>
        <button type="submit" className="btn btn-outline-primary m-3 col-2">
          <center>Signup</center>
        </button>
        </div>
      </form>
    </div>
  );
}
