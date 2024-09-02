import { startOfDay, addHours, addDays } from "date-fns";
import { FiClock } from "react-icons/fi";
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import Button from "./Button";
import DatePicker from "./DatePicker";
import visitorIcon from "../assets/visitorIcon.webp";
import { Button as OutlineButton } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AgeCounter from "./AgeCounter";
import useWeeklySafari from "@/hooks/useWeeklySafaris";
import { Link, useNavigate } from "react-router-dom";
import { useBookingContext } from "@/context/BookingContext";

function ReserveSlot({ safari }) {
  const navigate = useNavigate();
  const weekDetails = useWeeklySafari();
  const filterDetails = filterWeeklyDetails(weekDetails, safari?._id);
  const {
    safariId,
    setSafariId,
    unitPrice,
    setUnitPrice,
    seats,
    setSeats,
    date,
    setDate,
    adultCount,
    setAdultCount,
    childCount,
    setChildCount,
    slot,
    setSlot,
    setBookingId,
    setTimerStartAt,
  } = useBookingContext();

  useEffect(() => {
    setDate("");
    setAdultCount(0);
    setChildCount(0);
    setSlot("");
  }, [safari]);

  useEffect(() => {
    setSafariId(safari?._id);
    setUnitPrice([safari?.childPerSeat, safari?.adultPerSeat]);
    setSeats(filterDetailsByDate(filterDetails, date)?.availability[slot]);
  }, [date, slot, filterDetails, safari]);

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    if (date && slot && adultCount) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [date, slot, adultCount]);

  const [error, setError] = useState(null);

  const reserveNowHandler = async () => {
    setIsDisabled(true);
    const totalPeople = adultCount + childCount;
    const totalPrice = unitPrice[1] * adultCount + unitPrice[0] * childCount;
    try {
      const res = await fetch(
        `http://localhost:8000/api/rpay/lock-seats?adultCount=${adultCount}&childCount=${childCount}&totalPrice=${totalPrice}&totalPeople=${totalPeople}&date=${date}&safariId=${safariId}&slot=${slot}`
      );
      if (res.ok) {
        const data = await res.json();
        // Set bookingId and timerStartAt in session storage
        sessionStorage.setItem("bookingId", JSON.stringify(data.bookingId));
        sessionStorage.setItem("safariId", JSON.stringify(data.safariId));
        sessionStorage.setItem(
          "timerStartAt",
          JSON.stringify(data.timerStartAt)
        );
        sessionStorage.setItem("date", JSON.stringify(data.bookingDate));
        sessionStorage.setItem("slot", JSON.stringify(data.slot));
        sessionStorage.setItem("adultCount", JSON.stringify(data.adultCount));
        sessionStorage.setItem("childCount", JSON.stringify(data.childCount));
        sessionStorage.setItem("totalPrice", JSON.stringify(data.totalPrice));
        sessionStorage.setItem(
          "adultPerSeat",
          JSON.stringify(data.adultPerSeat)
        );
        sessionStorage.setItem(
          "childPerSeat",
          JSON.stringify(data.childPerSeat)
        );

        setBookingId(data.bookingId);
        setTimerStartAt(data.timerStartAt);
        navigate("/payment");
      } else {
        setError("All seats are booked");
        setIsDisabled(false);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Try Later");
      setIsDisabled(false);
    }
  };

  return (
    <div className="mb-16 space-y-10 xl:max-w-[70%]">
      <form>
        <div className="flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-6 items-stretch">
          <DatePicker
            disabledDate={(date) => {
              const tomorrowAtMidnight = addHours(
                startOfDay(addDays(new Date(), 1)),
                0
              );
              const sevenDaysFromTomorrow = addDays(tomorrowAtMidnight, 7);
              return date < tomorrowAtMidnight || date >= sevenDaysFromTomorrow;
            }}
            disabled={sessionStorage.getItem("bookingId") ? true : false}
            date={date}
            setDate={setDate}
          />
          <Popover>
            <PopoverTrigger asChild>
              <OutlineButton
                disabled={!date || !slot || sessionStorage.getItem("bookingId")}
                className="h-auto font-normal space-x-3 bg-white text-black hover:bg-neutral border-[1px] border-[#e5e5e5]"
              >
                <img src={visitorIcon} className="h-4" />
                <span>{adultCount + childCount}</span>
              </OutlineButton>
            </PopoverTrigger>
            <PopoverContent className="rounded-2xl w-full space-y-2">
              <AgeCounter
                label="Adults"
                description="Age 12 - 99"
                count={adultCount}
                setCount={setAdultCount}
                unitPrice={unitPrice[1]}
                date={date}
                max_count={seats - adultCount}
              />
              <AgeCounter
                label="Children"
                description="Age 3 - 11"
                count={childCount}
                setCount={setChildCount}
                unitPrice={[unitPrice[0]]}
                date={date}
                max_count={seats - childCount}
              />
              {seats && (
                <p className="text-sm text-end">
                  Only{" "}
                  <span className="text-[#C51D1D] font-bold">
                    {seats} seats{" "}
                  </span>
                  are available
                </p>
              )}
            </PopoverContent>
          </Popover>
          <Select onValueChange={setSlot}>
            <SelectTrigger className="lg:w-[380px] w-full  h-[46px]">
              <SelectValue placeholder="Select Slot" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">
                <div className="flex items-center flex-nowrap font-normal text-lg my-1 gap-3">
                  <FiClock />
                  <span className="font-bold">Morning</span>{" "}
                  <span className="whitespace-nowrap">
                    (9:30 AM - 11:30 AM)
                  </span>
                </div>
              </SelectItem>
              <SelectItem value="evening">
                <div className="font-normal text-lg flex items-center flex-nowrap my-1 gap-3">
                  <FiClock />
                  <span className="font-bold">Evening</span>{" "}
                  <span className="whitespace-nowrap">(3:00 PM - 5:00 PM)</span>{" "}
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          {/* <div className='rounded-md grow lg:grow-0 bg-[#B7B7B73D] bg-opacity-25 px-6 py-2 text-sm'>
            <p>Adult: {unitPrice[1]} INR</p>
            <p>Children: {unitPrice[0]} INR</p>
          </div> */}
        </div>
      </form>
      <div className="border-black border-[1px] rounded-md p-4 space-y-6">
        <div>
          <h5 className="text-lg sm:text-3xl font-bold">
            Jungle Safari in pilibhit Tiger Reserve
          </h5>
          <hr className="mt-3 border-1 border-black" />
        </div>
        <div className="space-y-2">
          <p className="font-light">
            {`Adults × ₹${Math.floor(
              unitPrice[1] * adultCount
            )} | Children × ₹${Math.floor(unitPrice[0] * childCount)}`}
          </p>
          <p className="font-mendium font-bold text-lg">
            Total ₹
            {Math.floor(unitPrice[1] * adultCount + unitPrice[0] * childCount)}
          </p>
          <p className="text-xs text-black/80 font-light">
            (Price includes taxes and booking fees)
          </p>
          {/* <div className="flex flex-col sm:flex-row !mt-4 gap-4 text-black/80">
            <p
              onClick={() => setSlot("morning")}
              className={`${
                slot === "morning"
                  ? "bg-[#B7B7B726]"
                  : "hover:text-white hover:bg-black"
              } ${
                sessionStorage.getItem("bookingId")
                  ? "opacity-50 pointer-events-none"
                  : ""
              } rounded-full border-[1px] cursor-pointer px-3 text-center sm:text-sm py-1 border-black`}
            >
              <span className="font-bold">Morning</span> (9:30 AM - 11:30 AM)
            </p>
            <p
              onClick={() => setSlot("evening")}
              className={`${
                slot === "evening"
                  ? "bg-[#B7B7B726]"
                  : "hover:text-white hover:bg-black"
              } ${
                sessionStorage.getItem("bookingId")
                  ? "opacity-50 pointer-events-none"
                  : ""
              } rounded-full border-[1px] cursor-pointer px-3 text-center sm:text-sm py-1 border-black`}
            >
              <span className="font-bold">Evening</span> (3:00 PM - 5:00 PM){" "}
            </p>
          </div> */}
        </div>
      </div>
      {error && <p className="text-red-500 !mt-2">{error}</p>}

      <div className="flex flex-col lg:flex-row gap-4">
        <Button
          disabled={
            sessionStorage.getItem("bookingId") || isDisabled ? true : false
          }
          type="black"
          onClickHandler={reserveNowHandler}
          className={`rounded-lg ${
            sessionStorage.getItem("bookingId") || isDisabled
              ? "opacity-60"
              : ""
          }`}
        >
          Reserve Now
        </Button>
        {sessionStorage.getItem("bookingId") && (
          <Button>
            <Link to="/payment">Continue Booking</Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default ReserveSlot;

function filterWeeklyDetails(weekDetails = [], id) {
  return weekDetails.find((safari) => safari.safariId === id);
}

function filterDetailsByDate(filterDetails, date) {
  if (!date || !filterDetails) return null;
  const selectedDate = moment(date).tz("Asia/Kolkata").format("YYYY-MM-DD");
  return filterDetails?.slots.find((slot) => {
    return slot.date === selectedDate;
  });
}
