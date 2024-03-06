import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"

const DesktopResume = () => {
  return (
    <Container maxW='container.xl'>
      <Box className='animate__animated animate__fadeInUp'>
        <h1>DesktopResume</h1>
      </Box>
      <NavigationBar />
    </Container>
  )
}

export default DesktopResume