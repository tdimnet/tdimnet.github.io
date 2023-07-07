import Heading from "../Heading";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  return (
    <footer className="flex flex-col justify-center items-center">
      <Heading css="text-white mb-5" content="tom" as="h3" />
      <ul className="grid grid-cols-2">
        <li>
          <a
            className="ml-auto mr-5 opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
            href="https://github.com/tdimnet"
            target="_blank"
          >
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className="opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
            href="https://tdimnet.medium.com/"
            target="_blank"
          >
            <MediumIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Component;
