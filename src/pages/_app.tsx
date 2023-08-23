import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export interface ThemeInterface {
  colors: {
    primary: string
    secondary: string
    warning: string
    danger: string
    info: string
  },
  size: {
    xs: string
    sm: string
    md: string
    lg: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
    secondary: '#000000',
    warning: '',
    danger: '',
    info: ''
  },
  size: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}