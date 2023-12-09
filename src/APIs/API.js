const BASE_URL = "https://saurav.tech/NewsAPI/";

export const Top_headlines = (categories, country) => {
  return `${BASE_URL}top-headlines/category/${categories}/${country}.json`;
};
