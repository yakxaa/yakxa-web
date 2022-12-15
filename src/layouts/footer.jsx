import Logo from "../components/logo";
import PageLinks from "../components/page_links_list";
import RoundButton from "../components/round_button_array";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const roundButtonList = [
  {
    icon: <FontAwesomeIcon icon={faYoutube} color='#fff' />,
    link: "https://www.youtube.com/@yakxa3330",
  },
  {
    icon: <FontAwesomeIcon icon={faTwitter} color='#fff' />,
    link: "https://twitter.com/dubWithYakxa",
  },
  {
    icon: <FontAwesomeIcon icon={faInstagram} color='#fff' />,
    link: "https://www.instagram.com/yakxa.in/",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} color='#fff' />,
    link: "https://www.linkedin.com/company/yakxa/",
  },
];

const Footer = (props) => {
  return (
    <div className='flex flex-col md:flex-row px-8 py-8 md:px-20 md:py-12 justify-between md:items-center'>
      <div className='max-md:mb-8'>
        <Logo />
      </div>
      <PageLinks />
      <div className='max-md:mt-8 max-md:self-center'>
        <p className='text-center md:text-left font-bold'>FOLLOW US</p>
        <RoundButton roundButtonList={roundButtonList} />
      </div>
    </div>
  );
};

export default Footer;
