import Logo from "../components/logo";
import PageLinks from "../components/page_links_list"
import RoundButton from "../components/round_button_array";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const roundButtonList = [
	{
		icon : <FontAwesomeIcon icon={faFacebookF} color="#fff"/>,
		link : "http://www.facebook.com"
	},
	{
		icon : <FontAwesomeIcon icon={faTwitter} color="#fff"/>,
		link : "www.facebook.com"
	},
	{
		icon :<FontAwesomeIcon icon={faInstagram} color="#fff"/>,
		link : "www.facebook.com"
	},
	{
		icon :<FontAwesomeIcon icon={faYoutube} color="#fff"/>,
		link : "www.facebook.com"
	},
]

const Footer = (props) => {
	return(
		<div className="flex flex-col md:flex-row p-4 md:px-20 md:py-12 justify-between md:items-center">
			<div className="max-md:mb-8">
			<Logo />
			</div>
			<PageLinks />
			<div className="max-md:mt-8 max-md:self-center">
				<p className="text-center md:text-left font-bold">FOLLOW US</p>
				<RoundButton roundButtonList={roundButtonList}/>
			</div>
			
		</div>
	)
}

export default Footer;