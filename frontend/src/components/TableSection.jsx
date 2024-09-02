import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableSection({ bookings }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-200">
          <TableHead className="text-center font-bold text-black w-[15%]">
            Guests
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Phone no.
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Adhar no.
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Country
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Adult/Children
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Slot
          </TableHead>
          <TableHead className="text-center font-bold text-black">
            Payment
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(bookings) &&
          bookings.map((booking, index) => (
            <TableRow>
              <TableCell className="text-center capitalize font-bold text-black">
                {booking.user?.firstName + " " + booking.user?.lastName}
              </TableCell>
              <TableCell className="text-center">
                {booking.user?.countryCode + " " + booking.user?.phone}
              </TableCell>
              <TableCell className="text-center">
                {booking.user?.adhaar}
              </TableCell>
              <TableCell className="text-center">
                {booking.user?.country}
              </TableCell>
              <TableCell className="text-center">
                {booking.adultCount + " / " + booking.childCount}
              </TableCell>
              <TableCell className="text-center capitalize">
                {booking.slot}
              </TableCell>
              <TableCell className="text-center text-[#C51D1D] capitalize">
                {booking.paymentStatus}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
