import { SettingContext } from "./Context";
import React, { useState } from "react";

function SettingsContextProvider({ children }) {
  const [language, setLanguage] = useState(true);
  const [sideDrawerOpen, setSideDrawerOpen] = useState(true);

  const changeLanguage = (stateOfLanguage) => {
    setLanguage(stateOfLanguage);
  };

  const changeSideBar = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <SettingContext.Provider
      value={{ language, changeLanguage, sideDrawerOpen, changeSideBar }}
    >
      {children}
    </SettingContext.Provider>
  );
}

export default SettingsContextProvider;
