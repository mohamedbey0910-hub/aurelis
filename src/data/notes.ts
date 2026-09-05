import { placeholder } from "@/lib/images";

export type OlfactoryNote = {
  slug: string;
  name: string;
  origin: string;
  description: string;
  image: string;
};

export const olfactoryNotes: OlfactoryNote[] = [
  {
    slug: "iris-de-toscane",
    name: "Iris de Toscane",
    origin: "Florence, Italie",
    description:
      "Racine rare mise à sécher trois ans avant distillation. Son parfum poudré et froid, presque minéral, est l'une des matières les plus onéreuses de la parfumerie.",
    image: placeholder("aurelis-note-iris", 1200, 1500),
  },
  {
    slug: "oud-sauvage",
    name: "Oud Sauvage",
    origin: "Assam, Inde",
    description:
      "Résine formée par un arbre blessé, récoltée à la main. Son odeur animale et fumée donne aux compositions une profondeur qu'aucune autre matière ne peut reproduire.",
    image: placeholder("aurelis-note-oud", 1200, 1500),
  },
  {
    slug: "ambre-gris",
    name: "Ambre Gris",
    origin: "Océan Atlantique",
    description:
      "Concrétion marine rarissime, affinée pendant des années au contact du sel et du soleil. Une note chaude, salée, presque tabac, introuvable ailleurs.",
    image: placeholder("aurelis-note-ambre", 1200, 1500),
  },
  {
    slug: "fleur-oranger",
    name: "Fleur d'Oranger",
    origin: "Nabeul, Tunisie",
    description:
      "Cueillie à l'aube pour préserver sa fraîcheur, avant que la chaleur ne la fasse tourner. Un blanc floral lumineux, entre miel et agrumes.",
    image: placeholder("aurelis-note-oranger", 1200, 1500),
  },
  {
    slug: "vanille-bourbon",
    name: "Vanille Bourbon",
    origin: "Île de la Réunion",
    description:
      "Gousses affinées pendant neuf mois selon la méthode traditionnelle. Une vanille profonde, boisée, sans la moindre note sucrée artificielle.",
    image: placeholder("aurelis-note-vanille-v5", 1200, 1500),
  },
  {
    slug: "santal-mysore",
    name: "Santal de Mysore",
    origin: "Karnataka, Inde",
    description:
      "Bois rare, aujourd'hui protégé, sourcé exclusivement via une coopérative certifiée. Une matière lactée et crémeuse, chaude sans être sucrée.",
    image: placeholder("aurelis-note-santal", 1200, 1500),
  },
];
