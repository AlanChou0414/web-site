import { Box, Container } from "@chakra-ui/react"
import NavigationBar from "@components/desktop/navigation"
import { animated, useSpring } from "@react-spring/web"

const DesktopMore = () => {
  const [springs, api] = useSpring(() => ({
    from: { x: -100, opacity: 0 },
    to: { x: 0, opacity: 1 }
  }), [])

  return (
    <Container>
      <NavigationBar />
      <Box as={animated.div} style={{ ...springs }}>
        <p>DesktopMore</p>
      </Box>
    </Container>
  )
}

export default DesktopMore