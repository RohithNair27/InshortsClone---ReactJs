import React from "react";
import { useContext } from "react";
import Header from "../components/Header/Header";
import DownloadAppBar from "../components/DownloadAppBar/DownloadAppBar";
import NewsComponent from "../components/NewsComponent/NewsComponent";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Footer from "../components/Footer/Footer";
import { DataFetchingContext } from "../Context/DataFetchingContext/DataFetchingContext";
import { SettingContext } from "../Context/SettingsContext/Context";

import "../App.css";

function Home() {
  const { News, loading } = useContext(DataFetchingContext);
  const { sideDrawerOpen } = useContext(SettingContext);
  return (
    <div className="App">
      <SideDrawer />
      <Header />

      <main className="news-container">
        <DownloadAppBar />
        {loading ? (
          <>
            <NewsComponent loading={loading} />
            <NewsComponent loading={loading} />
          </>
        ) : (
          News.map((element) => (
            <NewsComponent key={element.id} newsData={element} />
          ))
        )}
        <footer className="FooterContainer">
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default Home;
