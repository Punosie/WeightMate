import Typing from '@/components/Typing';
import { Box, Container, Heading, Text, VStack, Button, Link, Icon, Grid } from '@chakra-ui/react';
import { FaWeight, FaWalking, FaUsers, FaChartLine } from 'react-icons/fa';


const Home = () => {
  return (
    <Container maxW="container.lg" centerContent>
      {/* Hero Section */}
      <VStack spacing={6} textAlign="center" mt={12}>
        <Heading fontFamily="Orbitron Variable"  size="3xl">Welcome to WeightMate</Heading>
        <Text fontSize="lg" color="gray.600" maxW="600px">
          Your personal weight and fitness tracking companion. Stay on top of your health goals and monitor your progress with ease.
        </Text>
        <Typing />
      </VStack>

      {/* Features Section */}
{/* Features Section */}
<Box mt={16} w="full">
  <Heading fontFamily="Orbitron Variable" size="2xl" textAlign="center" mb={8}>
    Why Choose WeightMate?
  </Heading>

  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
    {/* Feature 1: Weight Tracking */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaWeight} boxSize={10} color="blue.500" />
      <Heading fontFamily="Orbitron Variable"  size="md">Weight Tracking</Heading>
      <Text textAlign="center" color="gray.600">
        Log your daily weight and track your progress over time.
      </Text>
    </VStack>

    {/* Feature 2: Step Monitoring */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaWalking} boxSize={10} color="green.500" />
      <Heading fontFamily="Orbitron Variable"  size="md">Step Monitoring</Heading>
      <Text textAlign="center" color="gray.600">
        Keep an eye on your daily steps and maintain an active lifestyle.
      </Text>
    </VStack>

    {/* Feature 3: Family & Friends */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaUsers} boxSize={10} color="purple.500" />
      <Heading fontFamily="Orbitron Variable"  size="md">Family & Friends</Heading>
      <Text textAlign="center" color="gray.600">
        Create family groups and support each other’s fitness journeys.
      </Text>
    </VStack>

    {/* Feature 4: Visual Insights */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaChartLine} boxSize={10} color="red.500" />
      <Heading fontFamily="Orbitron Variable"  size="md">Visual Insights</Heading>
      <Text textAlign="center" color="gray.600">
        Analyze trends with easy-to-understand graphs and charts.
      </Text>
    </VStack>
  </Grid>
</Box>


      {/* Call to Action */}
      <Box mt={16} textAlign="center">
        <Heading fontFamily="Orbitron Variable"  size="lg">Start Your Fitness Journey Today!</Heading>
        <Text fontSize="md" color="gray.600" mt={2}>
          Join WeightMate and take control of your health.
        </Text>
        <Link href="/signup">
          <Button mt={4} colorPalette="yellow" size="lg" variant="outline">Join Now</Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
