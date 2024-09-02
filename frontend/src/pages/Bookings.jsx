import DatePicker from "@/components/DatePicker";
import H2 from "@/components/H2";
import TableSection from "@/components/TableSection";
import React, { useEffect, useState } from "react";

export default function Bookings() {
  const [date, setDate] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function getBookings() {
      try {
        const res = await fetch(
          `http://localhost:8000/api/dashboard/bookings?date=${date}`
        );
        const data = await res.json();
        setBookings(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getBookings();
  }, [date]);

  return (
    <section className="container-padding flex flex-col">
      <H2 className="gradient-text-1">Bookings</H2>
      <div>
        <DatePicker
          date={date}
          setDate={setDate}
          disabledDate={(date) =>
            date > new Date().setDate(new Date().getDate() + 7)
          }
        />
      </div>
      <div className="py-8">
        {bookings.length > 0 ? (
          <TableSection bookings={bookings} />
        ) : (
          <p className="text-red-500">
            No Booking details found on this date. Try changing the date.
          </p>
        )}
      </div>
    </section>
  );
}
