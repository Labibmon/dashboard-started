import { ThemeContext } from '@/config'
import type { AppProps } from 'next/app'
import { useTheme } from '@/hooks/use-theme'

import colors from '@/__mocks__/colors'
import dataConfig from '@/__mocks__/config'
import font from '@/__mocks__/font'

// import '@/styles/_global.scss'

export default function App({ Component, pageProps }: AppProps) {
  const data = dataConfig
  useTheme(colors)

  return (
    <ThemeContext.Provider 
      value={{
        data,
        font,
        colors
      }}
    >
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
