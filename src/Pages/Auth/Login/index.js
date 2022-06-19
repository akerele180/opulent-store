import React from "react";
import "./Auth.Style.css";
import Logo from "../../../assets/images/Logo.png";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="d-flex">
      <div style={{ width: "55%" }} id="auth-bg">
        <ul className="list-unstyled px-3">
          <li className="text-white text-end">
            <Link to="signup">
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
          <h2 className="text-center">Log In</h2>

          <label className="lh-lg mt-2" htmlFor="first_name">
            Email Addres
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
            type="submit"
            style={{ background: "#825c88" }}
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
