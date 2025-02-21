import { Box, Container } from "@chakra-ui/react";
import { WeightProgressChart } from "./Chart";

const Dashboard = () => {
    return(
        <Container>
            <Box>
                <WeightProgressChart/>
            </Box>
        </Container>
    )
}

export default Dashboard;