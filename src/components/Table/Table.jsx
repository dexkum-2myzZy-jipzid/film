import React from "react";
import "./Table.css";

function Table({ genres }) {
  return (
    <table className="table" aria-label="Genre table">
      <tr className="table__row">
        <th className="table__header">Genre</th>
        <th className="table__header">Description</th>
        <th className="table__header">Examples</th>
      </tr>
      {genres.map((genre) => (
        <tr className="table__row">
          <td className="table__data">{genre.title}</td>
          <td className="table__data">{genre.description}</td>
          <td className="table__data">
            {genre.examples.map((example, index) => (
              <ul className="table__examples">
                <li key={index} className="table__example">
                  {example}
                </li>
              </ul>
            ))}
          </td>
        </tr>
      ))}
    </table>
  );
}

export default Table;
