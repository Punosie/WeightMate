import { Box, Button } from "@chakra-ui/react";
import { doSignInWithGoogle, doSignOut } from "../firebase/auth";
import { useSelector } from "react-redux";

const LoginButton = () => {
    const user = useSelector((state) => state.auth.user);

    const handleLogin = () => {
        doSignInWithGoogle()
            .catch((error) => console.error("Login error:", error));
    };

    const handleLogout = () => {
        doSignOut().catch((error) => console.error("Logout error:", error));
    };

    return (
        <Box>
            {console.log(user)}
            {user ? (
                <Button colorPalette="red" variant="plain" onClick={handleLogout}>
                    Logout
                </Button>
            ) : (
                <Button colorPalette="yellow" variant="plain" onClick={handleLogin}>
                    Login
                </Button>
            )}
        </Box>
    );
};

export default LoginButton;
