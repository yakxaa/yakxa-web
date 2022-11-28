import Navbar from "./navbar";

const Landing = () => {
	return (
		<div className="min-h-screen flex flex-col justify-between ">

			<Navbar />
			<div >
				<p className="font-semibold text-5xl">Go Global</p>
				<p className="text-4xl font-medium">with your content!</p>
				<button  className="bg-black text-white py-2 px-4 my-8 rounded-none" onClick={() => {window.location.replace("#demo")}}>Get Demo</button>
			</div>
			<img src="src\assets\landing.png" className="w-full h-40 object-cover" />
		</div>
	);
}

export default Landing;