export interface Ratio {
    name: string;
    quantity: number;
    
  }


  export interface Material {
    name: string;
    amount: number;
  }
  //
  export default interface FilterByTargetProps {
  targetFilter: string;
  setTargetFilter: (value: string) => void;
  allTargets: string[];
}
  export default interface FilterByTypeProps {
    filter: string;
    setFilter: (value: string) => void;
    onFilterChange: (filter: string) => void;
  }
  export default interface FilterByRarityProps {
    rarityFilter: string;
    setRarityFilter: (value: string) => void;
  }
  export default interface Specialist {
    Name: string;
    IconFilename: string;
    Rarity: string;
    cibles: string;
    location: string;
    bonus: { name: string; Value: string }[];
  }
//
  export interface ProductionChain {
    ratios: Ratio[];
    price:Number
    materials: Material[];
    descriptionImage: string;
    difficulty: 1 | 2 | 3 | 4|5;
    population:Population[];
  }
  
  export interface Population {
    name: PopulationName;
    count:Number
  }
  
  export type PopulationName = "Paysans" | "Ouvriers" | "Artisans" | "Ingénieurs";
  