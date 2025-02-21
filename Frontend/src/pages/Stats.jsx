import LineChart from "@/components/Chart"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react"

const Stats = () => {
    return (
        <Box h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <Navbar />
            <Box >
                <LineChart />
            </Box>
            <Footer />
        </Box>
    )
}

export default Stats;