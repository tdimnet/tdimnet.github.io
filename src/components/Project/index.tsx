import Link from "../Link";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

function Component({
  id,
  skills,
  title,
}: {
  codeUrl?: string;
  id: number;
  projectUrl: string;
  skills: string[];
  title: string;
}) {
  return (
    <div>
      <img src="/assets/sample-img.png" alt="Just a sample image" />
      <Heading css="text-white" content={title} as="h3" />
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div key={skill} className="mr-2 mb-1">
            <Paragraph>{skill}</Paragraph>
          </div>
        ))}
      </div>
      <h4>
        <Link content="Learn more" to={`/project/${id}`} />
      </h4>
    </div>
  );
}

export default Component;
