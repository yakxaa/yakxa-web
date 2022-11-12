import AboutHeading from "../components/about_heading";
import TeamCard from "../components/team_card"
import TeamList from "../components/team_list";



function Team(props) {
	return (
		<div className="my-20 flex flex-col items-center">
			<AboutHeading top="meet" bottom="The Team"/>
			<TeamList/>		
			</div>
		
	);
}

export default Team;