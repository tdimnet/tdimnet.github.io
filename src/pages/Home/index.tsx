import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Project from "../../components/Project";
import Skill from "../../components/Skill";

function Page() {
  return (
    <main className="mb-10">
      <section className="flex justify-center items-center flex-col mb-4 md:flex-row-reverse">
        <img
          src="/assets/profil-picture.png"
          className="mb-5 w-96"
          alt="Someone wearing a baseball cap in pixel art"
        />
        <div>
          <Heading
            css="text-white mb-5 lg:mr-8"
            content="Hi Friendly Visitor 👋"
            as="h1"
          />
          <Heading
            css="text-white mb-12"
            content="Thank you for visiting!"
            as="h2"
          />
          <Paragraph color="text-white" content="Ny name is Tom. I'm French." />
          <Link
            className="text-white font-space-grotest font-bold text-base tracking-wider border-b-2 border-secondary"
            to="/about"
          >
            Learn more
          </Link>
        </div>
      </section>
      <section className="mb-12">
        <Heading
          css="text-white mb-10 underline underline-offset-4"
          content="Hard Skills"
          as="h2"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
          <Skill title="HTML" content="7 Years Experience" />
          <Skill title="CSS" content="7 Years Experience" />
          <Skill title="JavaScript" content="7 Years Experience" />
          <Skill title="TypeScript" content="4 Years Experience" />
          <Skill title="Accessibility" content="5 Years Experience" />
          <Skill title="React/Next" content="5 Years Experience" />
        </ul>
      </section>
      <section>
        <Heading
          css="text-white mb-10 underline underline-offset-4"
          content="Projects"
          as="h2"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-5">
          <Project
            id={1}
            title="NX Acadamy"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
          <Project
            id={2}
            title="Datadog"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
          <Project
            id={3}
            title="OpenClassrooms"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
          <Project
            id={4}
            title="SensCritique"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
          <Project
            id={5}
            title="Popcorns"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
          <Project
            id={6}
            title="Foodle"
            skills={["NextJS", "React Native", "Python"]}
            projectUrl="https://www.senscritique.com"
            codeUrl="https://www.senscritique.com"
          />
        </div>
      </section>
    </main>
  );
}

export default Page;
