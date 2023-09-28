import { Link } from "react-router-dom";
import CustomLink from "../Link";

import Heading from "../Heading";
import Paragraph from "../Paragraph";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  return (
    <header className="row-span-1">
      <nav>
        <ul className="flex flex-row items-end">
          <li className="mr-4">
            <Link to="/">
              <Heading css="text-white" content="tom" as="h3" />
            </Link>
          </li>
          <li className="mr-4">
            <Link to="/publications">
              <Paragraph>Publications</Paragraph>
            </Link>
          </li>
          <li className="ml-auto mr-4">
            <a
              className="opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
              href="https://github.com/tdimnet"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
          <li className="mr-4">
            <a
              className="opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
              href="https://tdimnet.medium.com/"
              target="_blank"
            >
              <MediumIcon />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Component;
