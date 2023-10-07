import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Project from "../../components/Project";

import { projects } from "../../data/projects";

function Page() {
  return (
    <main className="mb-8">
      <section>
        <div className="h-96 mb-12">
          <Banner
            src="/assets/sample-img.png"
            alt="A classroom with computers in pixel art"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <Heading
              css="text-white mb-5"
              content="A Great Title for Projects"
              as="h1"
            />
            <Paragraph css="mb-3">
              In life, I am driven by two passions: unraveling complex problems
              through code and imparting the skills to others on how to navigate
              such challenges. We all carry the imprint of great teachers from
              our schooling years – individuals who had the alchemy to transmute
              our raw energies into passion and arouse interest in subjects we
              initially found inscrutable or unappealing.
            </Paragraph>
          </article>
          <aside>
            <Heading
              css="text-white mb-4"
              content="Technologies at a Glance"
              as="h2"
            />
          </aside>
        </div>
      </section>
      <section>
        <Heading css="text-white mb-5" content="Selected Projects" as="h2" />
        <ProjectsGrid>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.name}
              skills={project.technologies}
              img={project.img}
            />
          ))}
        </ProjectsGrid>
      </section>
    </main>
  );
}

export default Page;
