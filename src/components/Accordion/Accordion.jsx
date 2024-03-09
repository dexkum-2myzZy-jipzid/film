import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ className, items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`${className} accordion`}>
      {items.map((item, index) => (
        <div key={index} className="accordion__item">
          <button
            className={`accordion__header 
              ${openIndex === index ? "accordion__header--active" : ""} 
              ${index === 0 ? "accordion__header--first" : ""} 
              ${index === items.length - 1 ? "accordion__header--last" : ""}`}
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-label={`Toggle ${item.title}`}>
            {item.title}
          </button>
          {openIndex === index && (
            <div
              className={`accordion__body ${
                index === items.length - 1 ? "accordion__body--last" : ""
              }`}
              id={`accordion-body-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
