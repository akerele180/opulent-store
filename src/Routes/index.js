import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
const LoginPage = lazy(() => import("../Pages/Auth/Login"));
const SignUpPage = lazy(() => import("../Pages/Auth/SignUp"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth">
          <Route index path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
