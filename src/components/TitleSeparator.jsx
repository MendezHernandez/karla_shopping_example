import React from "react";
import "../styles/TitleSeparator.css";

const TitleSeparator = ({ text }) => {
  return (
    <div className="title-separator">
      <h2>{text}</h2>
    </div>
  );
};

export default TitleSeparator;
