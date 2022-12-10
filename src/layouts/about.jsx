import AboutEntrySection from "../components/about_entry_section";
import AboutSection from "../components/about_section";
import AboutStats from "../components/about_stats";
import AboutStatsItem from "../components/about_stats_item";
import FeatureGrid from "../components/feature_grid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const statsData = [
  {
    top: "More than 50% of all YouTube views come from non English speakers.",
    bottom: "50%",
  },
  {
    top: "68% of online customers like to interact with brands in their local language.",
    bottom: "68%",
  },
  {
    top: "64% of consumers would pay more for a service that spoke their language.",
    bottom: "64%",
  },
];

function About(props) {
  return (
    <div className='flex flex-col items-center mt-12 ' id='about'>
      <AboutEntrySection />
      <LazyLoadImage
        src='assets/about_us_banner.png'
        placeholderSrc='assets/about_us_banner_ph.jpg'
        effect='blur'
        className='my-8 md:my-20 w-full'
      />
      <div className='md:hidden text-left px-8 md:px-20 pb-8 md:pb-12'>
        <p className='font-semibold'>
          The limits of my language mean the limits of my world.
        </p>
        <p>
          At Yakxa, we aim to create a world without the limits of linguistic
          barriers. Our AI backed dubbing methodologies and real time
          translation pipelines help us create a seamless user experience.
        </p>
      </div>
      <AboutSection headingTop='our' headingBottom='Mission'>
        <p>
          We all have been fascinated by the fact that the world is becoming a
          global village but what stops us from becoming a global community is
          the lack of common language or the lack of common understanding. Our
          motivation here is to make sure that no content, idea or inspiration
          stays out of your reach because of lack of this understanding.
        </p>
      </AboutSection>
      <p className='leading:snug md:leading-snug text-3xl my-12 mx-4 md:text-5xl md:w-3/5 md:my-24'>
        Connecting people, connecting communities, connecting the world and you.
      </p>
      <AboutSection headingTop='why' headingBottom='Choose Us'>
        <p>
          Reach a wider audience with lightning speed and zero effort. Providing
          over 40+ languages to select from and voices that suit the content.
          Yakxa ensures that the essence and meaning of your content remains
          intact and at the same time reflect the uniqueness in the dubbed
          language.
        </p>
      </AboutSection>
      <AboutStats>
        {statsData.map((stat) => {
          return <AboutStatsItem top={stat.top} bottom={stat.bottom} />;
        })}
      </AboutStats>

      <AboutSection headingTop='our' headingBottom='Features'>
        <div className='mt-10 md:my-0'>
          <FeatureGrid />
        </div>
      </AboutSection>
    </div>
  );
}

export default About;
