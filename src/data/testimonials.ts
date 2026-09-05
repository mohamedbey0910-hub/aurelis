export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "AURÉLIS a compris ce que peu de maisons comprennent encore : qu'un parfum doit raconter quelque chose, pas seulement sentir bon.",
    name: "Camille R.",
    context: "Cliente depuis 2019",
  },
  {
    quote:
      "Une écriture olfactive rare, entre classicisme et audace. Ombre Dorée ne quitte plus ma table de nuit.",
    name: "Julien M.",
    context: "Client depuis 2021",
  },
  {
    quote:
      "Le service de conseil olfactif en boutique est d'une précision remarquable — ils ont trouvé mon parfum en vingt minutes.",
    name: "Sophie L.",
    context: "Cliente depuis 2022",
  },
  {
    quote:
      "Peu de maisons osent encore des compositions aussi denses que Velours Noir. C'est un parfum qu'on n'oublie pas.",
    name: "Antoine D.",
    context: "Client depuis 2020",
  },
];
