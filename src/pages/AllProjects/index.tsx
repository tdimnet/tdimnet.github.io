import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Project from "../../components/Project";

import { projects } from "../../data/projects";

function Page() {
  return (
    <main>
      <div className="mb-10">
        <Heading css="text-white" content="Discover all my projects" as="h1" />
        <Paragraph
          color="text-white"
          content="Here are all the projects I worked on along the years.
        <br />Some are related to software engineering, other to cloud architecures, and other to teaching."
        />
      </div>
      <section>
        <Heading css="text-white mb-5" content="Teaching Projects" as="h2" />
        <ProjectsGrid>
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.name}
              skills={project.technologies}
              projectUrl=""
              codeUrl=""
            />
          ))}
        </ProjectsGrid>
      </section>
    </main>
  );
}

export default Page;
