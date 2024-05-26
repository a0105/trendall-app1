import React from "react";
import Header from "../components/ui/Header";
import SearchComponent from "../components/ui/SearchComponent";
import SearchResults from "../components/ui/SearchResults";

const BasicSearch = () => {
  return (
    <div>
      <Header />
          <SearchComponent />
      
          <SearchResults />
      
    </div>
  );
};

export default BasicSearch;
