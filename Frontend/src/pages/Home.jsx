import Typing from '@/components/Typing';
import { Box, Container, Heading, Text, VStack, Icon, Grid } from '@chakra-ui/react';
import { FaWeight, FaWalking, FaUsers, FaChartLine } from 'react-icons/fa';
import CountUp from 'react-countup';

const Home = () => {
  return (
    <Container maxW="container.lg" centerContent>
      {/* Hero Section */}
      <VStack spacing={6} textAlign="center" mt={12}>
        <Heading  size="3xl">Welcome to WeightMate</Heading>
        <Text fontSize="lg" color="gray.600" maxW="600px">
          Your personal weight and fitness tracking companion. Stay on top of your health goals and monitor your progress with ease.
        </Text>
        <Typing />
      </VStack>

      {/* Features Section */}
{/* Features Section */}
<Box mt={16} w="full">
  <Heading size="2xl" textAlign="center" mb={8}>
    Why Choose WeightMate?
  </Heading>

  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
    {/* Feature 1: Weight Tracking */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaWeight} boxSize={10} color="blue.500" />
      <Heading  size="md">Weight Tracking</Heading>
      <Text textAlign="center" color="gray.600">
        Log your daily weight and track your progress over time.
      </Text>
    </VStack>

    {/* Feature 2: Step Monitoring */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaWalking} boxSize={10} color="green.500" />
      <Heading  size="md">Step Monitoring</Heading>
      <Text textAlign="center" color="gray.600">
        Keep an eye on your daily steps and maintain an active lifestyle.
      </Text>
    </VStack>

    {/* Feature 3: Family & Friends */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaUsers} boxSize={10} color="purple.500" />
      <Heading  size="md">Family & Friends</Heading>
      <Text textAlign="center" color="gray.600">
        Create family groups and support each other’s fitness journeys.
      </Text>
    </VStack>

    {/* Feature 4: Visual Insights */}
    <VStack spacing={3} align="center" p={6} borderRadius="lg" boxShadow="md" bg="bg.subtle">
      <Icon as={FaChartLine} boxSize={10} color="red.500" />
      <Heading  size="md">Visual Insights</Heading>
      <Text textAlign="center" color="gray.600">
        Analyze trends with easy-to-understand graphs and charts.
      </Text>
    </VStack>
  </Grid>
</Box>

    {/* Countup */}
{/* Countup Section */}
<Box mt={16} w="full" textAlign="center">
  <Heading size="2xl" mb={4}>Our Growing Community</Heading>
  <VStack spacing={6}>
    <Text fontSize="lg" color="gray.500">
      Join thousands of users who are tracking their fitness journey with WeightMate.
    </Text>
    <Box p={3} borderRadius="full" boxShadow="md" bg="bg.subtle">
      <Heading size="xl" color="pink.500">
        <CountUp end={15000} duration={10} separator="," suffix="+ Members" />
      </Heading>
    </Box>
  </VStack>
</Box>


      {/* Call to Action */}
      <Box mt={16} textAlign="center">
        <Heading color="green.400"  size="lg">Start Your Fitness Journey Today!</Heading>
      </Box>
    </Container>
  );
};

export default Home;
