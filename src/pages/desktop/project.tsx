import { Box, Container, Heading } from "@chakra-ui/react";
import FooterBar from "@components/desktop/footer";
import NavigationBar from "@components/desktop/navigation";
import { animated, useSpring } from "@react-spring/web";

const DesktopProject = () => {
  const [springs, api] = useSpring(() => ({
    from: { y: 0, opacity: 1 },
    to: { y: 30, opacity: 0 },
    reverse: true,
    delay: 800,
  }), []);

  return (
    <Container>
      <NavigationBar />
      <Box as={animated.div} style={{ ...springs, transition: '.2s' }} paddingTop='300px'>
        <Heading as='h2' size='1xl'>Software Developer</Heading>
        <Heading as='h1' size='2xl'>Shenglun Chou</Heading>
      </Box>
      <FooterBar />
    </Container>
  )
}

export default DesktopProject