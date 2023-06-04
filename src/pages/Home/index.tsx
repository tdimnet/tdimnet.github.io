import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

function Page() {
  return (
    <div className="bg-primay h-screen w-screen flex justify-center items-center flex-col">
      <Heading
        css="text-customGrey mb-5"
        content="Hi Frendly visitor 👋"
        as="h1"
      />
      <Heading
        css="text-customGrey mb-12"
        content="Thank you for visiting!"
        as="h2"
      />
      <Paragraph
        color="text-customGrey"
        content="This website is under construction."
      />
      <Paragraph
        color="text-customGrey"
        content="Released date: <strong>June 2023</strong>."
      />
    </div>
  );
}

export default Page;
