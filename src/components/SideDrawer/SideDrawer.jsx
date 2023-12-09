import React, { useContext } from "react";
import { DataFetchingContext } from "../../Context/DataFetchingContext/DataFetchingContext";
import { categoriesConstants } from "../../constants/CategoriesConstant";
import { SettingContext } from "../../Context/SettingsContext/Context";
import "./SideDrawer.css";

function SideDrawer() {
  const { language, changeLanguage } = useContext(SettingContext);

  const { categories, changeCategories } = useContext(DataFetchingContext);
  return (
    <section className="SideDrawer-container">
      <div className="Language-container">
        <button
          onClick={() => changeLanguage(true)}
          className={`languageButton${language ? "selected" : ""}`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage(false)}
          className={`languageButton${language ? "" : "selected"}`}
        >
          हिंदी
        </button>
      </div>

      <div className="Categories-container">
        <p>Categories</p>
        <ul>
          {categoriesConstants.map((element) => {
            return (
              <li>
                <button
                  className={`category-button ${
                    categories === element ? "selected" : ""
                  }`}
                  onClick={() => changeCategories(element)}
                >
                  {element}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default SideDrawer;
