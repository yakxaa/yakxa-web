function TeamImage(props){
	return (
			<div className="w-full h-52 relative">
				<img src="src\assets\deep.png" className="absolute h-full z-10"/>
				<div className="w-full h-1/2 absolute bg-slate-600 bottom-0 left-0 z-0"></div>

			</div>
	)
}

function TeamCard(props){
	return (
		<div className="flex flex-col items-start w-52">
			<TeamImage />
		
			<p className="text-left font-semibold text-2xl">Deep G.</p>
			<p>Solves Megaminx</p>
			
		</div>
		
	);
}

export default TeamCard;
