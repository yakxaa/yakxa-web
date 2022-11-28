
const RoundButton = (props) => {
	return (
		<div className={"flex flex-row" + props.className}>
			{ props.roundButtonList.map((item) => {
				return <div className="rounded-full bg-black w-[30px] h-[30px] mr-2 mt-2 " onClick={() => window.open(item.link)}>{item.icon}</div>
			})}
		</div>
	);
}

export default RoundButton;