import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";

function Page() {
  return (
    <main>
      <Heading css="text-white" as="h1" content="Programming Heading" />
      <section>
        <Heading css="text-white" as="h2" content="Programming SubHeading" />
        <Paragraph>
          As long as I can remember, I've always been interested in computers.
        </Paragraph>
      </section>
      <section>
        <Heading css="text-white" as="h2" content="Programming SubHeading" />
        <Paragraph>
          As long as I can remember, I've always been interested in computers.
        </Paragraph>
      </section>
    </main>
  );
}

export default Page;
