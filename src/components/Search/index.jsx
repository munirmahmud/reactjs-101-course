import React, { useState } from "react";

const Search = () => {
  const [showInput, setShowInput] = useState(false);

  const handleShowSearch = () => {
    setShowInput((prevStatus) => !prevStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowInput(false);
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <i onClick={handleShowSearch} className="fa fa-search"></i>

        {showInput && (
          <div className="field-toggle">
            <input
              type="text"
              className="search-form"
              autoComplete="off"
              placeholder="Search"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default Search;
