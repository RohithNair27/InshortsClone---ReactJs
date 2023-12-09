import React, { useEffect, useState } from "react";
import { DataFetchingContext } from "./DataFetchingContext";
import { Top_headlines } from "../../APIs/API";

import axios from "axios";
function DataFetchingContextProvider({ children }) {
  const [categories, setCategories] = useState("Business");
  const [loading, setLoading] = useState(true);
  const [News, setNews] = useState([]);

  const changeCategories = (category) => {
    setLoading(true);
    setCategories(category);
    getTopHeadline(category.toLowerCase());
  };
  const getTopHeadline = (Data) => {
    axios
      .get(Top_headlines(Data, "in"))
      .then((news) => {
        setLoading(true);
        setNews(news.data.articles);
        setLoading(false);
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
      value={{ News, categories, changeCategories, loading }}
    >
      {children}
    </DataFetchingContext.Provider>
  );
}

export default DataFetchingContextProvider;
