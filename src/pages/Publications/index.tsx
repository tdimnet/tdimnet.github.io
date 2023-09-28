import Heading from "../../components/Heading";
import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

import { articles } from "../../data/articles";

function Page() {
  return (
    <main className="mb-8">
      <section>
        <div className="h-96 mb-12">
          <Banner
            src="/assets/software-engineer.png"
            alt="A software engineer in pixel art"
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <Heading css="text-white mb-5" content="Publications" as="h1" />
            <Paragraph css="mb-3">
              Writing holds a special place in my heart as it forms a
              significant part of my learning and teaching process. I take
              particular pleasure in popularizing complex topics like Computer
              Science, Large Language Models, and Economics, making them
              accessible and engaging to a wider audience.
            </Paragraph>
            <Paragraph css="mb-3">
              Depending on my readership, I oscillate between English and French
              to ensure the content is as relatable as possible. Feedback from
              the community is my compass, guiding my efforts to refine and
              adapt my content to meet the evolving needs and curiosities of my
              audience.
            </Paragraph>
            <Paragraph css="mb-3">
              I am proud of the reception my articles have received, with
              numerous pieces being highlighted for their clarity, insight, and
              accessibility. It’s a testament to my commitment to not just share
              knowledge, but to do so in a way that resonates, educates, and
              inspires.
            </Paragraph>
            <Paragraph css="mb-3">
              You can explore most of my writings on{" "}
              <Link
                content="my Medium account"
                external
                to="https://tdimnet.medium.com/"
              />
              , a space where education meets insight, complexity is unraveled,
              and knowledge is shared generously.
            </Paragraph>
          </article>
          <aside>
            <Heading
              css="text-white mb-5"
              content="Selected Publications"
              as="h2"
            />
            <ul>
              {articles.map((article) => (
                <li className="mb-3" key={article.id}>
                  {article.language}{" "}
                  <Link content={article.name} to={article.url} external></Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Page;
