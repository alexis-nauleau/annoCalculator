"use client";

import React, { useEffect, useState } from "react";

const ObjectPage = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/objects/scrape")
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setItems(data.items);
        }
      })
      .catch((err) => console.error("Erreur:", err));
  }, []);

  return (
    <div>
      <h1>Objets Anno 1800</h1>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>{item.name}</h2>
            <p><strong>ID :</strong> {item.id}</p>
            <p><strong>Cible :</strong> {item.target}</p>
            <h3>Bonus :</h3>
            <ul>
              {item.bonus ? (
                Object.values(item.bonus).map((bonus: any, i: number) => (
                  <li key={i}>{bonus}</li>
                ))
              ) : (
                <li>Aucun bonus disponible</li>
              )}
            </ul>
          </div>
        ))
      ) : (
        <p>Chargement des objets...</p>
      )}
    </div>
  );
};

export default ObjectPage;
