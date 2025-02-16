import { Box, Text, Link, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" py={4} mt={10} bg="bg.subtle" textAlign="center">
      <HStack justify="center" gap={6}>
        <Link href="https://github.com/Punosie" isExternal>
          <Icon as={FaGithub} w={6} h={6} _hover={{ color: "gray.700" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/shubhankar-kaushik/" isExternal>
          <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: "blue.600" }} />
        </Link>
        <Link href="https://www.instagram.com/shubhankar.2003/" isExternal>
          <Icon as={FaInstagram} w={6} h={6} _hover={{ color: "pink.500" }} />
        </Link>
      </HStack>
      <Text mt={2} fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} WeightMate. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
