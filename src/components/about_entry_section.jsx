function AboutEntrySection(props) {
  return (
    <div className='flex flex-row justify-center md:justify-between py-10 px-8 md:px-20 w-full items-end'>
      <p className='text-center md:text-left md:basis-1/3 md:text-5xl text-4xl font-medium'>
        We build bridges between{" "}
        <span className='text-gray-500'>videos and viewers</span>
      </p>
      <div className='max-md:hidden text-left basis-1/2'>
        <p>
          Yakxa is a one-stop solution for making your content truly global and
          available with our smart and AI backed dubbing methodologies that
          transcribes translates as well as add narration with care to your
          content
        </p>
      </div>
    </div>
  );
}

export default AboutEntrySection;
