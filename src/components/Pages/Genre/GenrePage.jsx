import React, { useState } from "react";
import "./GenrePage.css";
import Card from "../../Card/Card";
import genres from "./genres";
import Table from "../../Table/Table";

function GenrePage() {
  const [layout, setLayout] = useState("grid");

  return (
    <main className="film-genre-page" id="main">
      <h2 className="film-genre-page__title">Film Genre</h2>

      <div className="film-genre-page__layout">
        <h4 className="film-genre-page__layout-title">Layout:</h4>
        <button
          onClick={(_) => setLayout("grid")}
          className={`film-genre-page__switch ${
            layout === "grid" ? "film-genre-page__switch-active" : ""
          }`}
          aria-label="Layout switch button">
          <i className="film-genre-page__grid-icon"></i>
        </button>
        <button
          onClick={(_) => setLayout("list")}
          className={`film-genre-page__switch ${
            layout === "list" ? "film-genre-page__switch-active" : ""
          }`}
          aria-label="Layout switch button">
          <i className="film-genre-page__list-icon"></i>
        </button>
      </div>
      {layout === "list" && (
        <div className="film-genre-page__list">
          <Table genres={genres} />
        </div>
      )}
      {layout === "grid" && (
        <div className="film-genre-page__cards">
          {genres.map((genre, index) => (
            <Card
              className={"film-genre-page__card"}
              key={index}
              title={genre.title}
              description={genre.description}
              examples={genre.examples}
              src={genre.src}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default GenrePage;
