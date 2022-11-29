import TeamCard from "./team_card";
import { ReactComponent as FbLogo } from "../assets/facebook_logo.svg";


const teamMemberList = [
	{
		name : "Suryakant A.",
		description : "Founder and such",
		color : "A7F393",
		img : "assets/suryakant.png",
		instagram : "https:\\\\instagram.suryakant.dev",
		twitter : "https:\\\\instagram.suryakant.dev",
		linkedin : "https:\\\\instagram.suryakant.dev",
	},
	{
		name : "Deep G.",
		description : "Solves Megaminx",
		color : "FDA0B9",
		img : "assets/deep.png",
		instagram : "https:\\\\instagram.suryakant.dev",
		twitter : "https:\\\\instagram.suryakant.dev",
		linkedin : "https:\\\\instagram.suryakant.dev",
	},
	{
		name : "Swarup K.",
		description : "Basically, Awesome",
		color : "FFCF77",
		img : "assets/swarup.png",
		instagram : "https:\\\\instagram.suryakant.dev",
		twitter : "https:\\\\instagram.suryakant.dev",
		linkedin : "https:\\\\instagram.suryakant.dev",
	},
	{
		name : "Vineet R.",
		description : "Microsoft Engage",
		color : "E9BEF9",
		img : "assets/vineet.png",
		instagram : "https:\\\\instagram.suryakant.dev",
		twitter : "https:\\\\instagram.suryakant.dev",
		linkedin : "https:\\\\instagram.suryakant.dev",
	},{
		name : "Srishti C.",
		description : "Does Something",
		color : "9DDADB",
		img : "assets/srishti.png",
		instagram : "https:\\\\instagram.suryakant.dev",
		twitter : "https:\\\\instagram.suryakant.dev",
		linkedin : "https:\\\\instagram.suryakant.dev",
	},
]

function TeamList(props){
	return(
		
		<div className="ml-8 mr-4 mt-8 md:ml-20 md:mr-14 md:mt-12">
		<div className=" flex w-full overflow-x-auto gap-x-[75px] justify-start" id="teamList">
			
				{teamMemberList.map((member) => {
					return <TeamCard member={member}/>
				})}
			
			
		</div></div>
	);
}

export default TeamList;

//grid grid-cols-[repeat(5,12rem)]