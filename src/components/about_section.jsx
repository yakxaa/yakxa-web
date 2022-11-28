
import AboutHeading from "./about_heading";

function AboutSection(props) {
	return (
		<div className="flex flex-col max-md:items-center md:flex-row md:justify-between px-8 md:px-20 w-full">
			<AboutHeading top={props.headingTop} bottom={props.headingBottom}></AboutHeading>
			<div className="text-left basis-1/2">{props.children}</div>
			
		</div>
	);
}

export default AboutSection;