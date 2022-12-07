import AboutHeading from "../components/about_heading";
import TeamCard from "../components/team_card";
import TeamList from "../components/team_list";

function Team(props) {
  return (
    <div className='my-16 md:my-20 flex flex-col ' id='team'>
      <div className='self-center'>
        <AboutHeading top='meet' bottom='The Team' />
      </div>
      <TeamList />
    </div>
  );
}

export default Team;
