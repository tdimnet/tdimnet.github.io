import Heading from '../../components/Heading'

function Page() {
  return (
    <div className="bg-primay h-screen w-screen flex justify-center items-center flex-col">
      <Heading
        css='text-customGrey mb-5'
        content='Hi Frendly visitor 👋'
        as='h1'
      />
      <Heading
        css='text-customGrey'
        content='Thank you for visiting!'
        as='h2'
      />
    </div>
  );
}

export default Page;
