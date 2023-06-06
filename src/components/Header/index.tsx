import Heading from "../Heading";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  return (
    <header>
      <Heading css="text-white" content="tom" as="h3" />
      <GithubIcon />
      <MediumIcon />
    </header>
  );
}

export default Component;
