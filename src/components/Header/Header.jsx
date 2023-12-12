import React from "react";
import "./Header.css";
import image from "../../assets/InshortsLogo.png";
import { IoMenu, IoCloseSharp } from "react-icons/io5";
import { SettingContext } from "../../Context/SettingsContext/Context";
import { useContext } from "react";
function Header() {
  const { sideDrawerOpen, changeSideBar } = useContext(SettingContext);
  return (
    <header className="news-header">
      <div className="Header-button">
        {sideDrawerOpen ? (
          <button
            onClick={() => changeSideBar()}
            className={"HeaderSideDrawer"}
          >
            <IoMenu size={35} />
            <span>Menu</span>
          </button>
        ) : (
          <button
            onClick={() => changeSideBar()}
            className={"HeaderSideDrawerclosed"}
          >
            <IoCloseSharp size={35} />
            <span>Close</span>
          </button>
        )}
      </div>
      <button className="Header-redirect">
        <img src={image} className="Header-Image"></img>
      </button>
    </header>
  );
}

export default Header;
