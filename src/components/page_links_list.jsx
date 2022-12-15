import {scroller} from "react-scroll";

var PageLinksList = [
  {
    name: "Home",
    link: "about",
  },
  {
    name: "About Us",
    link: "about",
  },
  {
    name: "Team",
    link: "team",
  },
  {
    name: "Contact Us",
    link: "contact",
  },
];

const PageLinks = (props) => {
  return (
    <div className={"flex flex-row max-md:justify-around " + props.className}>
      {PageLinksList.map((pageLink) => {
        return (
          <a
            className='text-md sm:text-2xl text-black sm:px-4 hover:text-black hover:cursor-pointer'
            
            onClick={() => {
              scroller.scrollTo(pageLink.link , {duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'})
            }}>
            <span className='link link-underline link-underline-black'>
              {pageLink.name}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default PageLinks;
