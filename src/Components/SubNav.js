import React from "react";

import { NavLink } from "react-router-dom";

const SubLinks = props => {
  let visibility = "hidden";

  if (props.visibility) {
    visibility = "visible";
  }
  return (
    <nav id="sub-nav-bar" className={visibility}>
      {props.link.subLinks.map((link, index) => (
        <SubLink key={`sub-${index}`} link={link} />
      ))}
    </nav>
  );
};

export default SubLinks;

function SubLink({ link }) {
  const { name } = link;
  return (
    <div className="sub-link">
      <NavLink to={`apple-router-nav.netlify.com/${name}`}>
        <img src={link.img} alt="sub" />
        <p>{name}</p>
      </NavLink>
    </div>
  );
}
