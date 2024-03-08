import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Center, HStack, Image } from "@chakra-ui/react";
import { animated, useSpring } from '@react-spring/web';
import { useThemeHook } from '@utils/common';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useThemeHook();
  const [springs, api] = useSpring(() => ({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 500
  }), [])

  return (
    <Box as={animated.div} style={{ ...springs }} display='flex'
      alignItems='center' justifyContent='space-between' paddingTop='50px'>
      <Box>
        <Center cursor='pointer' onClick={() => navigate('/')}>
          <Image borderRadius='100' src="https://fakeimg.pl/30x30/e3e3e3" />
        </Center>
      </Box>
      <Box display='flex'>
        <HStack spacing='50px'>
          <Center cursor='pointer' onClick={() => navigate('/')}>PROJECT</Center>
          <Center cursor='pointer' onClick={() => navigate('/about')}>ABOUT</Center>
          <Center cursor='pointer' onClick={() => navigate('/more')}>MORE</Center>
          <Center color='themeModeBtn' cursor='pointer' _hover={{
            transition: '.5s',
            color: 'themeModeBth_hover'
          }} onClick={toggleColorMode}>
            {colorMode === 'light'
              ? <MoonIcon boxSize='5' />
              : <SunIcon boxSize='5' />}
          </Center>
        </HStack>
      </Box>
    </Box>
  )
}

export default NavigationBar