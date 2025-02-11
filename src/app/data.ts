import { ProductionChain, PopulationName, Material  } from './types';

export const populationData: Record<PopulationName, string> = {
  Paysans: "/residents/icone_fermiers.png",
  Ouvriers: "/residents/icone_ouvriers.png",
  Artisans: "/residents/icone_artisans.png",
  Ingénieurs: "/residents/icone_ingenieurs.png",
  Investisseurs: "/residents/icone_investisseurs.png",

};
export const materialImages: Record<string, string> = {
  Planche: "./materiaux/planche.png",
  Barre_de_fer:"./materiaux/metallerie.png",
  Fenetre:"./materiaux/fenetre.png",
  Ciment:"./materiaux/ciment.png",
  Brique:"./materiaux/brique.png",
};


export const productionChains: { [key: string]: ProductionChain } = {
  Planches: {
    ratios: [
      { name: "Bois", quantity: 1 },
      { name: "Planche", quantity: 1 },

    ],
    materials: [
      { name: "Planche", amount: 20 }
    ],
    descriptionImage: "./productions/Planche.png",
    difficulty: 6,
    population: [
      { name: "Paysans", count: 15 }
    ],
    price: 200,
  },

  Poissons: {
    ratios: [
      { name: "Planche", quantity: 1 },
    ],
    materials: [
      { name: "Planche", amount: 2 },
    ],
    descriptionImage: "./productions/poisson.png",
    difficulty: 6,
    population: [
      { name: "Paysans", count: 25 }
    ],
    price: 100,
  },
  Blouse: {
    ratios: [
      { name: "mouton", quantity: 1 },
      { name: "vetementsdetravail", quantity: 1 },

    ],
    materials: [
      { name: "Planche", amount: 4},
    ],
    descriptionImage: "./productions/vetementsdetravail.png",
    difficulty: 6,
    population: [
      { name: "Paysans", count: 60 }
    ],
    price: 245,
  },
  Schnapps: {
    ratios: [
      { name: "pommedeterre", quantity: 1 },
      { name: "schnapps", quantity: 1 },

    ],
    materials: [
      { name: "Planche", amount: 4 },
    ],
    descriptionImage: "./productions/schnapps.png",
    difficulty: 6,
    population: [
      { name: "Paysans", count: 70 }
    ],
    price: 100,
  },


















  Briques: {
    ratios: [
      { name: "argile", quantity: 1 },
      { name: "brique", quantity: 2 },
  
    ],
    materials: [
      { name: "Planche", amount: 20 },
    ],
    descriptionImage: "./productions/brique.png",
    difficulty: 1,
    population: [
      { name: "Paysans", count: 50 },
      { name: "Ouvriers", count: 100 },
    ],
    price: 1500,
  },
  Saucisse: {
    ratios: [
      { name: "Cochons", quantity: 1 },
      { name: "saucisse", quantity: 1 },
    ],
    materials: [
      { name: "Planche", amount: 8 },
      { name: "Brique", amount: 5 }
    ],
    descriptionImage: "./productions/saucisse.png",
    difficulty: 1,
    population: [
      { name: "Paysans", count: 30 },
      { name: "Ouvriers", count: 50 },
    ],
    price: 2500,
  }, 
    Pain: {
    ratios: [
      { name: "Boulangerie", quantity: 2 },
      { name: "Moulin", quantity: 1 },
      { name: "Ferme de blé", quantity: 2 },
    ],
    materials: [
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 }
    ],
    descriptionImage: "./productions/boulangerie.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./productions/savonnerie.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./productions/metallerie.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./productions/armes.webp",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./productions/brasserie.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
    ],
    descriptionImage: "./productions/fenetre.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./productions/conserve.webp",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./productions/machine.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./productions/vetement.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
    ],
    descriptionImage: "./productions/ciment.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/lunette.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/armeslourdes.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/cycle.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/moteur.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/montre.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/ampoule.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/champagne.webp",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/bijoux.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/gramophone.png",
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
      { name: "Planche", amount: 20 },
      { name: "Brique", amount: 15 },
      { name: "Barre_de_fer", amount: 15 },
      { name: "Fenetre", amount: 15 },
      { name: "Ciment", amount: 15 },
    ],
    descriptionImage: "./productions/vehicule.png",
    difficulty: 5,
    population: [
      { name: "Ouvriers", count: 190 },
      { name: "Artisans", count: 1210 },
      { name: "Ingénieurs", count: 300 },
    ],
    price: 2500,
  },

};
