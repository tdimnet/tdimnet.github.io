type Project = {
  id: number;
  name: string;
  url: string;
  img: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Popcorns",
    url: "https://www.google.fr",
    img: "/assets/sample-img.png",
    technologies: ["React Native", "Python", "Selenium"],
  },
  {
    id: 2,
    name: "Foodle",
    url: "https://www.google.fr",
    img: "/assets/sample-img.png",
    technologies: ["ReactJS", "Redux", "Sass"],
  },
];
