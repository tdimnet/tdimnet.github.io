import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import ProjectsGrid from "../../layouts/ProjectsGrid";
import Project from "../../components/Project";

import { projects } from "../../data/projects";
import { technologies } from "../../data/technologies";
import { calculateYears } from "../../utils/calculateYears";

function Page() {
  return (
    <main className="mb-8">
      <section className="mb-10">
        <div className="h-96 mb-12">
          <Banner
            src="/assets/people-working-in-an-office.png"
            alt="People working in an office"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <Heading
              css="text-white mb-5"
              content="Between the search for meaning and technical excellence"
              as="h1"
            />
            <Paragraph css="mb-3">
              I strive to focus my efforts on projects that carry a profound
              sense of purpose and contribute positively to people's lives. This
              commitment to meaningful work fuels my passion and motivation.
              Whether it's designing solutions that enhance accessibility for
              individuals with disabilities or developing secure platforms that
              safeguard sensitive data, I find fulfillment in leveraging my
              technical expertise to make a tangible impact on society.
            </Paragraph>
            <Paragraph css="mb-3">
              However, at my core, I remain a dedicated technician, drawn to the
              challenges of projects characterized by their technical
              intricacies. I relish the opportunity to tackle high-stake
              projects that demand a high level of technical excellence. Whether
              it's optimizing systems for scalability to handle high traffic
              loads, ensuring robust security protocols to protect valuable
              assets, or addressing complex technical constraints, I approach
              these endeavors with a sense of excitement and dedication.
            </Paragraph>
            <Paragraph css="mb-3">
              In my professional journey, I've discovered a harmonious balance
              between my quest for meaningful work and my unwavering dedication
              to technical excellence. This equilibrium allows me to not only
              create solutions that matter but also to refine and perfect them,
              ensuring that they not only meet the highest technical standards
              but also serve a greater purpose, making a lasting impact on the
              world.
            </Paragraph>
          </article>
          <aside>
            <Heading
              css="text-white mb-4"
              content="Technologies at a Glance"
              as="h2"
            />
            <ul className="text-white pl-4">
              {technologies.map((technology) => (
                <li key={technology.id} className="flex items-center mb-3">
                  <img src={technology.img} className="h-5 w-5 mr-3" alt="" />
                  {technology.name} - {calculateYears(technology.yearStart)}
                </li>
              ))}
            </ul>
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
              withPixel={project.withPixel}
            />
          ))}
        </ProjectsGrid>
      </section>
    </main>
  );
}

export default Page;
