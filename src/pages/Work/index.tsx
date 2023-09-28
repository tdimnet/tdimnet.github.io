import Heading from "../../components/Heading";
import Banner from "../../components/Banner";
import Paragraph from "../../components/Paragraph";
import Link from "../../components/Link";

function Page() {
  return (
    <main className="mb-8">
      <section>
        <div className="h-96 mb-12">
          <Banner src="/assets/sample-img.png" alt="" />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div>
              <Heading
                css="text-white mb-5"
                content="No Risk, No Fun"
                as="h1"
              />
              <Paragraph css="mb-3">
                Writing holds a special place in my heart as it forms a
                significant part of my learning and teaching process. I take
                particular pleasure in popularizing complex topics like Computer
                Science, Large Language Models, and Economics, making them
                accessible and engaging to a wider audience.
              </Paragraph>
            </div>
            <div className="mb-5">
              <Heading
                css="text-white mb-2"
                content="Teaching gave me purpose"
                as="h2"
              />
              <Paragraph css="mb-3">
                Writing holds a special place in my heart as it forms a
                significant part of my learning and teaching process. I take
                particular pleasure in popularizing complex topics like Computer
                Science, Large Language Models, and Economics, making them
                accessible and engaging to a wider audience.
              </Paragraph>
              <div>
                <Heading
                  css="text-white mb-3"
                  content="Related Projects"
                  as="h3"
                />
                <div className="grid grid-cols-3">
                  <div className="bg-white h-32 w-32"></div>
                  <div className="bg-white h-32 w-32"></div>
                  <div className="bg-white h-32 w-32"></div>
                </div>
              </div>
            </div>
            <Heading
              css="text-white mb-2"
              content="I Decided to Give Big Tech a try"
              as="h2"
            />
            <Paragraph css="mb-3">
              Writing holds a special place in my heart as it forms a
              significant part of my learning and teaching process. I take
              particular pleasure in popularizing complex topics like Computer
              Science, Large Language Models, and Economics, making them
              accessible and engaging to a wider audience.
            </Paragraph>
            <Heading
              css="text-white mb-2"
              content="Now It's time to take risks again"
              as="h2"
            />
            <Paragraph css="mb-3">
              Writing holds a special place in my heart as it forms a
              significant part of my learning and teaching process. I take
              particular pleasure in popularizing complex topics like Computer
              Science, Large Language Models, and Economics, making them
              accessible and engaging to a wider audience.
            </Paragraph>
          </article>
          <aside>
            <Heading
              css="text-white mb-5"
              content="Experiences at a glance"
              as="h2"
            />
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Page;
