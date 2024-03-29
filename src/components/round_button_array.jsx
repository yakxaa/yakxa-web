const RoundButton = (props) => {
  return (
    <div className={"flex flex-row" + props.className}>
      {props.roundButtonList.map((item) => {
        return (
          <div
            className='rounded-full bg-black w-[30px] h-[30px] mr-3 mt-2 flex justify-center items-center hover:cursor-pointer hover:scale-110 transition-all duration-200 ease-linear'
            onClick={() => window.open(item.link)}>
            {item.icon}
          </div>
        );
      })}
    </div>
  );
};

export default RoundButton;
