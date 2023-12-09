import React from "react";
import "./NewsComponent.css";
import { Skeleton } from "@mui/material";
function NewsComponent({ newsData, loading }) {
  return (
    <section className="each-news-container">
      <div className="each-news-img">
        {loading ? (
          <Skeleton
            variant="rectangular"
            className="each-img"
            height={"100%"}
          />
        ) : (
          <img src={newsData.urlToImage} className="each-img"></img>
        )}
      </div>
      <article className="each-news-text">
        {loading ? (
          <Skeleton variant="text" height={"50%"} />
        ) : (
          <h1>{newsData.title}</h1>
        )}

        {loading ? (
          <Skeleton variant="text" height={"20%"} />
        ) : (
          <span>{newsData.description}</span>
        )}

        {loading ? (
          <Skeleton variant="text" height={"20%"} />
        ) : (
          <p>
            read more on{" "}
            <a href={newsData.url} target="_blank">
              {newsData.source.name}
            </a>
          </p>
        )}
      </article>
    </section>
  );
}

export default NewsComponent;
