import TeamCard from "./team_card";

function TeamList(props){
	return(
		<div className="grid grid-cols-5 gap-x-20 w-full overflow-x-auto px-20">
			
				<TeamCard/>
			
			<TeamCard/>
			<TeamCard/>
			<TeamCard/>
			
				<TeamCard/>
			
			
		</div>
	);
}

export default TeamList;