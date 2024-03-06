import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Center } from "@chakra-ui/react";
import { useThemeHook } from '@utils/common';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useThemeHook();

  return (
    <Box display='flex' alignItems='center' justifyContent='space-evenly'
      bg='background' borderRadius='8' h='10' pl='300' pr='300' position='relative'
      boxShadow={`0px 2px 10px 2px ${colorMode === 'light' ? '#000020' : '#ffffff70'}`}>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }} onClick={() => navigate('/')}>PROJECT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }} onClick={() => navigate('/about')}>ABOUT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }} onClick={() => navigate('/contact')}>CONTACT</Center>
      <Center color='White' fontWeight='900' fontSize='lg'
        cursor='pointer' _hover={{
          transition: '.5s',
          color: 'menu_hover'
        }} onClick={() => navigate('/resume')}>RESUME</Center>
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

export default NavigationBar