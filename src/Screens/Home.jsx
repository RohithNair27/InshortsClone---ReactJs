import React from "react";
import { useContext } from "react";
import Header from "../components/Header/Header";
import DownloadAppBar from "../components/DownloadAppBar/DownloadAppBar";
import NewsComponent from "../components/NewsComponent/NewsComponent";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import { DataFetchingContext } from "../Context/DataFetchingContext/DataFetchingContext";
import "../App.css";

function Home() {
  const { News } = useContext(DataFetchingContext);
  return (
    <div className="App">
      <SideDrawer />
      <header className="news-header">
        <Header />
      </header>
      <main className="news-container">
        <DownloadAppBar />
        {News.map((element) => {
          return <NewsComponent newsData={element} />;
        })}
      </main>
    </div>
  );
}

export default Home;
