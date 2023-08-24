import React from "react";
import { HashRouter, Routes, Route, Navigate,  } from "react-router-dom";

import Login from "../Pages/Auth/Login/Login";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUP from "../Pages/Auth/SignUp/SignUP";
import ContactUs from "../Pages/Auth/ContectUsPage/ContactUs";
import Service from "../Pages/ServicesPage/Service";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Teams from "../Pages/Private/Teams/Teams"


// import Header from "../components/Header/Header";
// import ContactUs from "../Pages/Auth/ContactUsPage/ContactUs";
// import contactUs from "../Pages/Auth/ContectUsPage/ContactUs";
const routes = () => {
  // function ProtectedRoutes({ children }) {
  //     const auth = localStorage.getItem("authToken");
  //     return auth ? children : <Navigate to="/" />;
  //   }
  return (
       
      <Routes>
        <Route exact path={"/"} element={<LandingPage />} />
        <Route exact path={"/login"} element={<Login />} />
        <Route exact path={"/register"} element={<SignUP/>} />
        <Route exact path={"/contactUs"} element={<ContactUs/>} />
        <Route exact path={"/service"} element={<Service/>}/>
        <Route exact path={"/about"} element={<AboutPage/>}/>
        <Route exact path={"/about"} element={<AboutPage/>}/>
        <Route exact path={"/teams"} element={<Teams/>}/>
        {/* <Route exact path="/Header" element={<Header/>} /> */}
      </Routes>
  );
};

export default routes;
