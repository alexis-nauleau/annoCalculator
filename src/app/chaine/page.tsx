"use client";

import { useState } from "react";
import Image from "next/image";
import { productionChains, populationData, materialImages } from "../data";
import { styles } from "../styles";
import { getImageForRatio } from "../fonction";

const difficultyColors: { [key: number]: string } = {
  1: "#007bff",
  2: "#28a745",
  3: "#ffc107",
  4: "#dc3545",
  5: "#840B93",
};

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<string | null>(null);

  return (
    <div style={styles.container}>

      <div style={{ ...styles.chainList, display: 'flex', flexWrap: 'wrap' }}>
        {Object.entries(productionChains).map(([chainName, chain]) => (
          <button
            key={chainName}
            onClick={() => setSelectedChain(chainName)}
            style={{
              ...styles.chainButton,
              backgroundColor: difficultyColors[chain.difficulty],
            }}
          >
            {chainName.replace(/_/g, " ")}
          </button>
        ))}
      </div>
      {selectedChain && (
      <div id="container" className="w-[1200px] border-[#C68D5C] text-black text-center mx-auto relative rounded-[15px] border-2 pb-5">

      {selectedChain && (
        <div id="title" className="text-center mt-5 mb-5 ">
          <img
            src={productionChains[selectedChain].descriptionImage}
            alt={`${selectedChain} Description`}
            style={{ marginBottom: "20px" }}
            height={88}
            width={88}
            className="inline-flex items-center"
          />
          <div className="bg-[#8E6B49] h-[10px] w-full"></div>
          <div id="ratio" className="flex items-center justify-center">
            <h3>Ratios :</h3>
            <ul style={styles.list}>
              {productionChains[selectedChain].ratios.map((item, index) => (
                <li key={index} className="inline-flex items-center mr-4">
                  {item.quantity}x
                  <img
                    src={getImageForRatio(item.name)}
                    alt={`${selectedChain} Description`}
                    style={{ marginBottom: "20px" }}
                    height={42}
                    width={42}
                    className="inline-flex items-center"
                  />
                </li>
              ))}
            </ul>
            
          </div>
          <div className="bg-[#8E6B49] h-[10px] w-full"></div>
          <div id="matériaux"  className="flex items-center justify-center py-6">
            <h3>Matériaux nécessaires :</h3>
            <ul style={styles.list}>
              {productionChains[selectedChain].materials.map((material, index) => (
                <li key={index} className="inline-flex items-center mr-4">
                  <img
                    src={materialImages[material.name]}
                    alt={material.name}
                    height={24}
                    width={24}
                  />
                  <span>{material.amount} {material.name.replace(/_/g, " ")}</span>
                </li>
              ))}
            </ul>

          </div>
          <div className="bg-[#8E6B49] h-[10px] w-full"></div>

          <div id="pop"  className="flex items-center justify-center py-6" >
            <h3>Population requise :</h3>
            <ul style={styles.list}>
              {productionChains[selectedChain].population.map((population, index) => (
                <li key={index} className="inline-flex mr-4">

                  <Image src={populationData[population.name]}
                    alt={population.name}
                    height={24}
                    width={24}
                  ></Image>
                  <p>{population.name}</p>
                  <span>{population.count.toString()}</span>
                </li>
              ))}
            </ul></div>

         
          <div  id="money" className="absolute w-[100px] h-[50px] top-[10px] right-[10px] border-4 border-[#FCE69D] pl-5" style={{ display: "inline-flex", alignItems: "center" }}>
            <span>{productionChains[selectedChain].price.toString()}</span>
            <Image
              src="/dollard.webp"
              height={24}
              width={24}
              alt="Dollar icon"
            />
          </div>
        </div>
      )}
      </div>
      )}
    </div>
  );
}
