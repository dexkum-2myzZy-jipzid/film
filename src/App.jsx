import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "./components/Context/ThemeConext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import HomePage from "./components/Pages/Home/Home";
import GenrePage from "./components/Pages/Genre/GenrePage";
import SubscribePage from "./components/Pages/Subscribe/SubscribePage";
import PopularMovies from "./components/Pages/PopularMovies/PopularMovies";

function App() {
  const [page, setPage] = useState("");

  useEffect(() => {
    function setPageToCurrentURL() {
      setPage(document.location.pathname);
    }

    setPageToCurrentURL();

    console.log("adding litener");
    window.addEventListener("popstate", setPageToCurrentURL);

    return () => {
      console.log("cleanup");
      window.removeEventListener("popstate", setPageToCurrentURL);
    };
  }, []);

  //Theme (light & dark)
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <div id="theme-body" className={theme}>
        <Header setPage={setPage} />
        {page == "/" && <HomePage />}
        {page == "/genre-page" && <GenrePage />}
        {page == "/popular-movies" && <PopularMovies />}
        {page == "/subscribe-page" && <SubscribePage />}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
