// Poem.js
import React from "react";
import "./Poem.css";

const Poem = ({ title, text, date }) => {
  return (
    <div className="poem-container">
      <div className="poem-card">
        <h2 className="poem-title">{title}</h2>
        <div className="poem-text">
          {text.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="poem-date">{date}</div>
      </div>
    </div>
  );
};

export default Poem;
