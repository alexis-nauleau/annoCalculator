"use client"
import { useState } from "react";

const buildings = {
  scierie: { bois: 1 },
  pecherie: { bois: 3, poisson: 1 },
};

export default function ProductionList() {
  const [productions, setProductions] = useState({ scierie: 0, pecherie: 0 });
  const [resources, setResources] = useState({ bois: 0, poisson: 0 });

  const handleChange = (building, value) => {
    const newProductions = { ...productions, [building]: value };
    setProductions(newProductions);
    recalculateResources(newProductions);
  };

  const recalculateResources = (newProductions) => {
    let newResources = { bois: 0, poisson: 0 };
    Object.keys(newProductions).forEach((building) => {
      const quantity = newProductions[building];
      Object.entries(buildings[building]).forEach(([resource, amount]) => {
        newResources[resource] += amount * quantity;
      });
    });
    setResources(newResources);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Liste de production</h1>
      {Object.keys(buildings).map((building) => (
        <div key={building} className="flex items-center space-x-4 mb-4 p-3 bg-white rounded-lg shadow">
          <img src={`/${building}.png`} alt={building} className="w-12 h-12" />
          <label className="text-lg font-medium">{building}</label>
          <input
            type="number"
            className="border border-gray-300 rounded p-2 w-20 text-center"
            value={productions[building]}
            onChange={(e) => handleChange(building, parseInt(e.target.value) || 0)}
          />
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-6 mb-2">Ressources nécessaires</h2>
      {Object.keys(resources).map((resource) => (
        <div key={resource} className="flex items-center space-x-4 mb-2 p-3 bg-white rounded-lg shadow">
          <img src={`/${resource}.png`} alt={resource} className="w-12 h-12" />
          <span className="text-lg font-medium">{resource}: {resources[resource]}</span>
        </div>
      ))}
    </div>
  );
}
