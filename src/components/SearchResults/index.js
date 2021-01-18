import React, { useContext } from "react";
import ProjectContext from "../../utils/ProjectContext";
import "./style.css";

function SearchResults() {
  const {title, url} = useContext(ProjectContext);
  return (
    <ul className="list-group search-results">
      <li className="list-group-item">
        <h2>{title}</h2>
        <a href={url}>{url}</a>
      </li>
    </ul>
  );
}
export default SearchResults;
