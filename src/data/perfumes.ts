import { placeholder, localAsset } from "@/lib/images";
import type { CollectionSlug } from "@/data/collections";

export type Perfume = {
  slug: string;
  name: string;
  family: string;
  collection: CollectionSlug;
  tagline: string;
  description: string;
  story: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  price: number;
  volume: string;
  image: string;
  gallery: [string, string];
};

export const perfumes: Perfume[] = [
  {
    slug: "ombre-doree",
    name: "Ombre Dorée",
    family: "Oriental Boisé",
    collection: "heritage",
    tagline: "L'or du soir sur la peau",
    description:
      "Un sillage ambré et boisé, sculpté autour d'un cœur de labdanum et de cuir suédé, pour les instants où la nuit prend toute la place.",
    story:
      "Née d'un souvenir de voyage à Marrakech, Ombre Dorée capture la chaleur des souks au crépuscule — épices écrasées, bois de santal chauffé par le soleil, et ce voile de résine qui reste sur les mains longtemps après.",
    notes: {
      top: ["Bergamote", "Cardamome", "Poivre rose"],
      heart: ["Labdanum", "Cuir suédé", "Iris"],
      base: ["Santal", "Ambre gris", "Fève tonka"],
    },
    price: 210,
    volume: "75 ml",
    image: localAsset("/images/perfumes/ombre-doree.jpg"),
    gallery: [
      placeholder("aurelis-ombre-doree-detail-v4", 1600, 2000),
      placeholder("aurelis-ombre-doree-scene", 1800, 1300),
    ],
  },
  {
    slug: "fleur-de-soie",
    name: "Fleur de Soie",
    family: "Floral Poudré",
    collection: "essentiels",
    tagline: "La douceur d'un jour clair",
    description:
      "Un bouquet floral lumineux, porté par l'iris et la fleur d'oranger, adouci par un fond musqué presque impalpable.",
    story:
      "Composée comme une robe de soie — légère, fluide, jamais lourde — Fleur de Soie est pensée pour se porter dès le matin et durer jusqu'au soir sans jamais s'imposer.",
    notes: {
      top: ["Bergamote", "Fleur d'oranger", "Poire"],
      heart: ["Iris de Toscane", "Rose de mai", "Jasmin"],
      base: ["Musc blanc", "Cèdre", "Vanille"],
    },
    price: 185,
    volume: "50 ml",
    image: localAsset("/images/perfumes/fleur-de-soie.jpg"),
    gallery: [
      placeholder("aurelis-fleur-de-soie-detail", 1600, 2000),
      placeholder("aurelis-fleur-de-soie-scene", 1800, 1300),
    ],
  },
  {
    slug: "nuit-blanche",
    name: "Nuit Blanche",
    family: "Ambré Vanillé",
    collection: "editions-rares",
    tagline: "L'insomnie a un parfum",
    description:
      "Une composition dense et enveloppante, entre vanille bourbon et encens, pour les nuits qui ne se terminent jamais tout à fait.",
    story:
      "Édition limitée à 500 flacons numérotés, Nuit Blanche est née dans les carnets confidentiels du parfumeur en chef, jamais commercialisée jusqu'à aujourd'hui.",
    notes: {
      top: ["Safran", "Mandarine noire"],
      heart: ["Encens", "Rose noire", "Cannelle"],
      base: ["Vanille bourbon", "Patchouli", "Benjoin"],
    },
    price: 340,
    volume: "75 ml — édition numérotée",
    image: localAsset("/images/perfumes/nuit-blanche.jpg"),
    gallery: [
      placeholder("aurelis-nuit-blanche-detail", 1600, 2000),
      placeholder("aurelis-nuit-blanche-scene", 1800, 1300),
    ],
  },
  {
    slug: "rosee-poudree",
    name: "Rosée Poudrée",
    family: "Floral Musqué",
    collection: "essentiels",
    tagline: "La rosée du matin, figée",
    description:
      "Une eau de parfum tendre et poudrée, où la rose se mêle à un accord de peau propre, pour un sillage discret et profondément habité.",
    story:
      "Inspirée par les jardins de roses de Grasse à l'aube, Rosée Poudrée restitue cette fraîcheur humide et végétale avant que le soleil ne réchauffe les pétales.",
    notes: {
      top: ["Litchi", "Poivre rose", "Bergamote"],
      heart: ["Rose de mai", "Pivoine", "Violette"],
      base: ["Musc", "Bois de cachemire", "Ambrette"],
    },
    price: 175,
    volume: "50 ml",
    image: localAsset("/images/perfumes/rosee-poudree.jpg"),
    gallery: [
      placeholder("aurelis-rosee-poudree-detail", 1600, 2000),
      placeholder("aurelis-rosee-poudree-scene", 1800, 1300),
    ],
  },
  {
    slug: "velours-noir",
    name: "Velours Noir",
    family: "Boisé Cuiré",
    collection: "heritage",
    tagline: "Une seconde peau, sombre",
    description:
      "Cuir noir, bois de oud et une pointe de tabac blond — Velours Noir est la signature la plus intense de la maison, réservée à ceux qui n'ont pas peur d'être remarqués.",
    story:
      "Premier parfum jamais créé par la maison, Velours Noir a été reformulé une seule fois en quarante ans — pour préserver, presque à l'identique, le sillage qui a fondé AURÉLIS.",
    notes: {
      top: ["Cardamome noire", "Bergamote"],
      heart: ["Cuir", "Oud", "Tabac blond"],
      base: ["Patchouli", "Vétiver", "Ambre"],
    },
    price: 225,
    volume: "75 ml",
    image: localAsset("/images/perfumes/velours-noir.jpg"),
    gallery: [
      placeholder("aurelis-velours-noir-detail", 1600, 2000),
      placeholder("aurelis-velours-noir-scene-v3", 1800, 1300),
    ],
  },
  {
    slug: "secret-de-santal",
    name: "Secret de Santal",
    family: "Boisé Lacté",
    collection: "editions-rares",
    tagline: "Le bois qui se souvient",
    description:
      "Un accord santal exceptionnel, presque lacté, sourcé auprès d'une coopérative de Mysore — une rareté que la maison ne peut proposer qu'en quantités infimes chaque année.",
    story:
      "Chaque récolte de santal de Mysore utilisée dans ce parfum est traçable jusqu'à la parcelle — un engagement pris par la maison dès sa création.",
    notes: {
      top: ["Cardamome", "Poire"],
      heart: ["Santal de Mysore", "Lait d'amande", "Iris"],
      base: ["Fève tonka", "Musc blanc", "Cèdre"],
    },
    price: 295,
    volume: "50 ml — édition numérotée",
    image: placeholder("aurelis-secret-de-santal", 1400, 1800),
    gallery: [
      placeholder("aurelis-secret-de-santal-detail", 1600, 2000),
      placeholder("aurelis-secret-de-santal-scene", 1800, 1300),
    ],
  },
];

export function getPerfume(slug: string) {
  return perfumes.find((p) => p.slug === slug);
}

export function getPerfumesByCollection(collection: Perfume["collection"]) {
  return perfumes.filter((p) => p.collection === collection);
}
