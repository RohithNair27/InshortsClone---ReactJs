import React from "react";
import "./Header.css";
import image from "../../assets/InshortsLogo.png";
function Header() {
  return (
    <>
      <button className="Header-redirect">
        <img src={image} className="Header-Image"></img>
      </button>
    </>
  );
}

export default Header;
