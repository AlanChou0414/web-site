import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"

const DesktopMore = () => {
  return (
    <Container maxW='container.xl'>
      <Box>
        <h1>MobileMore</h1>
      </Box>
      <NavigationBar />
    </Container>
  )
}

export default DesktopMore