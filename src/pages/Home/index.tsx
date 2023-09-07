import Heading from "../../components/Heading";
import Image from "../../components/Image";
import Paragraph from "../../components/Paragraph";

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
          <Paragraph css="mb-5 text-lg">Thomas "tom" Dimnet</Paragraph>
          <Heading
            css="text-white mb-2"
            content="Founder - NX Academy"
            as="h1"
          />
          <Heading
            css="text-white mb-12"
            content="Software Engineer and Engineering Teacher"
            as="h2"
          />
          <Paragraph css="mb-3">
            Based in Paris, I am the founder of NX Academy. My goal is to help
            developers achieve their objectives, whatever they may be. I have a
            keen interest in various subjects, including Computer Science, Data
            Science, Learning and Teaching Sciences, Psychology, and Philosophy.
            I sometimes give conferences but I trully shine when I coach people.
          </Paragraph>
        </div>
      </section>
      <section className="relative">
        <Heading
          css="text-white underline underline-offset-4"
          content="Skilled Full Stack Engineer"
          as="h2"
        />

        <Paragraph css="mb-6">
          During the last 10 years, I have worked with different companies from
          various sizes. You may know some of them: Datadog, OpenClassrooms,
          SensCritique, WeDigitalGarden (Now WeManinty). My main focus was
          always been engineering. I love building products that make People
          life better. I just want to make the work a better place.
        </Paragraph>
        <Paragraph>
          I started programming with Php more than 10 years ago. Since then, I
          have mostly written JavaScript/TypeScript and Python. I tend to be a
          pragrammatic programmer by using the right tool at the right time.
          Over engineering is neither an option, or something I like to do. Keep
          it simple stupid, as they say.
        </Paragraph>
      </section>
      <section>
        <Heading
          css="text-white underline underline-offset-4"
          content="Seasoned Teacher in-person and online"
          as="h2"
        />
        <Paragraph>
          Teaching to people is something that makes me feel alive. I teach them
          about programming, cloud engineering, and data science but also about
          human behaviours, psychology, and product management. There is a
          reason why I decided to create a company dedicated to teaching.
        </Paragraph>
        <Paragraph>
          Over the years, my lessons, especialy the ones I wrote for
          OpenClassrooms, have attracted thousand of students. When I was still
          on LinkedIn, there was not a week where I did not a message from a
          student. This is something that makes me proud but it algo gives
          responsabilities. Education purpose is to make students self thinker
          and proud.
        </Paragraph>
        <Paragraph>
          Do you know remember your best teachers at school? I do. I remember
          having one of the best maths teacher. He didn't make me feel stupid
          when I did not something, I did not judge me. This is the teacher I am
          trying to do. It doesn't always work but when it does, it does it for
          real.
        </Paragraph>
      </section>
      <section>
        <Heading
          css="text-white underline underline-offset-4"
          content="Former Developer Advocate"
          as="h2"
        />
      </section>
      <section>
        <Heading
          css="text-white underline underline-offset-4"
          content="Coach, not Manager"
          as="h2"
        />
      </section>
    </main>
  );
}

export default Page;
