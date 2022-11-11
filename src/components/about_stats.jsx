function AboutStats(props){
	return (
		<div className="flex flex-row w-full bg-black px-20 py-12 justify-evenly my-20">
			{props.children}
		</div>
	);
}

export default AboutStats;