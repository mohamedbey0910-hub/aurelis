import { localAsset } from "@/lib/images";

export type CollectionSlug = "heritage" | "editions-rares" | "essentiels";

export type Collection = {
  slug: CollectionSlug;
  name: string;
  tagline: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    slug: "heritage",
    name: "L'Héritage",
    tagline: "Les fragrances fondatrices de la maison",
    description:
      "Composées à partir des carnets originaux de la maison, ces fragrances portent l'écriture olfactive qui a fondé AURÉLIS : des accords denses, sculptés, pensés pour traverser le temps sans jamais se démoder.",
    image: localAsset("/images/collections/heritage.jpg"),
  },
  {
    slug: "editions-rares",
    name: "Éditions Rares",
    tagline: "Séries limitées, matières précieuses",
    description:
      "Une collection confidentielle, produite en quantités restreintes, où chaque flacon numéroté explore une matière rare — oud sauvage, iris de Toscane, ambre gris — dans une composition qui ne sera jamais reproduite à l'identique.",
    image: localAsset("/images/collections/rares.jpg"),
  },
  {
    slug: "essentiels",
    name: "Les Essentiels",
    tagline: "La signature quotidienne de la maison",
    description:
      "Pensée pour accompagner chaque jour, cette collection réunit les sillages les plus portés d'AURÉLIS — un vestiaire olfactif complet, du matin clair au soir profond.",
    image: localAsset("/images/collections/essentiels.jpg"),
  },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
