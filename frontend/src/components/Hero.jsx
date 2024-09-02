import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Navbar from "./Navbar";
import BannerContainer from "./BannerContainer";
import BannerContent from "./BannerContent";
import BannerHead1 from "./BannerHead1";
import BannerHead2 from "./BannerHead2";

function Hero() {
  const navigate = useNavigate();
  return (
    <BannerContainer className="bg-home-banner">
      <Navbar />
      <BannerContent>
        <BannerHead1>
          PILIBHIT <br />
          TIGER RESERVE
        </BannerHead1>
        <div className="mt-2">
          <BannerHead2 className="text-gray-400 tracking-wider my-2">
            The Jewel of Terai
          </BannerHead2>
          <Button
            onClickHandler={() => navigate("/#book")}
            type="glossy"
            size="md"
          >
            Book Safari
          </Button>
        </div>
      </BannerContent>
    </BannerContainer>
  );
}

export default Hero;
