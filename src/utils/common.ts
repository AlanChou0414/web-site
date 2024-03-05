import { useColorMode } from "@chakra-ui/react";

export const useThemeHook = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return {
    colorMode,
    toggleColorMode
  }
}