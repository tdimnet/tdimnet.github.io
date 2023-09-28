import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Project from "../../components/Project";

import { experimentations } from "../../data/experimentations";

function Page() {
  return (
    <main className="mb-8">
      <section>
        <div className="h-96 mb-12">
          <Banner src="/assets/sample-img.png" alt="" />
        </div>
        <div>
          <Heading css="text-white mb-5" content="Experimentations" as="h1" />
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
        </div>
      </section>
    </main>
  );
}

export default Page;
