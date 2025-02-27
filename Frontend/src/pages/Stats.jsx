import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react"
import Dashboard from "@/components/Dashboard";
import { Helmet } from "react-helmet";

const Stats = () => {
    return (
      <>
        <Helmet>
            <title>Stats</title>
            <meta name="description" content="Analyze your fitness trends and progress with visual insights." />
        </Helmet>
        <Box h="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <Navbar />
            <Box >
                <Dashboard />
            </Box>
            <Footer />
        </Box>
      </>
    )
}

export default Stats;