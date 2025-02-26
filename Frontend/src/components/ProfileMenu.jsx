import { Box, VStack, Text } from "@chakra-ui/react";
import { doSignInWithGoogle, doSignOut } from "../firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useEffect, useRef } from "react";

const ProfileMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const menuRef = useRef(null);

  const handleLogin = () => {
    doSignInWithGoogle()
      .then(() => {
        onClose(); // Close menu on login
      })
      .catch((error) => console.error("Login error:", error));
  };

  const handleLogout = () => {
    doSignOut()
      .then(onClose) // Close menu on logout
      .catch((error) => console.error("Logout error:", error));
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Box
      ref={menuRef}
      position="absolute"
      top="50px"
      right="0"
      w="150px"
      bg="gray.700"
      color="white"
      borderRadius="md"
      boxShadow="lg"
      p={2}
      zIndex={1000}
    >
      <VStack align="start" spacing={2}>
        {user ? (
          <Text _hover={{ color: "red.400", cursor: "pointer" }} onClick={handleLogout}>
            Logout
          </Text>
        ) : (
          <Text _hover={{ color: "yellow.400", cursor: "pointer" }} onClick={handleLogin}>
            Login
          </Text>
        )}
        <Link to= "createUser">
          <Text textWrap="nowrap" _hover={{ color: "yellow.400", cursor: "pointer" }}>Register</Text>
        </Link>
        <Link to="/profile">
          <Text _hover={{ color: "yellow.400", cursor: "pointer" }}>Profile</Text>
        </Link>
        <Link to="/settings">
          <Text _hover={{ color: "yellow.400", cursor: "pointer" }}>Settings</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default ProfileMenu;
