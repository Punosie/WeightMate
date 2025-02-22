import { Box, Stack, Flex, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
// import Login from "@/components/LoginButton";
import { Link } from "react-router";
import AvatarButton from "./Avatar";
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    console.log(user);
    const name = user ? user.displayName : "User";
    const src = user ? user.photoURL : "https://i.pinimg.com/736x/40/23/cd/4023cd00f10265bf283c01c2d898928f.jpg";        
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
                    <Box alignContent="center" px="2" ><Text _hover={{color: "yellow", textDecoration:"underline", scale:"1.1"  }} >
                        <Link to="/stats">Stats</Link>
                    </Text></Box>
                    <ColorModeButton />
                    <AvatarButton name={name} src={src} />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;
