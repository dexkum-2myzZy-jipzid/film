import React, { useState } from "react";
import "./Card.css";

function Card({ className, title, description, examples, src }) {
  // State to track whether the card is being hovered over
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${className} card`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={title}>
      {isHovered ? (
        // If the card is being hovered over, display the description and examples
        <div className="card__text-wrapper">
          <h3 className="card__text-wrapper__h3">Description:</h3>
          <p className="card__text-wrapper__description">{description}</p>
          <h3 className="card__text-wrapper__h3">Examples:</h3>
          <ul className="card__examples">
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      ) : (
        // If the card is not being hovered over, display the image and title
        <>
          <div className="card__image-wrapper">
            <img src={src} alt={`${title} genre`} className="card__image" />
          </div>
          <h3 className="card__text-wrapper__title">{title}</h3>
        </>
      )}
    </div>
  );
}

export default Card;
