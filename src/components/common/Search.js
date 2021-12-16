import React from "react";

function Search() {
  return (
    <form>
      <div class="input-group input-group-flush input-group-merge">
        <input
          type="search"
          class="form-control form-control-prepended list-search"
          placeholder="Search"
        />

        <div class="input-group-prepend">
          <div class="input-group-text">
            <span class="fe fe-search"></span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
