export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Comment choisir son parfum sans l'avoir senti ?",
    answer:
      "Chaque fiche produit détaille la pyramide olfactive complète — notes de tête, de cœur et de fond — ainsi que l'histoire et l'inspiration de la composition. Vous pouvez aussi demander un jeu d'échantillons via notre page contact avant de vous engager sur un flacon complet.",
  },
  {
    question: "Quelle est la différence entre les trois collections ?",
    answer:
      "L'Héritage réunit les fragrances fondatrices de la maison, denses et intemporelles. Les Essentiels sont pensés pour un usage quotidien, plus légers. Éditions Rares regroupe nos séries limitées et numérotées, produites en quantités infimes.",
  },
  {
    question: "Les flacons sont-ils rechargeables ?",
    answer:
      "Oui. Tous les flacons de 75 ml sont conçus pour être rechargés en boutique ou par voie postale, dans une démarche de réduction du verre neuf produit chaque année.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Les commandes sont expédiées sous 48h ouvrées. Comptez 2 à 4 jours en France métropolitaine, 5 à 8 jours pour le reste de l'Europe. Chaque colis est assuré et suivi.",
  },
  {
    question: "Puis-je retourner un parfum entamé ?",
    answer:
      "Un flacon testé (moins de 10% utilisé) peut être retourné sous 30 jours pour un échange ou un avoir. Les éditions numérotées de la collection Éditions Rares ne sont ni reprises ni échangées, en raison de leur caractère limité.",
  },
  {
    question: "Proposez-vous un service de personnalisation ?",
    answer:
      "Sur rendez-vous en boutique, notre parfumeur-conseil peut ajuster l'intensité de certains accords sur les fragrances de la collection Les Essentiels, et graver le flacon à la demande.",
  },
];
