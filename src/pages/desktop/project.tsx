import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"
import { Loader } from "@components/layout"
import { useCount } from "@utils/common"

const DesktopProject = () => {
  const { count, setCount } = useCount(0);
  return (
    <Container maxW='container.xl'>
      <Loader count={count} setCount={setCount} />
      {
        count === 100 &&
        <Box className='animate__animated animate__fadeInUp'>
          <h1>DesktopProject</h1>
        </Box>
      }
      <NavigationBar />
    </Container>
  )
}

export default DesktopProject