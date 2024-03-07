import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"

const DesktopAbout = () => {
  return (
    <Container maxW='container.xl'>
      <Box>
        <h1>DesktopAbout</h1>
      </Box>
      <NavigationBar />
    </Container>
  )
}

export default DesktopAbout