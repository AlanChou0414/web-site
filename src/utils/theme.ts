import { ThemeComponentProps, defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: 'system',
    useSystemColorMode: true,
  },
  styles: {
    global: (props: ThemeComponentProps) => ({
      'html body': {
        padding: 0,
        margin: 0,
        minWidth: '1440px',
        fontSize: 'md',
        color: props.colorMode === 'dark' ? 'gray.50' : 'gray.900',
        background: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      }
    })
  },
  components: {
    Container: defineStyleConfig({
      sizes: {
        md: defineStyle({
          maxW: '1xl',
          padding: '0px 60px 0px 60px'
        }),
        sm: defineStyle({
          maxW: 'sm'
        })
      },
      defaultProps: {
        size: 'md',
      }
    }),
  },
  semanticTokens: {
    colors: {
      success: {
        default: 'green.400',
        _dark: 'blue.400',
        _light: 'green.400'
      },
      error: 'red.500',
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
        _light: 'gray.900'
      },
      background: {
        default: 'blackAlpha.800',
        _dark: 'gray.400',
        _light: 'blackAlpha.800'
      },
      menu_hover: {
        default: 'yellow.300',
        _dark: 'teal.200',
        _light: 'yellow.300'
      },
      themeModeBtn: {
        default: 'gray.400',
        _dark: 'yellow.400',
        _light: 'gray.400'
      },
      themeModeBth_hover: {
        default: 'gray.300',
        _dark: 'yellow.300',
        _light: 'gray.300'
      },
    },
  },
})

export default theme