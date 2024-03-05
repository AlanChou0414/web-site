import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Center, useColorMode } from "@chakra-ui/react";

export const NavigationBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display='flex' alignItems='center' justifyContent='space-evenly'
      bg='background' borderRadius='15' h='10' pl='300' pr='300' position='relative'>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }}>PROJECT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }}>ABOUT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }}>CONTACT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }}>RESUME</Center>
      <Center color='themeModeBtn' position='absolute' right='10'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'themeModeBth_hover'
        }} onClick={toggleColorMode}>
        {colorMode === 'light'
          ? <MoonIcon className='animate__animated animate__rotateIn' boxSize='5' />
          : <SunIcon className='animate__animated animate__rotateIn' boxSize='5' />}
      </Center>
    </Box>
  )
}