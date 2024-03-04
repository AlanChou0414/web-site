import { ThemeComponentProps, defineStyleConfig, extendTheme } from "@chakra-ui/react";

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
        background: props.colorMode === 'dark' ? 'gray.900' : 'gray.50'
      }
    })
  },
  components: {
    Container: defineStyleConfig({
      defaultProps: {
        size: '2xl',
      }
    }),
  },
  semanticTokens: {
    colors: {
      error: 'red.500',
      success: {
        default: 'green.500',
        _dark: '',
        _light: ''
      },
      text: {
        default: 'gray.900',
        _dark: 'gray.50',
        _light: ''
      },
      background: {
        default: '',
        _dark: '',
        _light: ''
      }
    }
  }
})

export default theme