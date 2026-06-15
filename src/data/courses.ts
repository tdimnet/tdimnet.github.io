type Course = {
  id: number;
  language: string;
  name: string;
  url: string;
  brand: "oc" | "nx";
};

export const courses: Course[] = [
  {
    id: 1,
    language: "🇺🇸",
    name: "Make Your Web Content Accessible",
    url: "https://openclassrooms.com/en/courses/6663451-make-your-web-content-accessible",
    brand: "oc",
  },
  {
    id: 2,
    language: "🇫🇷",
    name: "Utilisez des design patterns en JavaScript",
    url: "https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript",
    brand: "oc",
  },
  {
    id: 3,
    language: "🇫🇷",
    name: "Preparez-vous aux tests techniques pour devenir developpeur",
    url: "https://openclassrooms.com/fr/courses/6045521-preparez-vous-aux-tests-techniques-pour-devenir-developpeur",
    brand: "oc",
  },
  {
    id: 4,
    language: "🇺🇸",
    name: "Code an Accessible Webiste in HTML and CSS",
    url: "https://openclassrooms.com/en/courses/6663461-code-an-accessible-website-in-html-css",
    brand: "oc",
  },
  {
    id: 5,
    language: "🇫🇷",
    name: "Deboguez l'interface de votre site internet",
    url: "https://openclassrooms.com/fr/courses/7159296-deboguez-l-interface-de-votre-site-internet",
    brand: "oc",
  },
  {
    id: 6,
    language: "🇫🇷",
    name: "Conteneurisez vos applications avec Docker",
    url: "https://nx.academy/cours/docker-et-docker-compose/",
    brand: "nx",
  },
  {
    id: 7,
    language: "🇫🇷",
    name: "Maîtrisez les pipelines CI/CD avec les GitHub Actions",
    url: "https://nx.academy/cours/ci-cd-github-actions/",
    brand: "nx",
  },
];
