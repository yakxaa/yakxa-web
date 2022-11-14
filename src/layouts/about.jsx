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
    <div className="flex flex-col items-center ">
      <AboutEntrySection />
      <img src="src\assets\about_us_banner.png" className="my-20 w-full" />
      <AboutSection headingTop="our" headingBottom="Mission">
        <p>
          Yaksha strives to use industry-leading AI techniques and algorithms
          along with quality checks and validation by linguistic specialists to
          make the dubbing process simple, affordable, and accurate. This gives
          us confidence that our product accurately captures the essence of your
          content.
        </p>
      </AboutSection>
      <p className="text-4xl w-3/5 my-24">
        Yakxa is something some words, more words, for you , some more words,
        words and all.
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
