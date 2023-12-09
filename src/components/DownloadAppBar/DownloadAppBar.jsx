import React from "react";
import "./DownloadAppBar.css";
import appleImage from "../../assets/applestore.png";
import googleImage from "../../assets/Goolestore.png";
function DownloadAppBar() {
  return (
    <div className="Downloadbar-container">
      <p>For the best experence use inshorts app on your smartphone </p>
      <div className="AppstoreImageContainer">
        <img src={appleImage} />
        <img src={googleImage} />
      </div>
    </div>
  );
}

export default DownloadAppBar;
