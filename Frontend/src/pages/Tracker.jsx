import { Box, Heading, Text, Stack, VStack, Button } from "@chakra-ui/react";
import DatePickerComponent from "../components/DatePicker";
import Form from "../components/Form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import axios from "axios";
import { toaster } from "@/components/ui/toaster";

const Tracker = () => {

  const [weight, setWeight] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const user = useSelector((state) => state.auth.user);


  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!weight.trim()) {
      toaster.create({
        title: "Error",
        description: "Weight cannot be empty.",
        type: "error",
      });

      return;
    }
  
    if (isNaN(weight) || parseFloat(weight) <= 0) {
      toaster.create({
        title: "Error",
        description: "Please enter a valid positive number.",
        type: "error",
      });
      return;
    }

    const formattedDate = format(selectedDate, "yyyy-MM-dd"); // Use correct format
    const uid = user.uid; // Make sure uid is correctly assigned
  
    console.log("Weight:", weight);
    console.log("Date:", formattedDate);
    console.log("Uid:", uid);
  
    try {
      const response = await axios.post(`http://localhost:5000/api/weight/add/${uid}`, {
        weight: parseFloat(weight),
        date: formattedDate
      });

      console.log("Response:", response.data);
      toaster.create({
        title: "Success",
        description: "Weight added successfully!",
        type: "success",
      });
    } catch (err) {
      console.error("Error submitting weight:", err);
      toaster.create({
        title: "Error",
        description: err.response?.data?.message || "Something went wrong",
        type: "error",
      });
    }
  };
  

  return (
    <Box mt={5} maxW="lg" mx="auto" p={6} bg="bg.subtle" borderRadius="lg" boxShadow="lg">
      <VStack spacing={6} align="stretch" gap={5}>
        <Heading size="2xl" textAlign="center" color="yellow">
          Weight Tracker
        </Heading>

        <Form label="Enter Weight" placeHolder="Weight" value={weight} onChange={handleWeightChange} />

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