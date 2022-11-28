import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




function Newsletter(props){

	const submit = async (event) => {

		const baseUrl = "https://yaxka-backend.azurewebsites.net/"

		try {
      
			event.preventDefault()
			const val = event.target.news_email.value
			if(val === ""){
				toast("Please enter a email")
			} else {
				const responses = await axios.post(baseUrl + "newsletter/user", {email: val}, {
				headers: {
				  "Content-Type": "application/json; charset=utf-8"
				}
			  })

			  	if (responses[0].status === 200)
			  		toast("Subscribed Successfully")
				else
			  		toast("Error occured")
			}
	  
		  } catch (error) {
			if(error.response.status == 403)
				toast("Already subscribed")
			else{
				console.log(error)
				toast("An error occured")
			}
			
		  }
	}

	return(
		<div className="w-full h-48 md:h-32 overflow-hidden relative ">
			<div className="w-full md:w-3/5 h-full bg-[#A7F393] absolute z-0">
				{/* -rotate-[50deg] -translate-x-20 -translate-y-40 */}
				</div>
			<div className="max-md:hidden w-1/5 h-full bg-[#A7F393] -rotate-[30deg] left-1/2 absolute z-0"	></div>
			<div className="absolute z-10 flex max-md:flex-col md:flex-row md:justify-between md:items-center w-full h-full right-0">
				<div className="text-left flex flex-col justify-center px-4 md:pl-20 max-md:pt-4">
					<p className="text-4xl font-semibold">Newsletter</p>
					<p>Want to know what we're upto?</p> 
					<p>Sign up for the newsletter to stay updated!</p>	

				</div>
				
				<form onSubmit={submit} className="md:basis-3/5 flex flex-row justify-end px-4 pt-4 md:pr-20 md:pl-20 pb-4 md:pl-2">
					<input type="text" placeholder="Enter your email" className="border-2 border-black p-2 w-full focus:outline-0" id="news_email"/>
					<input type="submit" value="Subscribe" className="bg-black text-white py-2 px-4 "/>

			
				</form>
			</div>
		</div>
	);

}


export default Newsletter;