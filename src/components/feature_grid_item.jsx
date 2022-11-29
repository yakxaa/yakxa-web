function FeatureGridItem(props) {
	return (
		<div>
			<p className="font-medium md:text-2xl text-xl">{props.heading}</p>
			<p>{props.desc}</p>
		</div>
	);
}

export default FeatureGridItem;