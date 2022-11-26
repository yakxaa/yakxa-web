import RoundButton from "./round_button_array";

function TeamImage(props){
	return (
			<div className="w-full h-40 relative">
				<img src={props.img} className="absolute h-full z-10"/>
				<div className={"w-full h-1/2 absolute bottom-0 left-0 z-0 " + `bg-[#${props.color}]`}></div>

			</div>
	)
}

function TeamCard(props){
	return (
		<div className="flex flex-col items-start w-48">
			<TeamImage color={props.color} img={props.img}/>
		
			<p className="text-left font-semibold text-2xl">{props.name}</p>
			<p>{props.description}</p>
			<RoundButton roundButtonList={props.social} />
			
		</div>
		
	);
}

export default TeamCard;
