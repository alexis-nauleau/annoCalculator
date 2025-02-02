import { ProductionChain, PopulationName, Material  } from './types';

export const populationData: Record<PopulationName, string> = {
  Paysans: "/fermiers.webp",
  Ouvriers: "/ouvriers.webp",
  Artisans: "/artisans.webp",
  Ingénieurs: "/ingenieurs.webp",
};
export const materialImages: Record<string, string> = {
  Bois: "/bois.webp",
  Barre_de_fer:"/barre-de-fer.webp",
  Fenetre:"./fenetre.webp",
  Ciment:"./ciment.webp",
  Brique:"./brique.webp",
};


export const productionChains: { [key: string]: ProductionChain } = {
  Pain: {
    ratios: [
      { name: "Boulangerie", quantity: 2 },
      { name: "Moulin", quantity: 1 },
      { name: "Ferme de blé", quantity: 2 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 }
    ],
    descriptionImage: "./boulangerie.webp",
    difficulty: 1,
    population: [
      { name: "Paysans", count: 50 },
      { name: "Ouvriers", count: 100 },
    ],
    price: 2500,
  },
  Savons: {
    ratios: [
      { name: "Savonnerie", quantity: 1 },
      { name: "Render", quantity: 2 },
      { name: "Cochons", quantity: 2 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./savonnerie.webp",
    difficulty: 1,
    population: [
      { name: "Ouvriers", count: 190 },
    ],
    price: 2500,
  },
  Barre_de_fer: {
    ratios: [
      { name: "Usines", quantity: 3 },
      { name: "Fourneaux", quantity: 2},
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./barre-de-fer.webp",
    difficulty: 1,
    population: [
      { name: "Ouvriers", count: 190 },
    ],
    price: 2500,
  },
  Armes: {
    ratios: [
      { name: "Arme", quantity: 2 },
      { name: "Fourneaux", quantity: 2},
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./armes.webp",
    difficulty: 2,
    population: [
      { name: "Ouvriers", count: 190 },
    ],
    price: 2500,
  },
  Bière: {
    ratios: [
      { name: "Brasserie", quantity: 2 },
      { name: "Houblon", quantity: 2},
      { name: "Malterie", quantity: 1 },
      { name: "Ferme de blé", quantity: 1 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./brasserie.webp",
    difficulty: 2,
    population: [
      { name: "Ouvriers", count: 190 },
    ],
    price: 2500,
  },
  Fenetres: {
    ratios: [
      { name: "Fenetre", quantity: 4 },
      { name: "Bois", quantity: 1},
      { name: "Vitrerie", quantity: 2 },
      { name: "Silice", quantity: 2 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./brasserie.webp",
    difficulty: 2,
    population: [
      { name: "Ouvriers", count: 190 },
    ],
    price: 2500,
  },
  Conserves: {
    ratios: [
      { name: "Conserve", quantity: 6 },
      { name: "Fer", quantity: 1},
      { name: "Cuisine", quantity: 8 },
      { name: "Boeuf", quantity: 8 },
      { name: "Poivrons", quantity: 8 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./conserve.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
    ],
    price: 2500,
  },
  Machine_à_coudre: {
    ratios: [
      { name: "Machine", quantity: 2 },
      { name: "Fourneaux", quantity: 2},
      { name: "Bois", quantity: 1 },
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./machine.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
    ],
    price: 2500,
  },
  Vetements: {
    ratios: [
      { name: "Vetement", quantity: 1 },
      { name: "Fourrure", quantity: 2},
      { name: "R-Coton", quantity: 1 },
      { name: "Coton", quantity: 2 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./vetement.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
    ],
    price: 2500,
  },
  Ciment: {
    ratios: [
      { name: "Ciment", quantity: 4 },
      { name: "Fourneaux", quantity: 2},
      { name: "Calcaire", quantity: 2},
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./ciment.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
    ],
    price: 2500,
  },
  Lunettes: {
    ratios: [
      { name: "Lunettes", quantity: 3 },
      { name: "Vitrerie", quantity: 1},
      { name: "Silice", quantity:1},
      { name: "Laiton", quantity: 2 },
      { name: "Zinc", quantity: 1 },
      { name: "Cuivre", quantity: 1 },
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./lunettes.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Armes_lourdes: {
    ratios: [
      { name: "Armes_lourdes", quantity: 8 },
      { name: "Dynamite", quantity: 4},
      { name: "Render", quantity:4},
      { name: "Salpetre", quantity: 8 },
      { name: "Cochons", quantity: 4 },
      { name: "Fourneaux", quantity: 2 },
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./lunettes.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Bycyclette: {
    ratios: [
      { name: "Cycle", quantity: 2},
      { name: "Caoutchou", quantity: 4},
      { name: "Fourneaux", quantity: 2 },
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./cycle.webp",
    difficulty: 3,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Moteur: {
    ratios: [
      { name: "Moteur", quantity: 6},
      { name: "Fourneaux", quantity: 2 },
      { name: "Fer", quantity: 1 },
      { name: "Charbon", quantity: 1},
      { name: "Laiton", quantity: 4},
      { name: "Zinc", quantity: 2},
      { name: "Cuivre", quantity: 2},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./moteur.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Montres: {
    ratios: [
      { name: "Montres", quantity: 6},
      { name: "Lingots", quantity: 4 },
      { name: "Or", quantity: 10 },
      { name: "Charbon", quantity: 1},
      { name: "Vitrerie", quantity: 2},
      { name: "Silice", quantity: 2},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./moteur.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Ampoules: {
    ratios: [
      { name: "Ampoules", quantity: 4},
      { name: "Filament", quantity: 4 },
      { name: "Charbon", quantity: 1 },
      { name: "Vitrerie", quantity: 2},
      { name: "Silice", quantity: 2},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./ampoules.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
//*************** */
  Champagne: {
    ratios: [
      { name: "Champagne", quantity: 4},
      { name: "Vitrerie", quantity: 1},
      { name: "Silice", quantity: 1},
      { name: "Raisin", quantity: 4},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./champagne.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Bijoux: {
    ratios: [
      { name: "Bijoux", quantity: 2},
      { name: "Lingots", quantity: 4 },
      { name: "Or", quantity: 10 },
      { name: "Charbon", quantity: 1},
      { name: "Perles", quantity: 6},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./bijoux.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Gramophone: {
    ratios: [
      { name: "Gramophone", quantity: 4},
      { name: "Marqueterie", quantity: 4 },
      { name: "Laiton", quantity: 4 },
      { name: "Zinc", quantity: 2},
      { name: "Cuivre", quantity: 2},
      { name: "Bois", quantity: 1},
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./moteur.webp",
    difficulty: 4,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },
  Véhicules: {
    ratios: [
      { name: "Véhicules", quantity: 4},
      { name: "Roue", quantity: 8 }, 
      { name: "Bois", quantity: 1},
      { name: "Caoutchou", quantity: 4},
      { name: "Moteur", quantity: 6},
      { name: "Laiton", quantity: 4 },
      { name: "Zinc", quantity: 2},
      { name: "Cuivre", quantity: 2},
      { name: "Fourneaux", quantity: 2 },
      { name: "Fer", quantity: 1},
      { name: "Charbon", quantity: 1},
     
    ],
    materials: [
      { name: "Bois", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./vehicule.webp",
    difficulty: 5,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },

};
