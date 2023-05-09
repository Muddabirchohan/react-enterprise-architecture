import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import PageLayout from "../layouts/pageLayout";
import About from "../components/About/about";
import App from "../App";

const RouterDefault = () => (
  <Router basename="/react-enterprise-architecture">
    <Routes>
    {/* <Route path="/api/v1/app/login" element={<MainSection/>} /> */}

      <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<App/>} />

        <Route path="/api/v1/about" element={<About/>} />

      </Route>
    </Routes>
  </Router>
);

export default RouterDefault