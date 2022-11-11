import FeatureGridItem from "./feature_grid_item";

function FeatureGrid(props) {
	return (
		<div className="grid grid-cols-2 gap-y-12 gap-x-14">
			<FeatureGridItem heading="Feature Heading" desc="Feature description, this shiz be dope yo. " />
			<FeatureGridItem heading="Feature Heading" desc="Feature description, this shiz be dope yo. " />
			<FeatureGridItem heading="Feature Heading" desc="Feature description, this shiz be dope yo. " />
			<FeatureGridItem heading="Feature Heading" desc="Feature description, this shiz be dope yo. " />
			<FeatureGridItem heading="Feature Heading" desc="Feature description, this shiz be dope yo. " />
		</div>
	);
}

export default FeatureGrid;