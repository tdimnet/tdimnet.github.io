type Project = {
  id: number;
  name: string;
  url?: string;
  img: string;
  withPixel?: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "Popcorns",
    url: "https://www.google.fr",
    img: "/assets/popcorns-logo.png",
    withPixel: "/assets/px-art-popcorns-logo.png",
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
  {
    id: 4,
    name: "SensCritique: website",
    url: "https://www.google.fr",
    img: "/assets/senscritique-logo.png",
    technologies: ["NextJS", "Node.JS", "GraphQL", "Flask", "Docker"],
  },
  {
    id: 5,
    name: "Datadog",
    url: "https://www.google.fr",
    img: "/assets/datadog-logo.png",
    technologies: ["ReactJS", "TypeScript", "Python"],
  },
  {
    id: 6,
    name: "Club Med: Meetings & Events",
    url: "https://www.google.fr",
    img: "/assets/club-med-logo.png",
    technologies: ["AngularJS", "Sass"],
  },
  {
    id: 7,
    name: "SensCritique: the app",
    url: "https://www.google.fr",
    img: "/assets/senscritique-app.png",
    technologies: ["React Native", "Redux"],
  },
  {
    id: 8,
    name: "Tiller Systems",
    url: "https://www.google.fr",
    img: "/assets/tiller-logo.png",
    technologies: ["React Native", "Redux", "Angular"],
  },
  {
    id: 9,
    name: "Nos Amis Les Oiseaux",
    url: "https://www.google.fr",
    img: "/assets/nao-logo.png",
    technologies: ["Symfony", "Vanilla JS", "Sass"],
  },
];
