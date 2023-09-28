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
          css="mb-5 w-96"
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
            . My goal is to help developers achieve their objectives, whatever
            they may be. I have a keen interest in various subjects, including
            Computer Science, Data Science, Learning and Teaching Sciences,
            Psychology, and Philosophy. I sometimes speak at conferences but I
            trully shine when I coach people and write code.
          </Paragraph>
          <Paragraph css="mb-3">
            Among the years, I've worked for various companies. I've been a
            Software Enginner and Developer Advocate at Datadog, a Lead Teacher
            at OpenClassrooms, a Lead Developer / CTO at SensCritique. I also
            gave conferences and lessons at On-Train, IronHack, and some other
            local bootcamps.
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
