import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I am miki
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            除毛師 Mikimi (Artist / Designer)
          </Heading>
        </Box>
      </Box>
      <div>Hello</div>
    </Container>
  )
}

export default Page
