import FeatureGridItem from "./feature_grid_item";

const features = [
	{
		heading: "Natural Voices",
		desc: "Nobody would be able to tell the difference"
	},
	{
		heading: "40+ Languages",
		desc: "There is something for everyone"
	},
	{
		heading: "Multispeaker Support",
		desc: "Cut the clutter"
	},
	{
		heading: "Blazing Fast",
		desc: "So that you’re always on time"
	},
	{
		heading: "Lip Sync",
		desc: "Lips can make a difference ;)"
	},
	{
		heading: "Minimal Difference",
		desc: "Your content. Just as you intended"
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