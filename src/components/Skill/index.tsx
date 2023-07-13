import Heading from "../Heading";
import Paragraph from "../Paragraph";

function Component({ title, content }: { title: string; content: string }) {
  return (
    <li>
      <Heading css="text-white" content={title} as="h3" />
      <Paragraph color="text-customGrey" content={content} />
    </li>
  );
}

export default Component;
