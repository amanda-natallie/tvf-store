import { ThemeProvider } from '@emotion/react'
import { defaultTheme as theme, GlobalStyles } from 'theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation from 'routes'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <Navigation />
    </ThemeProvider>
  )
}

export default App
