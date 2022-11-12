function Newsletter(props){
	return(
		<div className="w-full h-32 overflow-hidden relative">
			<div className="w-[700px] h-screen bg-[#A7F393] -rotate-45 -translate-x-14 -translate-y-48 absolute z-0">
				<p>yes</p>
			</div>
			<div className="absolute z-10 flex flex-row justify-between mx-20 items-center w-full h-full">
				<div className="text-left flex flex-col justify-center">
					<p className="text-4xl font-semibold">Newsletter</p>
					<p>Want to know what we're upto?</p> 
					<p>Sign up for the newsletter to stay updated!</p>	

				</div>

				<div className="basis-3/5" flex flex-row justify-end>
					<input type="text" placeholder="Enter your email" className="border-2 border-black p-2 w-3/5"/>
					<input type="submit" value="Subscribe" className="bg-black text-white py-2 px-4 mr-20"/>

				</div>
			</div>
		</div>
	);

}


export default Newsletter;