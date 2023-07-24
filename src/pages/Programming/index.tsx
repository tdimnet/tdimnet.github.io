import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";

function Page() {
  return (
    <main>
      <Heading css="text-white" as="h1" content="Programming Heading" />
      <Paragraph>
        As long as I can remember, I've always been interested in computers.
      </Paragraph>
    </main>
  );
}

export default Page;
