import React from "react";
import VaseCard from "./VaseCard";

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      {results.map((vase) => (
        <VaseCard key={vase.id} vase={vase} />
      ))}
    </div>
  );
};

export default SearchResults;
