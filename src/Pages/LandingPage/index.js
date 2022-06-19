import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { GrTwitter, GrInstagram, GrFacebookOption } from "react-icons/gr";
import { catalogue } from "../../utils";
import Card from "../../components/Cards";

const LandingPage = () => {
  return (
    <div>
      <div className="text-center py-3" style={{ height: "10vh" }}>
        <img src={Logo} alt="" className="mx-auto" style={{ height: "100%" }} />
      </div>
      <header className="bg-white d-flex " style={{ height: "6vh" }}>
        <div className="container d-flex align-items-center justify-content-between lh-lg">
          <nav className="d-flex align-items-center">
            <ul className="list-unstyled d-flex lh-lg mb-0">
              <li className="lh-lg">
                <NavLink className="lh-lg" to="/">
                  Home
                </NavLink>
              </li>
              <li className="lh-lg ms-3">
                <NavLink className="lh-lg" to="categories">
                  Categories
                </NavLink>
              </li>
              <li className="lh-lg ms-3">
                <NavLink className="lh-lg" to="messages">
                  Messages
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="auth">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
                checked
              />
              <label className="btn btn-outline-primary" for="btnradio1">
                Login
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-outline-primary" for="btnradio2">
                Sign Up
              </label>
            </div>
          </div>
        </div>
      </header>
      {/* catalogue starts here */}
      <main className="container">
        <h5 className="text-center d-inline-block">CATALOGUE</h5>
        <select name="" id="" className="p-2 float-end">
          <option value="0">Filter</option>
          <option value="1">Newest - Oldest</option>
          <option value="2">Oldest- Newswst</option>
          <option value="3">Low - High</option>
          <option value="4">High - Low</option>
        </select>
        <section className="container mx-auto row row-cols-md-3 row-cols-lg-4 row-cols-1">
          {catalogue.length !== 0 &&
            catalogue.map((item, idx) => {
              return (
                <div key={idx} className="p-2">
                  <Card
                    idx={idx}
                    title={item.title}
                    price={item.price}
                    article={item.article}
                    image={item.image}
                  />
                </div>
              );
            })}
        </section>
      </main>

      {/* catalogue ends here */}
      {/* footer starts here */}
      <footer className="text-white py-5" style={{ background: " #333333" }}>
        <div className="row container mx-auto">
          <ul className="list-unstyled col-12 col-md-6 col-lg">
            <h4 className="fw-bold">Company</h4>
            <li className="lh-lg">What we do</li>
            <li className="lh-lg">About us</li>
            <li className="lh-lg">Product Listing</li>
          </ul>
          <ul className="list-unstyled col-12 col-md-6 col-lg">
            <h4 className="fw-bold">Legal</h4>
            <li className="lh-lg">Privacy Policy</li>
            <li className="lh-lg">Terms of Use</li>
          </ul>
          <ul className="list-unstyled col-12 col-md-6 col-lg">
            <h4 className="fw-bold">Support</h4>
            <li className="lh-lg">Contact Us</li>
            <li className="lh-lg">FAQs</li>
          </ul>{" "}
          <ul className="col-12 col-md-6 col-lg list-unstyled">
            <h4 className="fw-bold">Connect with Us</h4>
            <li className="d-inline-block">
              <GrTwitter
                size={30}
                style={{
                  background: "#fdfcfc20",
                  borderRadius: "50%",
                  padding: "7px",
                }}
              />
            </li>
            <li className="d-inline-block px-3">
              <GrInstagram
                size={30}
                style={{
                  background: "#fdfcfc20",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </li>
            <li className="d-inline-block">
              <GrFacebookOption
                size={30}
                style={{
                  background: "#fdfcfc20",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              />
            </li>
          </ul>
        </div>
      </footer>
      {/* footer ends here */}
    </div>
  );
};

export default LandingPage;
