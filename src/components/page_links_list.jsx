
var PageLinksList = [
	{
		name:"Home",
		link:"#about"
	},
	{
		name:"About Us",
		link:"#about"
	},
	{
		name:"Team",
		link:"#team"
	},
	{
		name:"Contact Us",
		link:"#contact"
	},
]

const PageLinks = (props) => {
	return (
		<div className={"flex flex-row max-md:justify-around " + props.className}>
			{ PageLinksList.map((pageLink) => {
				return <a className="md:text-xl text-black md:pl-8 hover:text-black hover:underline  hover:cursor-pointer" href={pageLink.link}>{pageLink.name}</a>
			})}
		</div>
	);
}

export default PageLinks;