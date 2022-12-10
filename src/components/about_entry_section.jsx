function AboutEntrySection(props) {
  return (
    <div className='flex flex-row justify-center md:justify-between py-10 px-8 md:px-20 w-full items-end'>
      <p className='leading-snug md:leading-snug text-center md:text-left md:basis-1/3 md:text-5xl text-4xl font-medium'>
        Building bridges between{" "}
        <span className='text-gray-500'>videos and viewers</span>
      </p>
      <div className='max-md:hidden text-left basis-1/2'>
        <p className='font-semibold'>
          “The limits of my language mean the limits of my world.”
        </p>
        <p>
          At Yakxa, we aim to create a world without the limits of linguistic
          barriers. Our AI backed dubbing methodologies and real time
          translation pipelines help us create a seamless user experience.
        </p>
      </div>
    </div>
  );
}

export default AboutEntrySection;
