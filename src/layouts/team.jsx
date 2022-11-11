import AboutHeading from "../components/about_heading";
import TeamCard from "../components/team_card"



function Team(props) {
	return (
		<div className="my-20 flex flex-col items-center">
			<AboutHeading top="meet" bottom="The Team"/>
			
			<TeamCard/>
		</div>
		
	);
}

export default Team;