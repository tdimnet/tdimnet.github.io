import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Project from "../../components/Project";
import Skill from "../../components/Skill";
import SkillsGrid from "../../layouts/SkillsGrid";

import { projects } from "../../data/projects";

function Page() {
  const topSixProjects = projects.slice(0, 6);

  return (
    <main className="mb-10">
      <section className="flex justify-center items-center flex-col mb-4 md:flex-row-reverse">
        <img
          src="/assets/profil-picture.png"
          className="mb-5 w-96"
          alt="Someone wearing a baseball cap in pixel art"
        />
        <div className="lg:mr-8">
          <Heading
            css="text-white mb-5"
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
          content="Principal Technologies"
          as="h2"
        />
        <SkillsGrid>
          <Skill title="HTML" content="7 Years Experience" />
          <Skill title="CSS" content="7 Years Experience" />
          <Skill title="JavaScript" content="7 Years Experience" />
          <Skill title="TypeScript" content="4 Years Experience" />
          <Skill title="Accessibility" content="5 Years Experience" />
          <Skill title="React/Next" content="5 Years Experience" />
        </SkillsGrid>
      </section>
      <section>
        <Heading
          css="text-white mb-10 underline underline-offset-4"
          content="Projects"
          as="h2"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-5 mb-10">
          {topSixProjects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.name}
              skills={project.technologies}
              projectUrl=""
              codeUrl=""
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="text-white font-space-grotest font-medium text-base tracking-wider hover:underlin"
            to="/projects"
          >
            See All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
