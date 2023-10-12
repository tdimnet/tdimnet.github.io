type Experimentation = {
  id: number;
  name: string;
  img: string;
  technologies: string[];
};

export const experimentations: Experimentation[] = [
  {
    id: 1,
    name: "Calculator App",
    img: "/assets/calculator-app.jpg",
    technologies: ["TypeScript", "TailWind", "Vitest"],
  },
  {
    id: 2,
    name: "E-Commerce Product Page",
    img: "/assets/e-commerce-app.jpg",
    technologies: ["React", "TypeScript", "TailWind", "Vite", "Vitest"],
  },
];