import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

function Newsletter(props) {
  const submit = async (event) => {
    const baseUrl = import.meta.env.VITE_BE_BASE_URL;

    try {
      event.preventDefault();
      const val = event.target.news_email.value;
      if (val === "") {
        toast("Please enter a email");
      } else {
        const responses = await axios.post(
          baseUrl + "newsletter/user",
          { email: val },
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        );

        if (responses.status === 201) toast("Subscribed Successfully");
        else toast("Error occured");
      }
    } catch (error) {
      if (error.response.status == 403) toast("Already subscribed");
      else {
        console.log(error);
        toast("An error occured");
      }
    }
  };

  const [isButtonDisabled , changeButtonDiabilityTo] = useState(false);


  return (
    <div className='bg-[#A7F393] py-3 px-8 md:px-20 flex max-md:flex-col md:flex-row md:justify-between md:items-center w-full h-full right-0'>
      <div className='text-left mr-5 md:py-10 flex flex-col justify-center max-md:pt-4'>
        <p className='text-4xl md:text-5xl font-semibold pb-2'>Newsletter</p>
        <p>Want to know what we're upto?</p>
        <p>Sign up for the newsletter to stay updated!</p>
      </div>

      <form
        onSubmit={async (values) =>  {
          changeButtonDiabilityTo(true);
          await submit(values);
          console.log("yes")
          changeButtonDiabilityTo(false);
        }}
        className='md:basis-3/5 flex flex-row justify-end pt-4 pb-4 md:pl-2'>
        <input
          type='text'
          placeholder='Enter your email'
          className='border-2 border-black p-2 w-full focus:outline-0'
          id='news_email'
        />
        <input
          disabled={isButtonDisabled}
          type='submit'
          value='Subscribe'
          className='bg-black border-2 border-black text-white py-2 px-4 hover:bg-white hover:text-black hover:cursor-pointer ease-linear duration-100 hover:scale-105'
        />
      </form>
    </div>
  );
}

export default Newsletter;
