import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Header from "../../components/Header";

function Page() {
  return (
    <main className="bg-primay h-screen w-screen">
      <div className="max-w-screen-lg mx-auto pt-5 px-5 lg:px-0 h-full">
        <Header />
        <section className="flex justify-center items-center flex-col h-5/6">
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
      </div>
    </main>
  );
}

export default Page

