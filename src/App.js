import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home/Home";
import About from "./About/About";
import Images from "./Dropdown/Images";
import Products from "./Dropdown/Products";
import Header from "./Header/Header";
import "./App.css";
import SignIn from "./SignInUp/SignIn";
import SignUp from "./SignInUp/SignUp";

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';
  console.log(location, isAuthPage, '15::')
  return (
    <>
      <Header />
      <main>
        <Routes>
          
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/images" element={<Images />} />
              <Route path="/products" element={<Products />} />
              <Route path="/signin" element={<SignIn />}/>
              <Route path="/signup" element={<SignUp />} />
            </>
          

        </Routes>
      </main>
    </>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;