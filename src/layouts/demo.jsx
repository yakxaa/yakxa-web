import { useState } from "react";
import Switch from "react-switch";

const DemoControls = (props) => {
  return (
    <div className='bg-[#272A30] py-2 px-2 mb-3 md:py-3 md:px-3'>
      <p className='font-semibold text-sm md:text-md text-white'>
        {props.controlName}
      </p>
      <select
        className='block w-full py-2 text-white text-md bg-[#272A30] hover:cursor-pointer'
        name={props.name}
        id={props.id}
        onChange={props.onChange}>
        {props.items}
      </select>
    </div>
  );
};

const languages = ["Punjabi", "Tamil", "English", "Hindi"];
const voice = ["Female", "Male"];
const categories = ["Interview", "Voice Over", "Speech", "Animation"];

const links = {
  Punjabi: {
    Male: "https://www.youtube.com/embed/eBGIQ7ZuuiU",
    Female: "https://www.youtube.com/embed/4NRXx6U8ABQ",
  },

  Tamil: {
    Male: "https://www.youtube.com/embed/4NRXx6U8ABQ",
    Female: "https://www.youtube.com/embed/eBGIQ7ZuuiU",
  },
  English: {
    Male: "https://www.youtube.com/embed/nntGTK2Fhb0",
    Female: "https://www.youtube.com/embed/UqyT8IEBkvY",
  },
  Hindi: {
    Male: "https://www.youtube.com/embed/nntGTK2Fhb0",
    Female: "https://www.youtube.com/embed/UqyT8IEBkvY",
  },
};

const Demo = (props) => {
  const [lang, changeLangTo] = useState(languages[0]);
  const [gender, changeGenderTo] = useState(voice[0]);
  const [category, changeCategoryTo] = useState(categories[0]);
  return (
    <div className='bg-black' id='demo'>
      <div className="bg-[url('/assets/demo-bg.png')] bg-cover">
        <div className='py-10 px-8 md:py-20 md:px-20 bg-gradient-to-tr from-black to-transparent'>
          <p className='text-3xl md:text-5xl font-medium text-white'>
            Try it yourself!
          </p>
          <p className='mt-1 mb-5 md:py-4 md:text-2xl text-white text-md'>
            Select the desired settings and hit play
          </p>
          <div className='flex flex-col-reverse justify-between md:flex-row md:items-center'>
            <div className='basis:1/2 md:basis-1/3 m-8 text-left'>
              <DemoControls
                id='lang'
                name='languages'
                onChange={(event) => {
                  changeLangTo(event.target.value);
                  console.log(lang);
                }}
                items={languages.map((lang) => {
                  return <option value={lang}>{lang}</option>;
                })}
                controlName='SELECT LANGUAGE'
              />
              <DemoControls
                id='voice'
                name='voiceGender'
                onChange={(event) => {
                  changeGenderTo(event.target.value);
                  console.log(gender);
                }}
                items={voice.map((voice) => {
                  return <option value={voice}>{voice}</option>;
                })}
                controlName='CHOOSE VOICE'
              />
              <DemoControls
                id='category'
                name='videoCategory'
                onChange={(event) => {
                  changeCategoryTo(event.target.value);
                  console.log(category);
                }}
                items={categories.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
                controlName='CHOOSE VIDEO CATEGORY'
              />
            </div>
            <iframe
              className='aspect-video m-8 basis:1/2 md:aspect-video md:basis-2/3'
              src={links[lang][gender]}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen>
              {" "}
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
