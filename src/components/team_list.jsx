import TeamCard from "./team_card";
import { ReactComponent as FbLogo } from "../assets/facebook_logo.svg";


const teamMemberList = [
	{
		name : "Suryakant A.",
		description : "Founder and such",
		color : "A7F393",
		img : "src\\assets\\suryakant.png",
		social : [
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
		]
	},
	{
		name : "Deep G.",
		description : "Solves Megaminx",
		color : "FDA0B9",
		img : "src\\assets\\deep.png",
		social : [
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
		]
	},
	{
		name : "Swarup K.",
		description : "Basically, Awesome",
		color : "FFCF77",
		img : "src\\assets\\swarup.png",
		social : [
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
		]
	},
	{
		name : "Vineet R.",
		description : "Microsoft Engage",
		color : "E9BEF9",
		img : "src\\assets\\vineet.png",
		social : [
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
		]
	},{
		name : "Srishti C.",
		description : "Does Something",
		color : "9DDADB",
		img : "src\\assets\\srishti.png",
		social : [
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
			{
				link: "instagram.suryakant.dev",
				icon: <FbLogo height="20" /> ,
			},
		]
	},
]

function TeamList(props){
	return(
		
		<div className="ml-8 mr-4 mt-8 md:ml-20 md:mr-14 md:mt-12">
		<div className=" flex w-full overflow-x-auto gap-x-[75px] justify-start" id="teamList">
			
				{teamMemberList.map((member) => {
					return <TeamCard name={member.name} description={member.description} color={member.color} social={member.social} img={member.img}/>
				})}
			
			
		</div></div>
	);
}

export default TeamList;

//grid grid-cols-[repeat(5,12rem)]