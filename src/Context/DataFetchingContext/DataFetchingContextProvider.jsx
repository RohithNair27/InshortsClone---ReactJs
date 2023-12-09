import React, { useEffect, useState } from "react";
import { DataFetchingContext } from "./DataFetchingContext";
import { Top_headlines } from "../../APIs/API";

import axios from "axios";
function DataFetchingContextProvider({ children }) {
  const [categories, setCategories] = useState("Business");

  const [News, setNews] = useState([]);

  const changeCategories = (category) => {
    setCategories(category);
    getTopHeadline(category.toLowerCase());
  };
  const getTopHeadline = (Data) => {
    axios
      .get(Top_headlines(Data, "in"))
      .then((news) => {
        setNews(news.data.articles);
      })
      .catch(() => {
        console.log("no news");
      });
  };

  useEffect(() => {
    getTopHeadline(categories.toLowerCase());
  }, []);

  return (
    <DataFetchingContext.Provider
      value={{ News, categories, changeCategories }}
    >
      {children}
    </DataFetchingContext.Provider>
  );
}

export default DataFetchingContextProvider;
