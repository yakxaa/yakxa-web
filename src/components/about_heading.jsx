import React from "react";

function AboutHeading(props) {
	return (
		<div className="text-center max-md:pb-4 md:text-left ">
			<p className="font-bold md:text-2xl text-xl">{props.top.toUpperCase()}</p>
			<p className="font-normal md:text-5xl text-4xl">{props.bottom}</p>
		</div>
	);
}

export default AboutHeading;