import { useState, useEffect } from "react";
import corporationData from "@/data/corporation.json";
import townHallData from "@/data/townHall.json";

// Définition du type des objets specialists
interface Specialist {
  Name: string;
  IconFilename: string;
  Rarity: string;
  cibles: string;
  location: string;
  bonus: { name: string; Value: string }[];
}

export default function Filter({ onFilterChange }: { onFilterChange: (filter: string) => void }) {
  const [data, setData] = useState<Specialist[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [rarityFilter, setRarityFilter] = useState<string>("all");
  const [targetFilter, setTargetFilter] = useState<string>("all");

  // Extraction des cibles uniques avec typage
  const allTargets: string[] = [
    ...new Set([
      ...Object.values(corporationData.items || {}).map((item: Specialist) => item.cibles),
      ...Object.values(townHallData.items || {}).map((item: Specialist) => item.cibles),
    ]),
  ].filter(Boolean); // Filtrer pour éviter les valeurs nulles ou undefined

  useEffect(() => {
    let filteredData: Specialist[] = [];

    if (filter === "corpo" || filter === "all") {
      if (corporationData.items) {
        filteredData = [...filteredData, ...Object.values(corporationData.items) as Specialist[]];
      }
    }

    if (filter === "th" || filter === "all") {
      if (townHallData.items) {
        filteredData = [...filteredData, ...Object.values(townHallData.items) as Specialist[]];
      }
    }

    if (rarityFilter !== "all") {
      filteredData = filteredData.filter(item => item.Rarity === rarityFilter);
    }

    if (targetFilter !== "all") {
      filteredData = filteredData.filter(item => item.cibles === targetFilter);
    }

    setData(filteredData);
  }, [filter, rarityFilter, targetFilter]);

  return (
    <div>
      {/* Conteneur des selects côte à côte */}
      <div className="flex gap-4 mb-4 bg-gray-900 p-5 justify-center">
        {/* Filtrage par type */}
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

        {/* Filtrage par rareté */}
        <select
          onChange={(e) => setRarityFilter(e.target.value)}
          value={rarityFilter}
          className="bg-white text-black py-2 px-4 border border-gray-300 rounded-md"
        >
          <option value="all">Toutes les raretés</option>
          <option value="Common">Commun</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Épique</option>
          <option value="Legendary">Légendaire</option>
        </select>

        {/* Filtrage par cible */}
        <select
          onChange={(e) => setTargetFilter(e.target.value)}
          value={targetFilter}
          className="bg-white text-black py-2 px-4 border border-gray-300 rounded-md"
        >
          <option value="all">Toutes les cibles</option>
          {allTargets.map((target, index) => (
            <option key={index} value={target}>{target}</option>
          ))}
        </select>
      </div>

      {/* Affichage des résultats */}
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => {
          const borderColor =
            item.Rarity === "Rare"
              ? "border-blue-500"
              : item.Rarity === "Epic"
                ? "border-purple-500"
                : item.Rarity === "Legendary"
                  ? "border-yellow-600"
                  : "border-black";

          const imagePath = `/specialists/${item.IconFilename.replace("/", "")}`;

          return (
            <div key={index} className={`border-2 ${borderColor} p-4 w-60 rounded-md`}>
              <h3 className="text-xl font-semibold mb-2">{item.Name}</h3>
              {item.IconFilename ? (
                <img src={imagePath} alt={item.Name} />
              ) : (
                null
              )}
              <p className="text-sm mb-1">Rareté : {item.Rarity}</p>
              <p className="text-sm mb-1">Cibles : {item.cibles}</p>
              <ul className={`text-sm list-disc pl-5 ${
                item.Rarity === "Rare"
                  ? "marker:text-blue-500"
                  : item.Rarity === "Epic"
                    ? "marker:text-purple-500"
                    : item.Rarity === "Legendary"
                      ? "marker:text-yellow-600"
                      : "marker:text-black"
              }`}>
                {item.bonus.map((b, i) => (
                  <li key={i}>
                    {b.name}: {b.Value}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
