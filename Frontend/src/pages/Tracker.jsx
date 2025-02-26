import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TrackerInput from "@/components/TrackerInput";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { getUserInfo } from "@/services/userService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Tracker = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [userExists, setUserExists] = useState(null); // null = loading, true = exists, false = not found

  useEffect(() => {
    const checkUserExists = async () => {
      if (user) {
        try {
          const userInfo = await getUserInfo(user.uid);
          setUserExists(!!userInfo);
        } catch (error) {
          console.error("Error fetching user info:", error);
          setUserExists(false);
        }
      } else {
        setUserExists(false);
      }
    };

    checkUserExists();
  }, [user]);

  if (userExists === null) return null; // Show nothing while checking

  return (
    <Box h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
      <Navbar />

      {userExists  || !user ? (
        <TrackerInput />
      ) : (
        <VStack spacing={4} justify="center" align="center" flex={1}>
          <Text fontSize="lg" color="red.500">Please register to proceed.</Text>
          <Button colorScheme="yellow" onClick={() => navigate("/createUser")}>
            Register Now
          </Button>
        </VStack>
      )}

      <Footer />
    </Box>
  );
};

export default Tracker;
