import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Link from "../../components/Link";
import Paragraph from "../../components/Paragraph";
import Project from "../../components/Project";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Skill from "../../components/Skill";
import SkillsGrid from "../../layouts/SkillsGrid";

import { projects } from "../../data/projects";
import { calculateYears } from "../../utils/calculateYears";

function Page() {
  const topSixProjects = projects.slice(0, 6);

  return (
    <main className="mb-10">
      <section className="flex justify-center items-center flex-col mb-4 md:flex-row-reverse">
        <Image
          src="/assets/profil-picture.png"
          css="mb-5 w-96"
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
          <Paragraph css="mb-1">
            My name is Tom. I'm French and I'm based in Paris.
          </Paragraph>
          <Paragraph css="mb-5">
            I love <Link content="programming" to="/programming" />,{" "}
            <Link content="teaching" to="/teaching" /> and{" "}
            <Link content="writing" to="/writing" />.
          </Paragraph>
        </div>
      </section>
      <section className="mb-12">
        <Heading
          css="text-white mb-10 underline underline-offset-4"
          content="Technologies"
          as="h2"
        />
        <SkillsGrid>
          <Skill title="HTML" content={`${calculateYears(2015)}`} />
          <Skill title="CSS" content={`${calculateYears(2015)}`} />
          <Skill title="JavaScript" content={`${calculateYears(2015)}`} />
          <Skill title="TypeScript" content="4 Years Experience" />
          <Skill title="Accessibility" content="5 Years Experience" />
          <Skill title="React/Next" content={`${calculateYears(2017)}`} />
        </SkillsGrid>
      </section>
      <section>
        <Heading
          css="text-white mb-10 underline underline-offset-4"
          content="Projects"
          as="h2"
        />
        <ProjectsGrid>
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
        </ProjectsGrid>
        <div className="flex justify-center items-center">
          <Link content="See All Projects" to="/projects" />
        </div>
      </section>
    </main>
  );
}

export default Page;
