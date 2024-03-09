import React, { useState } from "react";
import "./PopularMovies.css";
import movies from "./movies";

function PopularMovies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? movies.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === movies.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <main id="main">
      <h2 className="popular-movies__title">Popular Movies</h2>
      <div className="carousel">
        <div
          className="carousel__inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {movies.map((movie, index) => (
            <div className="carousel__item" key={index}>
              <img
                src={movie.image}
                alt={movie.title}
                className="carousel__item__image"
              />
              <div className="carousel__item__caption">
                <h3 className="carousel__item__title">{movie.title}</h3>
                <p className="carousel__item__description">
                  {movie.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel__button-prev" onClick={goToPrevious}>
          <h3>{`⇠ Prev`}</h3>
        </button>
        <button className="carousel__button-next" onClick={goToNext}>
          <h3>{`Next ⇢`}</h3>
        </button>
      </div>
    </main>
  );
}

export default PopularMovies;
