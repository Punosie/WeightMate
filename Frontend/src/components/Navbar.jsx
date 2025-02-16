import { Box, Stack, Flex } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import Login from "@/components/LoginButton";

const Navbar = () => {
    return (
        <Box as="nav" w="100%" bg="bg.subtle" p={4}>
            <Flex justify="flex-end" align="center" h="40px">
                <Stack direction="row" spacing={4}>
                    <ColorModeButton />
                    <Login />
                </Stack>
            </Flex>
        </Box>
    );
};

export default Navbar;
