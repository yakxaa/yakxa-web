function AboutStatsItem(props) {
  return (
    <div className='text-left text-sm md:text-md text-white basis-52 px-4'>
      <p className=''>{props.top}</p>

      <p className='text-4xl md:text-6xl'>{props.bottom}</p>
    </div>
  );
}

export default AboutStatsItem;
