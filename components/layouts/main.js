import Head from 'next/head'
import { Box, Container, Button, useColorMode } from '@chakra-ui/react'
const Main = ({ children, router }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="main" pb={8}>
      <Head name="viewport" content="width=device-width, initial-scale=1" />
      <title> Miki - Web </title>
      <Container maxW="container.md" pt={14}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
        {children}
      </Container>
    </Box>
  )
}

export default Main
