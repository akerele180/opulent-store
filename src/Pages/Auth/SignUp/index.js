import React from "react";
import "../Login/Auth.Style.css";
import Logo from "../../../assets/images/Logo.png";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="d-flex">
      <div
        style={{ width: "55%" }}
        id="auth-bg"
        className=" d-flex align-items-center justify-content-end"
      >
        <ul className="list-unstyled px-3">
          <li className="text-white text-end">
            <Link to="./login">
              <h5 className="lh-lg">
                Create an Account
                <GoPrimitiveDot style={{ marginLeft: "10px" }} />
              </h5>
            </Link>
          </li>
          <li className="text-white text-end">
            <h5 className="lh-lg">
              Search Products
              <GoPrimitiveDot style={{ marginLeft: "10px" }} />
            </h5>
          </li>
          <li className="text-white  text-end">
            <h5 className="lh-lg">
              Make request for Wears
              <GoPrimitiveDot style={{ marginLeft: "10px" }} />
            </h5>
          </li>
        </ul>
      </div>
      <div className="flex-grow-1 p-4" style={{ background: "#e5e5e5" }}>
        <div className="text-center mx-auto" style={{ maxWidth: "140px" }}>
          <img src={Logo} alt="" className="w-100" />
        </div>
        <form className="bg-white p-5 rounded" onSubmit={handleSubmit}>
          <h4 className="text-center">Create an Account</h4>
          <label className="lh-lg mt-2" htmlFor="first_name">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            className="w-100 py-1 px-2"
          />
          <br />
          <label className="lh-lg mt-2" htmlFor="first_name">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
            className="w-100 py-1 px-2 "
          />
          <br />
          <label className="lh-lg mt-2" htmlFor="first_name">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@xyz.com"
            className="w-100 py-1 px-2 "
          />
          <br />
          <label className="lh-lg mt-2" htmlFor="first_name">
            Phone Number
          </label>
          <input
            type="number"
            name="phone_number"
            id="phone_number"
            placeholder="08099823455"
            className="w-100 py-1 px-2 "
          />
          <br />
          <label className="lh-lg mt-2" htmlFor="first_name">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-100 py-1 px-2 "
          />
          <br />
          <button
            className="btn text-center text-white w-100 mt-5"
            style={{ background: "#825c88" }}
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
