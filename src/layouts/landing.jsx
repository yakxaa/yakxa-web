import Navbar from "./navbar";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {scroller} from "react-scroll";

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between ' id="landing">
      <Navbar />
      <div>
        <p className='md:mb-2 text-4xl font-semibold md:text-6xl'>Go Global</p>
        <p className='text-3xl md:text-5xl font-normal'>with AI dubbing!</p>
        <button
          className='bg-black border-2 border-black text-white py-2 px-4 my-8 rounded-none hover:border-black hover:cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all ease-linear duration-300 '
          onClick={() => {
            // window.location.replace("#demo");
            scroller.scrollTo("demo" , {duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'})
          }}>
          Get Demo
        </button>
      </div>
      <LazyLoadImage
        src='assets\landing.png'
        className='w-full h-52 object-cover'
        placeholderSrc='assets\landing_ph.jpg'
        effect='blur'
      />
    </div>
  );
};

export default Landing;
