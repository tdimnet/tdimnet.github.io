import Heading from "../../components/Heading";
import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

import { courses } from "../../data/courses";

function Page() {
  return (
    <main className="mb-8">
      <section>
        <div className="h-96 mb-12">
          <Banner
            src="/assets/a-classrooms.png"
            alt="A classroom with computers in pixel art"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <Heading
              css="text-white mb-5"
              content="Passion Comes with Great Teachers"
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
            <Paragraph css="mb-3">
              For over 6 years, I have been immersed in the realm of teaching
              and coaching, a journey that has seen me mentor developers in
              diverse settings, from online mentoring sessions to classroom
              environments, and expansive MOOCs. My MOOCs, rich with insights
              and practical wisdom, have been the academic companions to
              thousands of students globally.
            </Paragraph>
            <Paragraph css="mb-3">
              My teaching philosophy is rooted in empowerment. I strive to
              cultivate autonomy in my students, encouraging them to think
              independently rather than lean passively on external aid. It's
              about teaching them how to fish, offering them the tools, skills,
              and confidence to navigate the intricate waters of coding
              independently.
            </Paragraph>
            <Paragraph css="mb-3">
              Over the years, my exploratory journey in education has woven
              through various teaching modalities. From one-on-one coaching
              sessions to orchestrating classes and designing 8 comprehensive
              online courses with OpenClassrooms, every interaction is an
              opportunity to ignite curiosity, nurture skills, and inspire
              excellence.
            </Paragraph>
          </article>
          <aside>
            <Heading css="text-white mb-4" content="Selected Courses" as="h2" />
            <div>
              <Heading
                css="text-white mb-2"
                content="With NX Academy"
                as="h3"
              />
              <ul>
                {courses
                  .filter((course) => course.brand === "nx")
                  .map((course) => (
                    <li className="mb-3" key={course.id}>
                      {course.language}{" "}
                      <Link
                        content={course.name}
                        to={course.url}
                        external
                      ></Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div>
              <Heading
                css="text-white mb-2"
                content="With OpenClassrooms"
                as="h3"
              />
              <ul>
                {courses
                  .filter((course) => course.brand === "oc")
                  .map((course) => (
                    <li className="mb-2" key={course.id}>
                      {course.language}{" "}
                      <Link
                        content={course.name}
                        to={course.url}
                        external
                      ></Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Page;
