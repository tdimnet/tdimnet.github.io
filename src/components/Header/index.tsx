import { Link, useLocation } from "react-router-dom";
import CustomLink from "../Link";

import Heading from "../Heading";
import Paragraph from "../Paragraph";
import GithubIcon from "../../icons/Github";
import MediumIcon from "../../icons/Medium";

function Component() {
  const { pathname } = useLocation();

  return (
    <header className="row-span-1">
      <nav>
        <ul className="flex flex-row items-end mb-3">
          <li className="mr-2">
            <Link to="/">
              <Heading css="text-white" content="tom" as="h3" />
            </Link>
          </li>
          <li className="mr-2">
            <Link to="/publications">
              <Paragraph
                css={
                  pathname === "/publications"
                    ? "underline decoration-secondary underline-offset-4"
                    : ""
                }
              >
                Publications
              </Paragraph>
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/experimentations">
              <Paragraph
                css={
                  pathname === "/experimentations"
                    ? "underline decoration-secondary underline-offset-4"
                    : ""
                }
              >
                Trials
              </Paragraph>
            </Link>
          </li>
          <li className="ml-auto mr-2">
            <a
              className="opacity-80 hover:opacity-100 ease-in duration-200 hover:scale-125"
              href="https://github.com/tdimnet"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </li>
          <li className="">
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
