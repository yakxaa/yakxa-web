function InputField(props) {
  return (
    <div className="flex flex-col items-start">
      <label for={props.id} className="font-semibold text-xs mb-1">
        {props.label.toUpperCase()}
      </label>
      <input
        type="text"
        className="text-xs border-b-2 focus:outline-0 w-full focus:border-b-2 focus:border-black leading-6"
        placeholder={props.placeholder}
        id={props.id}
      ></input>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="bg-black w-full min-h-screen  flex flex-row">
      <div className="basis-1/2 pl-20 pt-12">
        <div className="w-full h-20 bg-[#FDA0B9]">
          <p>Todo: Add Image</p>
        </div>
        <p className="text-white text-left text-4xl pt-8 pr-20 font-medium leading-[50px]">
          We'd love to hear from you!
        </p>
        <p className="text-white text-sm text-left pt-2">
          Whether you have a question about features, trials, pricing, need a
          demo, or anything else, our team is ready to answer all your
          questions.
        </p>
      </div>
      <div className="basis-1/2 bg-white m-12 p-12 grid grid-cols-2 grid-rows-[repeat(8,_minmax(0,_1fr))] gap-y-4 gap-x-8">
        <p className="text-left font-medium text-xl col-start-1 col-end-3">
          Contact Us
        </p>
        <InputField
          id="firstName"
          label="First Name *"
          placeholder="Enter your first name"
        />
        <InputField
          id="lastName"
          label="Last Name *"
          placeholder="Enter your last name"
        />
        <InputField id="email" label="Email *" placeholder="Enter your email" />
        <InputField
          id="phone"
          label="Phone no *"
          placeholder="Enter your phone no"
        />
        <div className="col-start-1 col-end-3">
          <InputField
            id="org"
            label="organization *"
            placeholder="Enter your organization name"
          />
        </div>

        <div className="col-start-1 col-end-3">
          <InputField id="msg" label="message" placeholder="Enter a message" />
        </div>
        <div className="col-start-1 col-end-3">
          <InputField
            id="video"
            label="Video Link"
            placeholder="Give us a video to dub"
          />
        </div>
        <div className="col-start-1 col-end-3 flex flex-rows justify-start items-center">
          <input
            type="checkbox"
            value="newsletter"
            id="newsletter"
            className="text-red-600"
          />
          <label for="newsletter" className="text-xs font-medium ml-2">
            Subscribe to our Newsletter
          </label>
        </div>
        <div className="col-start-1 col-end-3">
          <input
            type="submit"
            value="Submit"
            className="bg-black text-white py-2 px-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
