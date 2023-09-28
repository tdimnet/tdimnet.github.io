import Heading from "../../components/Heading";
import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";

function Page() {
  return (
    <main className="">
      <section className="">
        <div className="h-96 mb-4">
          <Banner src="/assets/sample-img.png" alt="" />
        </div>
        <div>
          <Heading css="text-white" content="Publications" as="h1" />
          <Paragraph css="mb-3">
            That's for sure, I do love writing. I particulary enjoy popularizing
            complex subjects, such as Computer Science, Large Language Model, or
            even Economics.
          </Paragraph>
        </div>
      </section>
    </main>
  );
}

export default Page;
