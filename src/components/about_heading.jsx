import React from "react";

function AboutHeading(props) {
	return (
		<div className="text-left">
			<p className="font-bold text-xl">{props.top.toUpperCase()}</p>
			<p className="font-normal text-4xl">{props.bottom}</p>
		</div>
	);
}

export default AboutHeading;