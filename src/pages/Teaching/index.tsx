import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

function Page() {
  return (
    <main>
      <Heading css="text-white" as="h1" content="Teaching Heading" />
      <Paragraph>
        The more I built systems, the more I became interested in teaching it to
        people.
      </Paragraph>
    </main>
  );
}

export default Page;
