import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./Components/NavBar";

import "./App.css";

import data from "./navDataArray";

const App = () => {
  console.log(data);

  const navLinks = data;

  console.log(navLinks);

  return (
    <div className="App">
      <Route
        path="apple-router-nav.netlify.com/"
        render={props => <NavBar {...props} links={navLinks} />}
      />
      <div className="home-splash">
        <h1>iPhone 11 Pro</h1>
        <h2>Pro cameras. Pro display. Pro performance</h2>
        <p>From $24.95/mo. or $599 with trade-in.</p>
        <img
          src="https://picsum.photos/2000/700"
          alt="home"
          className="placeholder-image"
        />
      </div>
    </div>
  );
};

export default App;
