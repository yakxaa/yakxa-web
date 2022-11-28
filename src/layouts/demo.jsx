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
		<div className="flex flex-row min-h-screen" >
			<div className="basis-1/2 p-8 md:p-20 text-left" id="demo">
				<p className="text-sm font-bold"> SELECT LANGUAGE</p>
				<select className="font-normal text-xl" name="languages" id="lang" onChange={(event) => {changeLangTo(event.target.value)
				console.log(lang)
				}}>
					{languages.map((lang) => {
          return <option value={lang}>{lang}</option>;
        })}
					
				</select>
				<div className="flex flex-row items-center">
					<p className="font-normal text-xl">Female</p>
					<Switch offColor="#000" onColor="#000"uncheckedIcon={false} checkedIcon={false} activeBoxShadow={null} height={24} width={50}
					 className="my-2 mx-4" checked={gender==="male"} onChange={(checked) => {changeGenderTo((checked)? "male" : "female")}} />
					<p className="font-normal text-xl">Male</p>
				</div>
				<div>
					<p className="text-sm font-bold">CHOOSE FROM OUR</p>
					<p className="font-normal text-xl">In-house Curated AI Voices</p>
				</div>
				
			</div>
			<iframe className="basis-1/2" src={links[lang][gender]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		</div>

	);
}

export default Demo;