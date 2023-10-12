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
      <div className="project-imgs">
        <Image css="project-first-img duration-300" src={img} alt={title} />
        <Image
          css="project-second-img duration-300"
          src="/assets/pxArt.png"
          alt={title}
        />
      </div>
      <Heading css="text-white mb-1" content={title} as="h3" />
      <Paragraph>{skills.join(", ")}</Paragraph>
    </div>
  );
}

export default Component;
