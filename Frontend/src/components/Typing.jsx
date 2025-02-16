import { TypeAnimation } from 'react-type-animation';
import { Box } from '@chakra-ui/react';

const Typing = () => {
  return (
    <Box fontSize="xl" fontWeight="bold" textAlign="center" color="yellow.500"> 
      <TypeAnimation
        sequence={[
          'Track Your Weight Effortlessly',
          1500,
          'Monitor Your Daily Steps',
          1500,
          'Set and Achieve Your Fitness Goals',
          1500,
          'Stay Motivated with Family Groups',
          2000,
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
      />
    </Box>
  );
};

export default Typing;
