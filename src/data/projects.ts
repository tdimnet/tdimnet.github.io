type Project = {
  id: number;
  name: string;
  url?: string;
  img: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Popcorns",
    url: "https://www.google.fr",
    img: "/assets/popcorns-logo.png",
    technologies: ["React Native", "Python", "Selenium"],
  },
  {
    id: 2,
    name: "Foodle",
    url: "https://www.google.fr",
    img: "/assets/foodle-logo.png",
    technologies: ["ReactJS", "Redux", "Sass"],
  },
  {
    id: 3,
    name: "NX Academy",
    url: "https://www.google.fr",
    img: "/assets/icon-original.png",
    technologies: ["Docker", "GitHub Actions", "TypeScript"],
  },
];
