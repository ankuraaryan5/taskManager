import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex justify-center my-4">
      <input
        type="text"
        placeholder="Search by status..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-80 h-10 bg-gray-200 rounded-md px-4"
      />
    </div>
  );
}

export default SearchBar;
