import { useParams } from "react-router-dom";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

import { projects } from "../../data/projects";

function Page() {
  const { id } = useParams();
  if (!id) return null;

  const project = projects.filter((p) => p.id === Number(id))[0];
  if (!project) return null;

  return (
    <main>
      <section className="flex justify-between flex-col mb-4 md:flex-row-reverse">
        <img
          src={project.img}
          className="mb-5 w-96"
          alt={`${project.jobTitle} at ${project.name}`}
        />
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
      <section>
        <Heading css="text-white" content="Highlights" as="h2" />
      </section>
      <section>
        <Heading css="text-white" content="Objectives" as="h2" />
      </section>
      <section>
        <Heading css="text-white" content="Technical Perspectives" as="h2" />
      </section>
    </main>
  );
}

export default Page;
