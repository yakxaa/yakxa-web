import TeamCard from "./team_card";


const teamMemberList = [
  {
    name: "Suryakant A.",
    description: "Founder and such",
    color: "A7F393",
    img: "assets/suryakant.png",
    instagram: "https://www.instagram.com/suryakanttt_/",
    twitter: "https://twitter.com/pridevta",
    linkedin: "https://www.linkedin.com/in/suryakant-agrawal-7719191b8/",
  },
  {
    name: "Deep G.",
    description: "Solves Megaminx",
    color: "FDA0B9",
    img: "assets/deep.png",
    instagram: "https://www.instagram.com/deep_g7",
    twitter: "https://twitter.com/Deep17Gandhi",
    linkedin: "https://www.linkedin.com/in/deep-gandhi-574a19162/",
  },
  {
    name: "Swarup K.",
    description: "Basically, Awesome",
    color: "FFCF77",
    img: "assets/swarup.png",
    instagram: "https://instagram.com/swarup_kharul/",
    twitter: "https://twitter.com/SwarupKharul",
    linkedin: "https://www.linkedin.com/in/swarupkharul",
  },
  {
    name: "Vineet R.",
    description: "Microsoft Engage",
    color: "E9BEF9",
    img: "assets/vineet.png",
    instagram: "https://instagram.com/vinmik_",
    twitter: "https://twitter.com/Vinmik_",
    linkedin: "https://www.linkedin.com/in/vineet-raj-6a3317200",
  },
  {
    name: "Srishti C.",
    description: "The Force is with her",
    color: "9DDADB",
    img: "assets/srishti.png",
    instagram: "https://www.instagram.com/millieonacloud/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/srishti-chaurasia1806/",
  },
];

function TeamList(props) {
  return (
    <div className='overflow-x-scroll scrollbar scrollbar-thumb-slate-300 scrollbar-track-x-transparent scrollbar-width-x-2 pb-10 ml-8 mr-4 mt-8 md:ml-20 md:mr-14 md:mt-12'>
      <div className=' flex w-full  gap-x-[75px] justify-start' id='teamList'>
        {teamMemberList.map((member) => {
          return <TeamCard member={member} />;
        })}
      </div>
    </div>
  );
}

export default TeamList;

//grid grid-cols-[repeat(5,12rem)]
