function AboutStats(props){
	return (
		<div className="bg-black bg-[url('/assets/demo-bg.png')] bg-cover my-8 md:my-20">
		<div className="flex flex-row w-full  py-8 md:px-20 md:py-12 justify-evenly  bg-gradient-to-tr from-black to-transparent ">
			{props.children}
		</div>
		</div>
	);
}

export default AboutStats;