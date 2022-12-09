import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const email = "contact@yakxa.in";
const mobile = "7828369492";

function InputField(props) {
  return (
    <div className='flex flex-col items-start max-md:py-4'>
      <label htmlFor={props.id} className='font-semibold mb-2'>
        {props.label.toUpperCase()}
      </label>
      <Field
        type={props.type}
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className={` border-b-2 focus:outline-0 w-full focus:border-b-2 focus:border-black leading-6 ${
          props.err ? "border-red-400" : ""
        }`}
      />

      <div className={props.err ? "text-red-400 text-xs" : "hidden"}>
        <ErrorMessage name={props.id} component='span' />
      </div>

      {/* <input
        type="text"
        className="text-xs border-b-2 focus:outline-0 w-full focus:border-b-2 focus:border-black leading-6"
        placeholder={props.placeholder}
        id={props.id}
      ></input> */}
    </div>
  );
}

const contactUsSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Too short - Minimum 3 characters")
    .max(25, "Too large - Maximum 25 characters")
    .required("First Name is required"),
  last_name: Yup.string()
    .min(3, "Too short - Minimum 3 characters")
    .max(25, "Too large - Maximum 25 characters")
    .required("Last Name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("email is required"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
      "Enter a valid phone Number"
    )
    .required("Enter a phone no."),
  organization_name: Yup.string()
    .min(3, "Too short - Minimum 3 characters")
    .max(50, "Too large - Maximum 50 characters")
    .required("Organisation is required"),
  message: Yup.string()
    .max(1000, "Too large - Maximum 1000 characters")
    .nullable(),
  video_link: Yup.string().url("Enter a valid URL").nullable(),
  newsletter: Yup.boolean(),
});

const ContactForm = (props) => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization_name: "",
    message: "",
    video_link: "",
    newsletter: true,
  };

  const submitForm = async (values) => {
    const baseUrl = import.meta.env.VITE_BE_BASE_URL;

    const {
      first_name,
      last_name,
      email,
      organization_name,
      message,
      video_link,
      phone,
    } = values;

    try {
      var prom = [
        axios.post(
          baseUrl + "lead",
          {
            first_name,
            last_name,
            email,
            organization_name,
            message,
            video_link,
            phone,
          },
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
          }
        ),
      ];

      if (values.newsletter)
        prom.push(
          axios.post(
            baseUrl + "newsletter/user",
            { email: values.email },
            {
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
            }
          )
        );

      const responses = await Promise.all(prom);

      if (
        responses[0].status === 201 &&
        (responses[1] ? responses[1].status === 200 : true)
      )
        toast("Submitted Successfully");
      else toast("Error occured");
    } catch (error) {
      console.log(error);
      toast("An error occured");
    }
  };
  return (
    <div className='md:basis-1/2 bg-white px-6 py-8 mt-5 md:mt-0 md:p-12'>
      <Formik
        initialValues={initialValues}
        validationSchema={contactUsSchema}
        onSubmit={submitForm}>
        {(formik) => {
          const { handleChange, values, errors, touched, isValid, dirty } =
            formik;
          return (
            <Form>
              <div className=' md:grid grid-cols-2 grid-rows-auto gap-y-4 gap-x-8'>
                <p className='text-left font-medium text-2xl col-start-1 col-end-3'>
                  Contact Us
                </p>
                <InputField
                  id='first_name'
                  label='First Name *'
                  placeholder='Enter your first name'
                  err={errors && errors.first_name && touched.first_name}
                />
                <InputField
                  id='last_name'
                  label='Last Name *'
                  placeholder='Enter your last name'
                  err={errors && errors.last_name && touched.last_name}
                />

                <InputField
                  id='email'
                  label='Email *'
                  placeholder='Enter your email'
                  err={errors && errors.email && touched.email}
                />
                <InputField
                  id='phone'
                  label='Phone no *'
                  placeholder='Enter your phone no'
                  err={errors && errors.phone && touched.phone}
                />
                <div className='col-start-1 col-end-3'>
                  <InputField
                    id='organization_name'
                    label='organization *'
                    placeholder='Enter your organization name'
                    err={
                      errors &&
                      errors.organization_name &&
                      touched.organization_name
                    }
                  />
                </div>

                <div className='col-start-1 col-end-3'>
                  <InputField
                    id='message'
                    label='message'
                    placeholder='Enter a message'
                    err={errors && errors.message && touched.message}
                  />
                </div>
                <div className='col-start-1 col-end-3'>
                  <InputField
                    id='video_link'
                    label='Video Link'
                    placeholder='Give us a video to dub'
                    err={
                      errors &&
                      errors.video_link &&
                      touched.video_link &&
                      touched.video_link
                    }
                  />
                </div>
                <div className='col-start-1 col-end-3 flex flex-rows justify-start items-center max-md:py-4'>
                  <input
                    type='checkbox'
                    value='newsletter'
                    id='newsletter'
                    className='text-red-600'
                    defaultChecked={values.newsletter}
                    onChange={handleChange}
                  />
                  <label htmlFor='newsletter' className=' font-medium ml-2'>
                    Subscribe to our Newsletter
                  </label>
                </div>
                <div className='col-start-1 col-end-3'>
                  <input
                    type='submit'
                    value='Submit'
                    className='bg-black border-2 border-black text-white py-2 px-4 hover:bg-transparent hover:text-black hover:cursor-pointer ease-linear duration-100 hover:scale-105'
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

//copy to clipboard
function copy(text) {
  navigator.clipboard.writeText(text);
}

const bannerImg = "src/assets/contact-us.png";

function Contact(props) {
  return (
    <div className="bg-black bg-[url('/assets/demo-bg.png')] bg-cover">
      <div
        className='px-8 md:px-20 py-8 md:py-20 w-full flex flex-col lg:flex-row  bg-gradient-to-tr from-black to-transparent'
        id='contact'>
        <ToastContainer />
        <div className='md:basis-1/2 lg:mr-20 justify-between'>
          <div>
            <img src={bannerImg} className='bottom-0'></img>
            <p className='text-white text-left text-3xl md:text-5xl pt-8 md:pr-20 font-medium leading-[50px]'>
              We'd love to hear from you!
            </p>
            <p className='text-white text-sm md:text-md text-left pt-4'>
              Whether you have a question about features, trials, pricing, need
              a demo, or anything else, our team is ready to answer all your
              questions.
            </p>
          </div>
          <div className='md:basis-1/2 flex flex-row lg:flex-col justify-between my-5'>
            <div className='mt-5'>
              <p className='text-white text-left font-semibold'>EMAIL US AT</p>
              <p className='text-left font-normal underline'>
                <address>
                  <a
                    id='yakxaMail'
                    href={`mailto: ${email}`}
                    className='text-white hover:text-pink-300'>
                    <span onClick={() => copy(email)}>{email}</span>
                  </a>
                </address>
              </p>
            </div>
            <div className='mt-5'>
              <p className='text-white text-left font-semibold'>CALL US AT</p>
              <p className='text-left font-normal underline'>
                <a className='text-white hover:cursor-pointer hover:text-pink-300'>
                  <span onClick={() => copy(mobile)}>{mobile}</span>
                </a>
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
