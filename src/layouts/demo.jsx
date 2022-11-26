import { useState } from "react";

const languages = [
 "Punjabi",

 "Tamil",
	
"English",
	
	"Hindi",
	
]

const links = {
	Punjabi : "https://www.youtube.com/embed/eBGIQ7ZuuiU",
	Tamil : "https://www.youtube.com/embed/4NRXx6U8ABQ",
	English : "https://www.youtube.com/embed/UqyT8IEBkvY",
	Hindi : "https://www.youtube.com/embed/nntGTK2Fhb0",
}

const Demo = (props) => {
	
	const [lang , changeLangTo] = useState(languages[0])

	return (
		<div className="flex flex-row min-h-screen" >
			<div className="basis-1/2 p-20 text-left" id="demo">
				<p className="text-sm font-bold"> SELECT LANGUAGE</p>
				<select name="languages" id="lang" onChange={(event) => {changeLangTo(event.target.value)
				console.log(lang)
				}}>
					{languages.map((lang) => {
          return <option value={lang}>{lang}</option>;
        })}
					{/* <option value="Punjabi"> Punjabi</option>
					<option value="Tamil"> Tamil</option>
					<option value="Hindi"> Hindi</option>
					<option value="English"> English</option> */}
				</select>

			</div>
			<iframe className="basis-1/2" src={links[lang]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

		</div>

	);
}

export default Demo;