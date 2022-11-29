import { useState } from "react";
import Switch from "react-switch";

const languages = [
 "Punjabi",

 "Tamil",
	
"English",
	
	"Hindi",
	
]

const links = {
	Punjabi : {
		male:"https://www.youtube.com/embed/eBGIQ7ZuuiU",
		female:"https://www.youtube.com/embed/4NRXx6U8ABQ"
	},
	
	
	
	Tamil :  {
		male:"https://www.youtube.com/embed/4NRXx6U8ABQ",
		female:"https://www.youtube.com/embed/eBGIQ7ZuuiU"
	},
	English :  {
		male: "https://www.youtube.com/embed/nntGTK2Fhb0",
		female:"https://www.youtube.com/embed/UqyT8IEBkvY"
	},
	Hindi :  {
		male: "https://www.youtube.com/embed/nntGTK2Fhb0",
		female:"https://www.youtube.com/embed/UqyT8IEBkvY"
	},
}

const Demo = (props) => {
	
	const [lang , changeLangTo] = useState(languages[0])
	const [gender, changeGenderTo] = useState("female")

	return (
		<div className="flex flex-col-reverse justify-between md:flex-row h-screen" id="demo" >
			<div className="md:basis-1/2 p-8 md:p-20 text-left" >
				<p className=" font-bold"> SELECT LANGUAGE</p>
				<select className="font-normal text-xl" name="languages" id="lang" onChange={(event) => {changeLangTo(event.target.value)
				console.log(lang)
				}}>
					{languages.map((lang) => {
          return <option value={lang}>{lang}</option>;
        })}
					
				</select>
				<div className="flex flex-row items-center">
					<p className="font-normal text-2xl">Female</p>
					<Switch offColor="#000" onColor="#000"uncheckedIcon={false} checkedIcon={false} activeBoxShadow={null} height={24} width={50}
					 className="my-2 mx-4" checked={gender==="male"} onChange={(checked) => {changeGenderTo((checked)? "male" : "female")}} />
					<p className="font-normal text-2xl">Male</p>
				</div>
				<div className="max-md:hidden">
					<p className=" font-bold">CHOOSE FROM OUR</p>
					<p className="font-normal text-2xl">In-house Curated AI Voices</p>
				</div>
				
			</div>
			<iframe className="max-md:px-8 basis-1/2" src={links[lang][gender]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			<div className="md:hidden">
				<p className="font-medium text-2xl mt-8">Try it yourself!</p>
				<p className="text-sm">Select the desired settings and hit play</p>
			</div>
		</div>

	);
}

export default Demo;