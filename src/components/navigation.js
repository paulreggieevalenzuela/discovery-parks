import React from "react";

const Navigation = ({ title }) => {

  return (
    <nav className="nav-container">
      <h1 className="typo typo--title typo--uppercase">{title}</h1>
    </nav>
  );
};

export default Navigation;
