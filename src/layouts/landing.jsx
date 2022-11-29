import Navbar from "./navbar";

const Landing = () => {
	return (
		<div className="min-h-screen flex flex-col justify-between ">

			<Navbar />
			<div >
				<p className="font-semibold text-6xl">Go Global</p>
				<p className="text-5xl font-medium">with your content!</p>
				<button  className="bg-black text-white py-2 px-4 my-8 rounded-none" onClick={() => {window.location.replace("#demo")}}>Get Demo</button>
			</div>
			<img src="assets\landing.png" className="w-full h-52 object-cover" />
		</div>
	);
}

export default Landing;