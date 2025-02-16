import {Box } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <Box fontFamily="Orbitron Variable"> 
      <Navbar />
      <Home  />
      <Footer />
    </Box>
  )
}

export default App;