import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Router from "./routes/Router";

function App() {
  return (
    <div>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
    </div>
  );
}

export default App;
