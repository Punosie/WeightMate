import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/styles.css";
import { Box } from "@chakra-ui/react";

const DatePickerComponent = ({selectedDate, onDateChange} ) => {

  return (
    <Box w="100%">
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        className="custom-datepicker-input"
        calendarClassName="custom-datepicker-calendar"
        dateFormat="dd, MM, YYYY"
        placeholderText="Select a date"
      />
    </Box>
  );
};

export default DatePickerComponent;
