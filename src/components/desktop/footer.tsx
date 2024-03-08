import { Box, Center, Divider, Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const FooterBar = () => {
  const navigate = useNavigate();

  return (
    <Box padding='50px 0px'>
      <Divider />
      <Grid gap={3} templateColumns='repeat(24, 1fr)' alignItems='center' paddingTop='50px'>
        <GridItem colSpan={12}>
          <Box><Image src="https://fakeimg.pl/600x100/e3e3e3" /></Box>
        </GridItem>
        <GridItem colSpan={8}>
          <HStack spacing='50px'>
            <Center cursor='pointer' onClick={() => navigate('/')}>LINE</Center>
            <Center cursor='pointer' onClick={() => navigate('/')}>EMAIL</Center>
            <Center cursor='pointer' onClick={() => navigate('/')}>GITHUB</Center>
            <Center cursor='pointer' onClick={() => navigate('/')}>LINKEDIN</Center>
          </HStack>
        </GridItem>
        <GridItem colSpan={4}>
          <Text textAlign='end'>Copyright © 2024 Alan</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default FooterBar