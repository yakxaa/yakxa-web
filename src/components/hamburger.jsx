import { slide as Menu } from 'react-burger-menu'
import './css/hamburger.css'


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

const Hamburger =  (props) => {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
		
      <Menu right>
        { PageLinksList.map((pageLink) => {
				return <a className="text-left text-black pl-2 py-2 hover:text-black hover:underline hover:cursor-pointer" href={pageLink.link}>{pageLink.name}</a>
			})}
      </Menu>
    );
  }


export default Hamburger;