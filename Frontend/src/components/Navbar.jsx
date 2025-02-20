import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import Login from "@/components/LoginButton";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <Box as="nav" w="100%" bg="bg.subtle" p={4}>
            <Flex justify="flex-end" align="center" h="40px">
                <Stack direction="row" spacing={4}>
                    <Box alignContent="center" px="2" ><Text _hover={{color: "yellow", textDecoration:"underline", scale:"1.1"  }} >
                        <Link to="/">Home</Link>
                    </Text></Box>
                    <Box alignContent="center" px="2" ><Text _hover={{color: "yellow", textDecoration:"underline", scale:"1.1"  }} >
                        <Link to="/tracker">Tracker</Link>
                    </Text></Box>
                    <ColorModeButton />
                    <Login />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;
