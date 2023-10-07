import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Project from "../../components/Project";
import Link from "../../components/Link";

import { experimentations } from "../../data/experimentations";

function Page() {
  return (
    <main className="mb-8">
      <section className="pr-3">
        <div className="h-96 mb-12">
          <Banner src="/assets/a-laboratory.png" alt="A laboratory" />
        </div>
        <article className="mb-12">
          <Heading
            css="text-white mb-5"
            content="Having Fun with Code"
            as="h1"
          />
          <Paragraph css="mb-3">
            I always enjoy experimenting with new technologies and concepts.
            Often, these explorations evolve into projects for my students or
            become snippets of code that I can integrate into real-world
            applications. As an engineer, staying updated and nurturing a sense
            of curiosity is a fundamental aspect of our profession. This ethos
            of continuous learning and exploration is also embedded in my work
            at NX Academy.
          </Paragraph>
          <Paragraph>
            Most often, I gravitate towards JavaScript/TypeScript and Python to
            build and test these small yet impactful projects. I’m also an avid
            fan of Docker, a tool that finds its way into most of my work,
            enhancing the efficiency and scalability of my projects. You can
            explore all of these innovations{" "}
            <Link
              to="https://github.com/tdimnet/"
              content="on my GitHub account"
              external
            />
            . Should you have any questions or wish to delve deeper into a
            specific project, feel free to open an issue. I’m always open to
            discussions that spur innovation and collaborative learning.
          </Paragraph>
        </article>
        <Heading
          css="text-white mb-5"
          content="Enjoyable Experimentations"
          as="h2"
        />
        <ProjectsGrid>
          {experimentations.map((experimentation) => (
            <Project
              key={experimentation.id}
              title={experimentation.name}
              skills={experimentation.technologies}
              img={experimentation.img}
            />
          ))}
        </ProjectsGrid>
      </section>
    </main>
  );
}

export default Page;
