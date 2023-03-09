import dynamic from "next/dynamic";
import Div from "../Div";
import Button from "../Button";
import VerticalLinks from "../VerticalLinks";

const WaterWave = dynamic(
  () => import("react-water-wave").then((mod) => mod.default),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function Hero3({
  title,
  socialLinksHeading,
  heroSocialLinks,
  btnLink,
  btnText,
  bgImageUrl,
}) {
  return (
    <Div className="cs-hero cs-style1 cs-type2" id="home">
      <WaterWave
        className="cs-hero_bg cs-bg cs-ripple_version cs-center"
        imageUrl={bgImageUrl}
      >
        {() => (
          <Div className="container">
            <Div className="cs-hero_text text-center">
              <h1 className="cs-hero_title">{title}</h1>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
          </Div>
        )}
      </WaterWave>
      <VerticalLinks
        data={heroSocialLinks}
        title={socialLinksHeading}
        variant="cs-left_side"
      />
    </Div>
  );
}
