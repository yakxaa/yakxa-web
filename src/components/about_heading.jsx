import React from "react";

function AboutHeading(props) {
	return (
		<div className="text-center max-md:pb-4 md:text-left">
			<p className="font-bold text-xl">{props.top.toUpperCase()}</p>
			<p className="font-normal text-4xl">{props.bottom}</p>
		</div>
	);
}

export default AboutHeading;