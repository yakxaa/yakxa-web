function AboutStats(props){
	return (
		<div className="flex flex-row w-full bg-black py-8 my-8 md:px-20 md:py-12 justify-evenly md:my-20">
			{props.children}
		</div>
	);
}

export default AboutStats;