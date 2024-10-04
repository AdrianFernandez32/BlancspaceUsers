import React from "react";

function SearchBar({ onSearch }) {
  // TODO: Implement search input and handle changes.

  return (
    <input
      type="text"
      placeholder="Search users..."
      className="p-2 border border-gray-300 rounded-md"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
