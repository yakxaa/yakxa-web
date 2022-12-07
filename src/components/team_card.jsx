import RoundButton from "./round_button_array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function TeamImage(props) {
  return (
    <div className='w-full h-40 relative'>
      <img src={props.img} className='absolute h-full left-5 z-10' />
      <div
        className={
          "w-full h-1/2 absolute bottom-0 left-0 z-0 " + `bg-[#${props.color}]`
        }></div>
    </div>
  );
}

function TeamCard(props) {
  return (
    <div className='flex flex-col items-start min-w-[190px] m-auto'>
      <TeamImage color={props.member.color} img={props.member.img} />

      <p className='text-left font-semibold text-2xl'>{props.member.name}</p>
      <p>{props.member.description}</p>
      <p className='my-2'></p>
      <RoundButton
        roundButtonList={[
          {
            link: props.member.instagram,
            icon: <FontAwesomeIcon icon={faInstagram} color='#fff' />,
          },
          {
            link: props.member.twitter,
            icon: <FontAwesomeIcon icon={faTwitter} color='#fff' />,
          },
          {
            link: props.member.linkedin,
            icon: <FontAwesomeIcon icon={faLinkedin} color='#fff' />,
          },
        ]}
      />
    </div>
  );
}

export default TeamCard;
