import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"

const DesktopAbout = () => {
  return (
    <Container maxW='container.xl'>
      <Box className='animate__animated animate__fadeInUp'>
        <h1>DesktopAbout</h1>
      </Box>
      <NavigationBar />
    </Container>
  )
}

export default DesktopAbout