import { useState, useEffect } from "react";
import corporationData from "@/data/corporation.json";
import townHallData from "@/data/townHall.json";
import Specialist from "@/app/types";
import FilterByType from "./filters/FilterByType";
import FilterByRarity from "./filters/FilterByRarity";
import FilterByTarget from "./filters/FilterByTarget";

export default function Filter({ onFilterChange }: { onFilterChange: (filter: string) => void }) {
  const [data, setData] = useState<Specialist[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [rarityFilter, setRarityFilter] = useState<string>("all");
  const [targetFilter, setTargetFilter] = useState<string>("all");

  const allTargets: string[] = [
    ...new Set([
      ...Object.values(corporationData.items || {}).map((item: Specialist) => item.cibles),
      ...Object.values(townHallData.items || {}).map((item: Specialist) => item.cibles),
    ]),
  ].filter(Boolean);

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
      <div className="flex gap-4 mb-4 bg-gray-900 p-5 justify-center w-full flex-wrap">
      
      <FilterByType filter={filter} setFilter={setFilter} onFilterChange={onFilterChange} targetFilter={""} setTargetFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } allTargets={[]} rarityFilter={""} setRarityFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } Name={""} IconFilename={""} Rarity={""} cibles={""} location={""} bonus={[]} />
        <FilterByRarity rarityFilter={rarityFilter} setRarityFilter={setRarityFilter} targetFilter={""} setTargetFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } allTargets={[]} filter={""} setFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } onFilterChange={function (filter: string): void {
          throw new Error("Function not implemented.");
        } } Name={""} IconFilename={""} Rarity={""} cibles={""} location={""} bonus={[]} />
        <FilterByTarget targetFilter={targetFilter} setTargetFilter={setTargetFilter} allTargets={allTargets} filter={""} setFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } onFilterChange={function (filter: string): void {
          throw new Error("Function not implemented.");
        } } rarityFilter={""} setRarityFilter={function (value: string): void {
          throw new Error("Function not implemented.");
        } } Name={""} IconFilename={""} Rarity={""} cibles={""} location={""} bonus={[]} />
   
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item, index) => {
          const borderColor =
            item.Rarity === "Rare" ? "border-blue-500" :
            item.Rarity === "Epic" ? "border-purple-500" :
            item.Rarity === "Legendary" ? "border-yellow-600" : "border-black";

          const imagePath = `/specialists/${item.IconFilename.replace("/", "")}`;

          return (
            <div key={index} className={`border-2 ${borderColor} p-4 w-60 rounded-md`}>
              <h3 className="text-xl font-semibold mb-2">{item.Name}</h3>
              {item.IconFilename && <img src={imagePath} alt={item.Name} />}
              <p className="text-sm mb-1">Rareté : {item.Rarity}</p>
              <p className="text-sm mb-1">Cibles : {item.cibles}</p>
              <ul className={`text-sm list-disc pl-5 ${
                item.Rarity === "Rare" ? "marker:text-blue-500" :
                item.Rarity === "Epic" ? "marker:text-purple-500" :
                item.Rarity === "Legendary" ? "marker:text-yellow-600" : "marker:text-black"
              }`}>
                {item.bonus.map((b, i) => (
                  <li key={i}>{b.name}: {b.Value}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
