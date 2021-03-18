"use strict";

import React from "react";
// import ajax from "@fdaciuk/ajax"

const Search = () => (
  <div className="search">
    <input
      type="search"
      placeholder="Digite o nome do usuário no Github"
      onKeyUp={(e) => {
        const keyCode = e.which || e.keyCode;
        console.log(keyCode);
      }}
    />
  </div>
);

export default Search;
