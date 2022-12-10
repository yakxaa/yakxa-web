function AboutStatsItem(props) {
  return (
    <div className='flex flex-row-reverse my-5  sm:flex-col text-left text-sm md:text-md text-white basis-16 sm:basis-52 px-2'>
      <p className='mb-4 sm:text-sm'>{props.top}</p>

      <p className='mr-2 text-4xl md:text-6xl'>{props.bottom}</p>
    </div>
  );
}

export default AboutStatsItem;
