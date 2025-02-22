import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react"
import Dashboard from "@/components/Dashboard";

const Stats = () => {
    return (
        <Box h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <Navbar />
            <Box >
                <Dashboard />
            </Box>
            <Footer />
        </Box>
    )
}

export default Stats;