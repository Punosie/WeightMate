import { Box, Container, Stack, Text, Spinner, Center, Heading } from "@chakra-ui/react";
import { WeightProgressChart, GoalProgressPieChart } from "./Chart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getWeight } from "@/services/weightService";

const Dashboard = () => {
    const [weights, setWeights] = useState([]);
    const [dates, setDates] = useState([]);

    const user = useSelector((state) => state.auth.user);
    const uid = user?.uid;

    useEffect(() => {
        if (!uid) {
            setWeights([]);
            setDates([]);
            return;
        }

        const fetchWeights = async () => {
            try {
                const response = await getWeight(uid);
                setWeights(response.map(entry => entry.weight));
                setDates(response.map(entry => entry.date));
            } catch (err) {
                console.error(err);
            }
        };

        fetchWeights();
    }, [uid]);

    if (!uid) {
        return (
            <Center height="100vh">
                <Stack align="center" spacing={3}>
                    <Spinner size="xl" color="yellow" />
                    <Text fontSize="xl" fontWeight="bold" color="gray.600">
                        No Data Available.
                    </Text>
                </Stack>
            </Center>
        );
    }

    return (
        <Container maxW="container.lg">
            <Stack spacing={5} m={5}>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                    <Box flex={1} borderWidth="1px" borderRadius="md" p={5}>
                        <Heading textAlign="center" p={2} > Weight Progress </Heading>
                        {weights.length > 0 ? (
                            <WeightProgressChart weights={weights} dates={dates} />
                        ) : (
                            <Text fontSize="lg" color="gray.500" textAlign="center">
                                No weight data available. Start tracking your progress!
                            </Text>
                        )}
                    </Box>
                    <Box flex={1} borderWidth="1px" borderRadius="md" p={5}>
                        <Heading textAlign="center" p={2} > Goal Progress </Heading>
                        {weights.length > 0 ? (
                            <GoalProgressPieChart weights={weights} />
                        ) : (
                            <Text fontSize="lg" color="gray.500" textAlign="center">
                                No weight data available. Start tracking your progress!
                            </Text>
                        )}
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Dashboard;
