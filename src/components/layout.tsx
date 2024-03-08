import { Center, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect } from 'react';

export const Loader = ({ count, setCount, end = 100, delay = 30, size }: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  end?: number;
  delay?: number;
  size?: number;
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount(count + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [count, delay, end, setCount]);

  return (
    <Center>
      <CircularProgress size={size} value={count} color='success' >
        <CircularProgressLabel>{count}%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  )
}