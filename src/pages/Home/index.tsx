import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

function Page() {
  return (
    <main className="row-span-5 lg:mt-36">
      <section className="flex flex-col md:flex-row-reverse">
        <Image
          src="/assets/profil-picture.png"
          css="mb-5 w-96 object-cover"
          alt="Someone wearing a baseball cap in pixel art"
        />
        <div className="mr-10">
          <Paragraph css="mb-3 text-lg">Thomas "tom" Dimnet</Paragraph>
          <Heading
            css="text-white mb-2"
            content="Founder - NX Academy"
            as="h1"
          />
          <Heading
            css="text-white mb-8"
            content="Software Engineer and Engineering Teacher"
            as="h2"
          />
          <Paragraph css="mb-3">
            Based in Paris, I am the founder of{" "}
            <Link content="NX Academy" to="https://beta.nx.academy/" external />
            , where my mission is to empower developers to reach their goals,
            whatever they may be. With a diverse interest in Computer Science,
            Data Science, Learning and Teaching Sciences, Psychology, and
            Philosophy, I’m not only passionate about delving into complex
            topics but also about sharing this knowledge.
          </Paragraph>
          <Paragraph css="mb-3">
            Though I occasionally speak at conferences, my true strengths shine
            through in personal coaching and hands-on coding. Over the years,
            I’ve honed my skills and expertise across various roles and
            organizations. My journey includes roles as a Software Engineer and
            Developer Advocate at Datadog, a Lead Teacher at OpenClassrooms, and
            a Lead Developer/CTO at SensCritique.
          </Paragraph>
          <Paragraph css="mb-5">
            My commitment to fostering learning and development extends beyond
            traditional roles - I've been a speaker and instructor at On-Train,
            IronHack, and several other local bootcamps, where I’ve shared
            insights and knowledge that bridge the gap between learning and
            practical application.
          </Paragraph>
          {/* <Paragraph css="mb-3">
            Depending on your objective, you might have a look on{" "}
            <Link content="Link one" to="#" />,{" "}
            <Link content="Link two" to="#" />, or{" "}
            <Link content="Link three" to="#" />.
          </Paragraph> */}
        </div>
      </section>
    </main>
  );
}

export default Page;
