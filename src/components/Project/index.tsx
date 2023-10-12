import Heading from "../Heading";
import Image from "../Image";
import Link from "../Link";
import Paragraph from "../Paragraph";

function Component({
  skills,
  title,
  img,
  withPixel,
}: {
  skills: string[];
  title: string;
  img: string;
  withPixel?: string;
}) {
  return (
    <div>
      {withPixel ? (
        <div className="project-img-wrapper">
          <Image
            css="project-img project-first-img duration-300"
            src={img}
            alt={title}
          />
          <Image
            css="project-img project-second-img duration-300"
            src={withPixel}
            alt={title}
          />
        </div>
      ) : (
        <Image css="mb-5" src={img} alt={title} />
      )}
      <Heading css="text-white mb-1" content={title} as="h3" />
      <Paragraph>{skills.join(", ")}</Paragraph>
    </div>
  );
}

export default Component;
