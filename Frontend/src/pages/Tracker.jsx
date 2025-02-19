import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrackerInput from "@/components/TrackerInput";
import { Box } from "@chakra-ui/react";

const Tracker = () => {
  return (
    <Box h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Navbar />
      <TrackerInput />
      <Footer />
    </Box>
  );
};

export default Tracker;
