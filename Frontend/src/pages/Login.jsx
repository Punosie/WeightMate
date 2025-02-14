import {Box, Button, Heading} from '@chakra-ui/react';
import { doSignInWithGoogle, doSignOut } from "../firebase/auth";
import { useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate()

    const handleOnClick = () => {
    
        doSignInWithGoogle()
            .then(result => {
                navigate('/') // Redirect to home page
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <Box>
            <Heading as="h1" size="2xl" textAlign="center" mt={10}> Login </Heading>
            <Button colorPalette="yellow" variant="outline" size="lg" mt={5} mx="auto" display="block" onClick={handleOnClick} >Login</Button>
        </Box>
    );
};

export default Login;