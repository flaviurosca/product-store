import { Box, Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Center p={4} mt={4}>
      <VStack spacing={6} textAlign="center" maxW="3xl">
        <Box fontFamily="monospace" fontSize="xs" whiteSpace="pre-wrap">
          {String.raw`
                         /~\                 
                        |o o)   We're doomed!
                        _\=/_                
        ___        #   /  _  \   #           
       /() \        \\//|/.\|\\//            
     _|_____|_       \/  \_/  \/             
    | | === | |         |\ /|                
    |_|  O  |_|         \_ _/                
     ||  O  ||          | | |                
     ||__*__||          | | |                
    |~ \___/ ~|         []|[]                
    /=\ /=\ /=\         | | |                
____[_]_[_]_[_]________/_]_[_\_______________
          `}
        </Box>
        <Heading fontSize="2xl">
          404 - This is not the page you're looking for
        </Heading>
        <Text fontSize="md">
          You’ve wandered off the map, young padawan. Use the Force to return to
          safety.
        </Text>
        <Link to="/">
          <Button colorScheme="blue" size="lg">
            Return to Base
          </Button>
        </Link>
      </VStack>
    </Center>
  );
};

export default NotFound;
