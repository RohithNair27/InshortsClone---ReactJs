import React from "react";
import "./NewsComponent.css";
function NewsComponent({ newsData }) {
  console.log(newsData.url);
  return (
    <section className="each-news-container">
      <img src={newsData.urlToImage} className="each-news-img"></img>

      <article className="each-news-text">
        <h1>{newsData.title}</h1>
        <span>{newsData.description}</span>
        <p>
          read more on{" "}
          <a href={newsData.url} target="_blank">
            {newsData.source.name}
          </a>
        </p>
      </article>
    </section>
  );
}

export default NewsComponent;
