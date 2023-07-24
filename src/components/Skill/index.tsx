import Heading from "../Heading";
import Paragraph from "../Paragraph";

function Component({ title, content }: { title: string; content?: string }) {
  return (
    <li>
      <Heading css="text-white" content={title} as="h3" />
      {content && <Paragraph>{content}</Paragraph>}
    </li>
  );
}

export default Component;
