import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";

export const useThemeHook = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return { colorMode, toggleColorMode }
}
export const useCount = (initNum: number) => {
  const [count, setCount] = useState(initNum);
  return { count, setCount }
}