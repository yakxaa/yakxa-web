import Hamburger from "../components/hamburger";
import Logo from "../components/logo";
import PageLinks from "../components/page_links_list";

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between my-4 mx-8 md:my-8 md:mx-20">
			<Logo />
			<div className="max-md:hidden">
			<PageLinks />
			</div>
			<div className="md:hidden">
			<Hamburger />
			</div>
		</div>
	);
}

export default Navbar;