import { Box, Heading, Text, Stack, VStack, Button } from "@chakra-ui/react";
import DatePickerComponent from "../components/DatePicker";
import Form from "../components/Form";
import { useState } from "react";
import { format } from "date-fns";

const Tracker = () => {

  const [weight, setWeight] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [error, setError] = useState(""); // State for error message

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate weight input
    if (!weight.trim()) {
      setError("Weight cannot be empty.");
      return;
    }

    // Check if the weight contains any non-numeric characters (except for . for decimal points)
    if (isNaN(weight) || parseFloat(weight) <= 0) {
      setError("Please enter a valid positive number.");
      return;
    }

    // Clear error if everything is valid
    setError("");

    // Format the selected date as "dd/MM/yyyy"
    const formattedDate = format(selectedDate, "dd/MM/yyyy");

    console.log("Weight:", weight);
    console.log("Date:", formattedDate);

    // You can proceed with any additional logic for submission, like sending the data to a server
  };

  return (
    <Box fontFamily="Orbitron Variable" mt={5} maxW="lg" mx="auto" p={6} bg="bg.subtle" borderRadius="lg" boxShadow="lg">
      <VStack spacing={6} align="stretch" gap={5}>
        <Heading fontFamily="Orbitron Variable" size="2xl" textAlign="center" color="yellow">
          Weight Tracker
        </Heading>

        <Form label="Enter Weight" placeHolder="Weight" value={weight} onChange={handleWeightChange} />

        {/* Show error message */}
        {error && <Text color="red.500" fontSize="sm">{error}</Text>}

        <Stack spacing={2}>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Enter Date
          </Text>
          <Box>
            <DatePickerComponent selectedDate={selectedDate} onDateChange={handleDateChange} />
          </Box>
        </Stack>

        <Box textAlign="center">
          <Button variant="outline" colorPalette="yellow" onClick={handleSubmit}>Submit</Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Tracker;
