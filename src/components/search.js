"use strict";

import React from "react";
import ajax from "@fdaciuk/ajax";

const Search = ({ handleSearch }) => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite o nome do usuário no Github"
      onKeyUp={handleSearch}
    />
  </div>
);

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
};

export default Search;
