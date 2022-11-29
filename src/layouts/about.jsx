import AboutEntrySection from "../components/about_entry_section";
import AboutSection from "../components/about_section";
import AboutStats from "../components/about_stats";
import AboutStatsItem from "../components/about_stats_item";
import FeatureGrid from "../components/feature_grid";

const statsData = [
  {
    top: "Lörem ipsum pott sebälogi. Res. Hundvissla räränt, i aska bevis.",
    bottom: "200+",
  },
  {
    top: "Lörem ipsum pott sebälogi. Res. Hundvissla räränt, i aska bevis.",
    bottom: "20+",
  },
  {
    top: "Lörem ipsum pott sebälogi. Res. Hundvissla räränt, i aska bevis.",
    bottom: "30+",
  },
];

function About(props) {
  return (
    <div className="flex flex-col items-center mt-12 " id="about">
      <AboutEntrySection />
      <img src="assets/about_us_banner.png" className="my-8 md:my-20 w-full" />
      <div className="md:hidden text-left px-8 md:px-20 pb-8 md:pb-12">
				<p>Yakxa is a one-stop solution for making your content truly global and available with our smart and AI backed dubbing methodologies that transcribes translates as well as add narration with care to your content</p>
			</div>
      <AboutSection headingTop="our" headingBottom="Mission">
        <p>
          Yaksha strives to use industry-leading AI techniques and algorithms
          along with quality checks and validation by linguistic specialists to
          make the dubbing process simple, affordable, and accurate. This gives
          us confidence that our product accurately captures the essence of your
          content.
        </p>
      </AboutSection>
      <p className="text-3xl my-12 mx-4 md:text-5xl md:w-3/5 md:my-24">
        Reach a wider audience with unimaginable speed and zero effort
      </p>
      <AboutSection headingTop="why" headingBottom="Choose Us">
        <p>
          With over xyz+ languages to select from and voices that is close to
          your content yaksha provides verified and aided transcription to
          provide assurance that your content doesn’t lose its essence but at
          the same time reflect the uniqueness in target language
        </p>
      </AboutSection>
      <AboutStats>
        {statsData.map((stat) => {
          return <AboutStatsItem top={stat.top} bottom={stat.bottom} />;
        })}
      </AboutStats>

      <AboutSection headingTop="our" headingBottom="Features">
        <FeatureGrid />
      </AboutSection>
    </div>
  );
}

export default About;
