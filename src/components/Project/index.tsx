import Heading from "../Heading";
import Image from "../Image";
import Link from "../Link";
import Paragraph from "../Paragraph";

function Component({
  skills,
  title,
  img,
}: {
  skills: string[];
  title: string;
  img: string;
}) {
  return (
    <div>
      <Image css="mb-5 " src={img} alt={title} />
      <Heading css="text-white mb-1" content={title} as="h3" />
      <Paragraph>{skills.join(", ")}</Paragraph>
    </div>
  );
}

export default Component;
