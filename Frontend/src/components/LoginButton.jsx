import { Box, Button } from "@chakra-ui/react";
import { doSignInWithGoogle, doSignOut } from "../firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const LoginButton = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handleLogin = () => {
        doSignInWithGoogle()
            .then(() => navigate("/tracker"))
            .catch((error) => console.error("Login error:", error));
    };

    const handleLogout = () => {
        doSignOut().catch((error) => console.error("Logout error:", error));
    };

    return (
        <Box>
            {console.log(user)}
            {user ? (
                <Button colorPalette="yellow" variant="plain" onClick={handleLogout}>
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
