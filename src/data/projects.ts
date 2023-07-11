type Project = {
  id: number;
  name: string;
  jobTitle: string;
  description: string;
  img: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    name: "nx acadamy",
    jobTitle: "Founder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames. Nisl purus in mollis nunc sed id semper risus. Tincidunt id aliquet risus feugiat in ante metus dictum at.",
    img: "/assets/sample-img.png",
    technologies: ["NextJS", "React Native"],
  },
  {
    id: 2,
    name: "datadog",
    jobTitle: "developer advocate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames. Nisl purus in mollis nunc sed id semper risus. Tincidunt id aliquet risus feugiat in ante metus dictum at.",
    img: "/assets/sample-img.png",
    technologies: ["TypeScript", "Python"],
  },
  {
    id: 3,
    name: "openclassrooms",
    jobTitle: "lead teacher",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis. Tristique senectus et netus et malesuada fames. Nisl purus in mollis nunc sed id semper risus. Tincidunt id aliquet risus feugiat in ante metus dictum at.",
    img: "/assets/sample-img.png",
    technologies: ["JavaScript"],
  },
];
