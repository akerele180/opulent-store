import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./assets/images/Logo.png";

const LazyOpulentApp = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Suspense
        fallback={
          <div className="text-center vh-100 d-flex align-items-center justify-content-center">
            <div className="">
              <img src={Logo} alt="" className="w-25" />
            </div>
          </div>
        }
      >
        <LazyOpulentApp />
      </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
