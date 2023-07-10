import { Link } from 'react-router-dom'

import Heading from "../Heading";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  return (
    <header className="flex">
      <Link to="/">
        <Heading css="text-white" content="tom" as="h3" />
      </Link>
      <a
        className="ml-auto mr-5 opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
        href="https://github.com/tdimnet"
        target="_blank"
      >
        <GithubIcon />
      </a>
      <a
        className="opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
        href="https://tdimnet.medium.com/"
        target="_blank"
      >
        <MediumIcon />
      </a>
    </header>
  );
}

export default Component;
