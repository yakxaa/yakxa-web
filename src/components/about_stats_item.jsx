function AboutStatsItem(props){
	return (
		<div className="text-left text-white basis-52 px-4">
			<p className="">
				{props.top}
			</p>
			
			<p className="text-6xl">
				{props.bottom}
			</p>
		</div>
	);
}

export default AboutStatsItem;