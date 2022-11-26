import Logo from "../components/logo";
import PageLinks from "../components/page_links_list"
import RoundButton from "../components/round_button_array";
import { ReactComponent as FbLogo } from "../assets/facebook_logo.svg";

const roundButtonList = [
	{
		icon : <FbLogo height="20"/>,
		link : "http://www.facebook.com"
	},
	{
		icon : <FbLogo height="20"/>,
		link : "www.facebook.com"
	},
	{
		icon :<FbLogo height="20"/>,
		link : "www.facebook.com"
	},
	{
		icon :<FbLogo height="20"/>,
		link : "www.facebook.com"
	},
]

const Footer = (props) => {
	return(
		<div className="flex flex-row px-20 py-12 justify-between items-center">
			<Logo />
			
			<PageLinks />
			<div>
				<p className="text-left font-bold">FOLLOW US</p>
				<RoundButton roundButtonList={roundButtonList}/>
			</div>
			
		</div>
	)
}

export default Footer;