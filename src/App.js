import React, { useState, useEffect } from "react";
import "./App.css";
import Signin from "./Components/auth/Signin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import PublicRoute from "./utils/PublicRoute";
import PrivateRoute from "./utils/PrivateRoute";
import Navbar from "./Components/Navbar";
import Account from "./Pages/Account";
import MenInTech from "./Pages/MenInTech";
import WomenInTech from "./Pages/WomenInTech";
// const url = "http://localhost:5000/verifyToken?token=";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/account" element={<PrivateRoute />}>
            <Route exact path="/account" element={<Account />}></Route>
          </Route>
          <Route exact path="/men-in-tech" element={<PrivateRoute />}>
            <Route exact path="/men-in-tech" element={<MenInTech />}></Route>
          </Route>
          <Route exact path="/women-in-tech" element={<PrivateRoute />}>
            <Route
              exact
              path="/women-in-tech"
              element={<WomenInTech />}
            ></Route>
          </Route>
          <Route exact path="/signin" element={<PublicRoute />}>
            <Route exact path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
