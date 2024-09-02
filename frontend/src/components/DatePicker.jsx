import { format } from "date-fns";
import calendorIcon from "../assets/calendorIcon.webp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import moment from "moment-timezone";

function DatePicker({ date, setDate, disabled, disabledDate }) {
  const handleDateSelect = (selectedDate) => {
    const formatted = moment(selectedDate)
      .tz("Asia/Kolkata")
      .format("YYYY-MM-DD");
    setDate(formatted);
  };

  return (
    <Popover className="h-auto">
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant={"outline"}
          className={cn(
            "grow h-auto justify-start gap-2 text-left font-normal text-lg",
            !date && "text-muted-foreground"
          )}
        >
          <img src={calendorIcon} className="mr-2 h-5 w-5" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateSelect}
          initialFocus
          disabled={disabledDate}
        />
      </PopoverContent>
    </Popover>
  );
}

export default DatePicker;
