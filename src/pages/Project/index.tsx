import { useParams } from "react-router-dom";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Skill from "../../components/Skill";
import SkillsGrid from "../../layouts/SkillsGrid";

import { projects } from "../../data/projects";

function Page() {
  const { id } = useParams();
  if (!id) return null;

  const project = projects.filter((p) => p.id === Number(id))[0];
  if (!project) return null;

  return (
    <main>
      <section className="mb-5">
        <div className="h-96 mb-4">
          <img
            src={project.img}
            className="absolute left-0 w-full h-96 object-cover"
            alt={`${project.jobTitle} at ${project.name}`}
          />
        </div>
        <div className="md:mr-5">
          <Heading
            css="text-white mb-5 lg:mr-8 capitalize"
            content={project.name}
            as="h1"
          />
          <Heading
            css="text-white mb-8 capitalize"
            content={project.jobTitle}
            as="h2"
          />
          <Paragraph color="text-white" content={project.description} />
        </div>
      </section>
      <section className="mb-5">
        <Heading css="text-white" content="Highlights" as="h2" />
      </section>
      <section>
        <Heading css="text-white mb-5" content="Technologies" as="h2" />
        <SkillsGrid>
          <Skill title="Docker" content="5 Years Experience" />
          <Skill title="TypeScript" content="5 Years Experience" />
        </SkillsGrid>
      </section>
    </main>
  );
}

export default Page;
