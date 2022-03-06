import React from "react";
import styledComponents from "styled-components";

function SearchBar() {
  return (
    <Search>
      <SearchBar className="search" placeholder="search food, drinks etc" />
    </Search>
  );
}

const Search = styledComponents.div``;
export default SearchBar;
