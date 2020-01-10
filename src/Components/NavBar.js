import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import SubNav from "./SubNav";

const NavBar = props => {
  const [visibility, setVisibility] = useState(false);

  const animateNav = () => setVisibility(prevState => !prevState);

  console.log(props.links);

  return (
    <div className="nav-bar" onClick={animateNav}>
      <Navbar fixed="top" className="navigation-bar" expand="xl">
        <NavLink to="apple-router-nav.netlify.com/">
          <img
            className="apple-logo"
            src={require("../Images/apple.png")}
            alt="nav"
          />
        </NavLink>
        {props.links.map((link, index) => (
          <HeadLink key={index} link={link} />
        ))}
        <NavLink
          to="apple-router-nav.netlify.com/Support"
          className="nav-link"
          onClick={animateNav}
        >
          <p>Support</p>
        </NavLink>
        <NavLink
          to="apple-router-nav.netlify.com/Search"
          classname="nav-link"
          id="search"
          onClick={animateNav}
        >
          <i className="fas fa-search" />
        </NavLink>
        <NavLink
          to="apple-router-nav.netlify.com/Shopping"
          className="nav-link"
          id="shop"
          onClick={animateNav}
        >
          <i className="fas fa-shopping-bag" />
        </NavLink>
      </Navbar>
      {props.links.map((link, index) => (
        <Route
          path={`apple-router-nav.netlify.com/${link.name}`}
          render={props => (
            <SubNav {...props} link={link} visibility={visibility} />
          )}
        />
      ))}
    </div>
  );
};

export default NavBar;

function HeadLink({ link }) {
  const { name } = link;
  return (
    <div className="nav-link">
      <NavLink to={`/${name}`}>{name}</NavLink>
    </div>
  );
}
