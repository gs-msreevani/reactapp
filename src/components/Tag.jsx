import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag }) => {
  return (
    <button className="tag" type="button" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;
