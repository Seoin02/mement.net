import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerInput() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  function handleChange(date: Date) {
    setSelectedDate(date);
  }
  return (
    <DatePicker
      selected={selectedDate}
      onChange={
        handleChange
      }
      dateFormat="yyyy-MM-dd"
      placeholderText="Select Date"
      className="border-b-2 border-gray-300 p-2 w-full"
    />
  );
}