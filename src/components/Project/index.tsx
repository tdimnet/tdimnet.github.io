import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Link from "../Link";

function Component({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-teriary">
      <img src="/assets/sample-img.png" />
      <Heading css="text-white" content={title} as="h3" />
      <div className="flex flex-wrap">
        {skills.map((skill) => (
          <div key={skill} className="mr-2 mb-1">
            <Paragraph color="text-customGrey" content={skill} />
          </div>
        ))}
      </div>
      <ul>
        <li>
          <Link />
        </li>
        <li>
          <Link />
        </li>
      </ul>
    </div>
  );
}

export default Component;
