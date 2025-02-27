import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
        <Helmet>
            <title>404 Not Found</title>
            <meta name="description" content="Page not found." />
        </Helmet>
        <Box width="100vw" height="100vh" alignContent="center" justifyItems="center" spaceY={5}>
            <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">404 - Page Not Found</Heading>
            <VStack p={6} spaceY={5} textAlign="center" maxW="90%">
                <Text fontSize={{ base: "sm", md: "md" }}>
                The page you are looking for might have been removed or is temporarily unavailable.
                </Text>
                <Button colorPalette="yellow" variant="outline" rounded="full" size={{ base: "md", md: "lg" }} onClick={() => navigate("/")}>Go to Homepage</Button>
            </VStack>
        </Box>
    </>
  );
};

export default NotFoundPage;
