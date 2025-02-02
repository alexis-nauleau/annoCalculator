export interface Ratio {
    name: string;
    quantity: number;
    
  }
  
  export interface Material {
    name: string;
    amount: number;
  }
  
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
  