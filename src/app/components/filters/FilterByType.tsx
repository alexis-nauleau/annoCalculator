import React from "react";
import FilterByTypeProps from"@/app/types"



export default function FilterByType({ filter, setFilter, onFilterChange }: FilterByTypeProps) {
  return (
    <select
      onChange={(e) => {
        setFilter(e.target.value);
        onFilterChange(e.target.value);
      }}
      value={filter}
      className="bg-white text-black py-2 px-4 border border-gray-300 rounded-md"
    >
      <option value="all">Tous</option>
      <option value="corpo">Corporation</option>
      <option value="th">Town Hall</option>
    </select>
  );
}
