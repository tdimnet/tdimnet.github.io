import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Header from "../../components/Header";
import Skill from "../../components/Skill";
import Project from "../../components/Project";

function Page() {
  return (
    <main className="bg-primay">
      <div className="max-w-screen-lg mx-auto pt-5 px-5 lg:px-0 min-h-screen">
        <div className="mb-36">
          <Header />
        </div>
        <section className="flex justify-center items-center flex-col mb-48">
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
          <Paragraph
            color="text-white"
            content="This website is under construction."
          />
          <Paragraph
            color="text-white"
            content="Released date: <strong>June 2023</strong>."
          />
        </section>
        <section className="mb-12">
          <Heading
            css="text-white mb-10 underline underline-offset-4"
            content="Hard Skills"
            as="h2"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
            <Skill title="HTML" content="7 Years Experience" />
            <Skill title="CSS" content="7 Years Experience" />
            <Skill title="JavaScript" content="7 Years Experience" />
            <Skill title="TypeScript" content="4 Years Experience" />
            <Skill title="Accessibility" content="5 Years Experience" />
            <Skill title="React/Next" content="5 Years Experience" />
          </ul>
        </section>
        <section>
          <Heading
            css="text-white mb-10 underline underline-offset-4"
            content="Projects"
            as="h2"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-x-5">
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
            <Project
              title="SensCritique"
              skills={["NextJS", "React Native", "Python"]}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
