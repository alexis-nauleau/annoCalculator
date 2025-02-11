import React from "react";
import FilterByRarityProps from"@/app/types"


export default function FilterByRarity({ rarityFilter, setRarityFilter }: FilterByRarityProps) {
  return (
    <select
      onChange={(e) => setRarityFilter(e.target.value)}
      value={rarityFilter}
      className="bg-white text-black py-2 px-4 border border-gray-300 rounded-md "
    >
      <option value="all">Toutes les raretés</option>
      <option value="Common">Commun</option>
      <option value="Rare">Rare</option>
      <option value="Epic">Épique</option>
      <option value="Legendary">Légendaire</option>
    </select>
  );
}
