import { useState } from "react";
import { Avatar, HStack, Box } from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";

const AvatarButton = ({ name, src }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <HStack gap="4" position="relative">
      {/* Avatar */}
      <Box onClick={() => setIsOpen(!isOpen)} cursor="pointer" _hover={{ transform: "scale(1.05)", transition: "0.2s ease-in-out" }}>
        <Avatar.Root shape="full" size="md">
          <Avatar.Fallback name={name} />
          <Avatar.Image src={src} />
        </Avatar.Root>
      </Box>

      {/* Profile Dropdown Menu */}
      <ProfileMenu isOpen={isOpen} onClose={handleClose} />
    </HStack>
  );
};

export default AvatarButton;
