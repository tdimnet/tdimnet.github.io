import Heading from "../Heading";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  return (
    <header className="flex">
      <Heading css="text-white" content="tom" as="h3" />
      <GithubIcon css="ml-auto mr-5" />
      <MediumIcon />
    </header>
  );
}

export default Component;
