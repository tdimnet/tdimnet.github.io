import Heading from '../../components/Heading'

function Page() {
  return (
    <div className="bg-primay h-screen w-screen flex justify-center items-center flex-col">
      <Heading
        color='text-customGrey'
        content='Hi Frendly visitor 👋'
        as='h1'
      />
      <Heading
        color='text-customGrey'
        content='Thank you for visiting!'
        as='h2'
      />
    </div>
  );
}

export default Page;
