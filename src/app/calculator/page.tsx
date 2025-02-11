"use client";

import { useState, useEffect } from "react";
import batimentsData from "@/data/batiments.json";
import Image from "next/image";


interface Batiment {
  Name: string;
  IconFilename: string;
  price?: string;
  besoins: { name: string; Picture: string; value: string; price?: string }[];
}

export default function ProductionList() {
  const [productions, setProductions] = useState<Record<string, number>>({});

  const [resources, setResources] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const initialProductions: Record<string, number> = {};
    Object.keys(batimentsData).forEach((batiment) => {
      initialProductions[batiment] = 0;
    });
    setProductions(initialProductions);
  }, []);
  

  const handleChange = (batiment: string, value: number) => {
    setProductions((prevProductions) => {
      const newProductions = { ...prevProductions, [batiment]: value };
      recalculateResources(newProductions);
      return newProductions;
    });
  };
  

  const recalculateResources = (newProductions: Record<string, number>) => {
    let newResources: Record<string, { quantity: number; price: number; totalPrice: number }> = {};
    let newTotalCost = 0;

  
    const addResourceNeeds = (batimentName, quantity) => {
      const batiment = batimentsData[batimentName];
      if (!batiment || quantity === 0) return;
  
      // Ajout du coût du bâtiment principal (ex: Marché)
      if (batiment.price) {
        newTotalCost += quantity * parseInt(batiment.price);
      }
  
      // Calcul des ressources nécessaires
      batiment.besoins.forEach(({ name, value, price }) => {
        const requiredQuantity = quantity * parseInt(value);
        newResources[name] = newResources[name] || { quantity: 0, price: 0, totalPrice: 0 };
  
        // Mise à jour de la quantité requise
        newResources[name].quantity += requiredQuantity;
  
        // Définir le prix unitaire
        const resourcePrice = parseInt(price) || batimentsData[name]?.price || 0;
        newResources[name].price = resourcePrice;
  
        // Mise à jour du coût total de cette ressource
        newResources[name].totalPrice = newResources[name].quantity * newResources[name].price;
  
        // 🔥 Ajout du prix des ressources au coût total global
        newTotalCost += requiredQuantity * resourcePrice;
  
        // Vérifier si cette ressource est aussi un bâtiment et traiter ses besoins
        if (batimentsData[name]) {
          addResourceNeeds(name, requiredQuantity);
        }
      });
    };
  
    // Appliquer les calculs pour chaque production sélectionnée
    Object.keys(newProductions).forEach((batimentName) => {
      const quantity = newProductions[batimentName] || 0;
      if (quantity > 0) {
        addResourceNeeds(batimentName, quantity);
      }
    });
  
    setResources(newResources);
    setTotalCost(newTotalCost); // ✅ Assigner correctement le total
  };
  


  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md ">
      <h1 className="text-2xl font-bold mb-4">Liste de production</h1>
       <div className=" flex flex-wrap  gap-2">
      {Object.keys(batimentsData)
      .filter((batimentName) => batimentName !== "Planches" && batimentName !== "Brique")

      .map((batimentName) => {
      const batiment = batimentsData[batimentName] as Batiment | undefined;
      if (!batiment) return;
      

        return (
          <div key={batimentName} className="flex items-center space-x-4 mb-4 p-3 rounded-lg shadow gap-2 ">
            <img src={batiment.IconFilename} alt={batimentName} className="w-12 h-12" />
            <label className="text-lg font-medium">{batimentName}</label>
            <input
              type="number"
              className="border border-gray-300 rounded p-2 w-20 text-center"
              value={productions[batimentName] || 0}
              onChange={(e) => handleChange(batimentName, parseInt(e.target.value) || 0)}
            />
          </div>
        );
      })}
      </div>

<div className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg shadow mt-6 pr-6">
  <h2 className="text-xl font-semibold">Ressources nécessaires</h2>
  <span className="flex items-center text-lg font-bold">
    total: {totalCost} 
    <Image
      src="/icon_resource_money_4_1.png"
      height={24}
      width={24}
      alt="Dollar icon"
    />
  </span>
</div>


{Object.keys(resources).map((resource) => {
  const resourceData = resources[resource];
  const resourceBatiment = batimentsData[resource];

  // Vérifier si la ressource a une image définie dans "batiments.json"
  let imageSrc = resourceBatiment?.IconFilename;

  // Si l'image n'existe pas dans "batiments", essayer de la récupérer depuis "besoins"
  if (!imageSrc) {
    const foundResource = Object.values(batimentsData).flatMap((batiment) =>
      batiment.besoins.filter((besoin) => besoin.name === resource)
    )[0];
    imageSrc = foundResource?.IconFilename || `/images/default.png`; // Met une image par défaut si aucune trouvée
  }

  return (
    <div key={resource} className="flex mb-4 p-3 bg-white rounded-lg shadow justify-between">
      <div className="flex items-center space-x-4 mb-2">
        <img src={imageSrc} alt={resource} className="w-12 h-12" />
        <span className="text-lg font-medium">{resource}</span>
      </div>
      <div className="text-md mr-6 flex items-center">
        <span className="mr-12">Quantité: {resourceData.quantity}</span>
        <span>Prix: {resourceData.totalPrice}</span>
      </div>
    </div>
  );
})}

    </div>
  );
}
