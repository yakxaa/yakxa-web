import Logo from "../components/logo";
import PageLinks from "../components/page_links_list";

const Navbar = () => {
	return (
		<div className="flex flex-row justify-between my-8">
			<Logo />
			<PageLinks />

		</div>
	);
}

export default Navbar;