export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export const milestones: Milestone[] = [
  {
    year: "1987",
    title: "Fondation de la maison",
    description:
      "Un premier atelier ouvre à Paris. Velours Noir, premier parfum de la maison, est composé dans une arrière-boutique de la rue de la Paix.",
  },
  {
    year: "1994",
    title: "Ouverture du laboratoire de Grasse",
    description:
      "La maison installe son propre laboratoire de composition à Grasse, pour maîtriser chaque étape de la fabrication, du sourcing à la mise en flacon.",
  },
  {
    year: "2003",
    title: "Naissance de la collection Les Essentiels",
    description:
      "Une collection pensée pour le quotidien, plus légère, sans jamais transiger sur la qualité des matières premières.",
  },
  {
    year: "2016",
    title: "Premières Éditions Rares",
    description:
      "La maison lance sa première série limitée et numérotée, distribuée uniquement en boutique et sur liste d'attente.",
  },
  {
    year: "2024",
    title: "Engagement de traçabilité totale",
    description:
      "Chaque matière première rare — oud, santal, iris — devient traçable jusqu'à sa parcelle ou sa coopérative de récolte.",
  },
];

export const values = [
  {
    title: "Rareté maîtrisée",
    description:
      "Nous préférons produire moins, mais mieux — chaque matière première est choisie pour sa qualité, jamais pour son coût.",
  },
  {
    title: "Traçabilité totale",
    description:
      "De la parcelle de récolte au flacon fini, chaque ingrédient rare peut être retracé jusqu'à son origine exacte.",
  },
  {
    title: "Fabrication française",
    description:
      "Composition, mise en flacon et habillage sont réalisés en France, dans nos deux ateliers de Paris et de Grasse.",
  },
  {
    title: "Flacons rechargeables",
    description:
      "Conçus pour durer, nos flacons de 75 ml peuvent être rechargés indéfiniment, en boutique comme par voie postale.",
  },
];
