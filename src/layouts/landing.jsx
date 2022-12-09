import Navbar from "./navbar";

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between '>
      <Navbar />
      <div>
        <p className='font-semibold text-6xl'>Go Global</p>
        <p className='text-5xl font-medium'>with AI dubbing!</p>
        <button
          className='bg-black border-2 border-black text-white py-2 px-4 my-8 rounded-none hover:border-black hover:cursor-pointer hover:bg-white hover:text-black hover:scale-110 transition-all ease-linear duration-300 '
          onClick={() => {
            window.location.replace("#demo");
          }}>
          Get Demo
        </button>
      </div>
      <img src='assets\landing.png' className='w-full h-52 object-cover' />
    </div>
  );
};

export default Landing;
