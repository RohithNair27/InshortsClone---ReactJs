import React from "react";
import "./Footer.css";
import inshortImage from "../../assets/InshortsLogoWhite.png";
import contact from "../../assets/Contact-icon.png";
function Footer() {
  return (
    <>
      <div className="footer-Container">
        <div className="Left-footer">
          <img src={inshortImage} className="footer-Image"></img>
          <p className="footer-Ltd-text">
            <span>Inshort</span> Pte. Ltd.
          </p>
          <p>COPYRIGHT 2023</p>
        </div>
        <div className="right-footer">
          <img src={contact} className="footer-Image"></img>
        </div>
      </div>
    </>
  );
}

export default Footer;
