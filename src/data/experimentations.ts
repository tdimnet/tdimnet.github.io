type Experimentation = {
  id: number;
  name: string;
  img: string;
  pixelImg?: string;
  technologies: string[];
};

export const experimentations: Experimentation[] = [
  {
    id: 1,
    name: "Calculator App",
    img: "/assets/calculator-app.jpg",
    pixelImg: "/assets/px-art-calculator-app.jpg",
    technologies: ["TypeScript", "Tailwind", "Vitest"],
  },
  {
    id: 2,
    name: "E-Commerce Product Page",
    img: "/assets/e-commerce-app.jpg",
    pixelImg: "/assets/px-art-e-commerce-app.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Storybook"],
  },
  {
    id: 3,
    name: "Age Calculator App",
    img: "/assets/age-calculator-app.jpg",
    pixelImg: "/assets/px-art-age-calculator-app.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "No framework"],
  },
];
