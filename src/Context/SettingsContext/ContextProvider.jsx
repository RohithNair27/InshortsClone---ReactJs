import { SettingContext } from "./Context";
import React, { useState } from "react";

function SettingsContextProvider({ children }) {
  const [language, setLanguage] = useState(true);

  const changeLanguage = (stateOfLanguage) => {
    setLanguage(stateOfLanguage);
  };

  return (
    <SettingContext.Provider value={{ language, changeLanguage }}>
      {children}
    </SettingContext.Provider>
  );
}

export default SettingsContextProvider;
