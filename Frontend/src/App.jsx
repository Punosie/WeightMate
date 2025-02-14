import { Button, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router';

const App = () => {

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <HStack>
      <Button colorPalette='teal' variant="outline" onClick={goToLogin}>Click me</Button>
      <Button colorPalette='pink' variant="outline" onClick={goToLogin} >Click me</Button>
    </HStack>
  )
}

export default App;