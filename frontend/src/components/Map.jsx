import map from "../assets/map.webp";
import locationIcon from "../assets/location.webp";
import Button from "./Button";
function Map() {
  function handleClick() {
    window.open(
      "https://www.google.com/maps/place/Pilibhit+Tiger+Reserve/@28.700601,80.031136,12z/data=!4m6!3m5!1s0x39a1ca688f75f4bf:0x8b513ec2e32b2c8d!8m2!3d28.7006005!4d80.0311364!16s%2Fm%2F04n08n0?hl=en&entry=ttu",
      "_blank"
    );
  }
  return (
    <div
      className="w-full min-h-40 mt-20 px-8 sm:px-10 shadow-lg flex flex-col sm:flex-row items-center justify-evenly sm:justify-between rounded-lg"
      style={{ backgroundImage: `url(${map})` }}
    >
      <div className="m-1">
        <div className="flex gap-2 items-center">
          <img
            src={locationIcon}
            alt="locationIcon"
            className="sm:size-[1.3rem] size-8"
          />
          <h3 className="text-lg sm:text-2xl md:text-3xl text-nowrap font-semibold">
            Pilibhit Tiger Reserve
          </h3>
        </div>
        <p className="text-[#383838] mt-1 ml-1">Uttar Pradesh 262122</p>
      </div>
      <div className="font-medium">
        <Button onClickHandler={handleClick}>View Map</Button>
      </div>
    </div>
  );
}

export default Map;
