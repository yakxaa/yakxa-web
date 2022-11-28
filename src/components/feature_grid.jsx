import FeatureGridItem from "./feature_grid_item";

const features = [
	{
		heading: "Natural Voices",
		desc: "Feature description, this shiz be dope yo. "
	},
	{
		heading: "40+ Languages",
		desc: "Feature description, this shiz be dope yo. "
	},
	{
		heading: "Multispeaker Support",
		desc: "Feature description, this shiz be dope yo. "
	},
	{
		heading: "Blazing Fast",
		desc: "Feature description, this shiz be dope yo. "
	},
	{
		heading: "Lip Sync",
		desc: "Feature description, this shiz be dope yo. "
	},
]

function FeatureGrid(props) {
	return (
		<div className="grid grid-cols-2 gap-y-8 gap-x-8 md:gap-y-12 md:gap-x-14 ">
			{features.map((feature) => {
						return	<FeatureGridItem heading={feature.heading} desc={feature.desc} />
							
				
			})}
		</div>
	);
}

export default FeatureGrid;