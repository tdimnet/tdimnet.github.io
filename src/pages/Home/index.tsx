import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Header from "../../components/Header";
import Skill from "../../components/Skill";

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
        <section>
          <Heading css="text-white mb-10 underline underline-offset-4" content="Hard Skills" as="h2" />
          <ul>
            <Skill title="HTML" content="7 Years Experience" />
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Page;
