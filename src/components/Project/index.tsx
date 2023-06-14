import Heading from "../Heading";
import Paragraph from "../Paragraph";

function Component({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="bg-teriary">
      <img src="/assets/sample-img.png" />
      <Heading css="text-white" content={title} as="h3" />
      {skills.map((skill) => (
        <Paragraph key={skill} color="text-customGrey" content={skill} />
      ))}
    </div>
  );
}

export default Component;
