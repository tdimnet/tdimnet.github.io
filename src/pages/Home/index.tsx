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
    <main className="row-span-5">
      <section className="flex flex-col md:flex-row-reverse">
        <Image
          src="/assets/profil-picture.png"
          css="mb-5 w-96"
          alt="Someone wearing a baseball cap in pixel art"
        />
        <div className="mr-10">
          <Paragraph css="mb-5 text-lg">Thomas "tom" Dimnet</Paragraph>
          <Heading
            css="text-white mb-3"
            content="Founder - NX Academy"
            as="h1"
          />
          <Heading
            css="text-white mb-10"
            content="Software Engineer and Engineering Teacher"
            as="h2"
          />
          <Paragraph css="mb-3">
            Based in Paris, I am the founder of NX Academy. My goal is to help
            developpers to meet their objectives, whatever they are. I am
            interested in many subjects, such as Computer Science, Data Science,
            Learning and Teaching Science, Psychology and Phylosophy.
          </Paragraph>
        </div>
      </section>
    </main>
  );
}

export default Page;
