import React, { Fragment, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About/about";
import PrivateRoute from "./privateRoute";
import Home from "../components/Home/Home";
import { AuthContext } from "../auth/AuthContext";

const RouterDefault = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    // <Router basename="/react-enterprise-architecture">
    //   <Routes>
    //   <Route exact path="/" element={<About />} />

    //       <Route exact path="/about" element={<PrivateRoute />}>
    //     </Route>
    //   </Routes>
    // </Router>
    <Router basename="/react-enterprise-architecture">
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Home />} />

          <Route
            exact
            path="/about"
            element={<PrivateRoute isAuthenticated={isAuthenticated} />}
          >
            <Route exact path="" element={<About />} />
            
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default RouterDefault;
