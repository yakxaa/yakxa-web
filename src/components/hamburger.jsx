import { slide as Menu } from "react-burger-menu";
import "./css/hamburger.css";

var PageLinksList = [
  {
    name: "Home",
    link: "#about",
  },
  {
    name: "About Us",
    link: "#about",
  },
  {
    name: "Team",
    link: "#team",
  },
  {
    name: "Contact Us",
    link: "#contact",
  },
];

const Hamburger = (props) => {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu right className='drop-shadow-lg'>
      {PageLinksList.map((pageLink) => {
        return (
          <a
            className='text-left font-normal text-1xl text-black pl-2 py-4 hover:text-black hover:cursor-pointer '
            href={pageLink.link}>
            <span class='link link-underline link-underline-black text-black'>
              {pageLink.name}
            </span>
          </a>
        );
      })}
    </Menu>
  );
};

export default Hamburger;
