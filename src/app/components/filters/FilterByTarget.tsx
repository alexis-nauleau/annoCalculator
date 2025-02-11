import React from "react";

import FilterByTargetProps from"@/app/types"

export default function FilterByTarget({ targetFilter, setTargetFilter, allTargets }: FilterByTargetProps) {
  return (
    <select
      onChange={(e) => setTargetFilter(e.target.value)}
      value={targetFilter}
      className="bg-white text-black py-2 px-4 border border-gray-300 rounded-md w-[30%]"
    >
      <option value="all">Toutes les cibles</option>
      {allTargets.map((target, index) => (
        <option key={index} value={target}>{target}</option>
      ))}
    </select>
  );
}
