import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Link from "../Link";

function Component({
  title,
  skills,
  projectUrl,
  codeUrl,
}: {
  title: string;
  skills: string[];
  projectUrl: string;
  codeUrl?: string;
}) {
  return (
    <div>
      <img src="/assets/sample-img.png" />
      <Heading css="text-white" content={title} as="h3" />
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div key={skill} className="mr-2 mb-1">
            <Paragraph color="text-customGrey" content={skill} />
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-2">
        <li>
          <Link url={projectUrl} content="View project" />
        </li>
        {codeUrl && (
          <li>
            <Link url={codeUrl} content="View code" />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Component;
