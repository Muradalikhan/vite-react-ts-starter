import * as React from 'react'
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/material'
import { themeOptions } from '~/theme'

export default function ThemeContext({ children }: { children: ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          mode,
          ...themeOptions.palette
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
