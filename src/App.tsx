import Header from './components/GeneralComponents/Header'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import useUser from './hooks/useUser'
import useTheme from './hooks/useTheme'
import GlobalStyles from './styles/globalStyles'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'
import SideMenu from './components/GeneralComponents/SideMenu/SideMenu'
import Footer from './components/GeneralComponents/Footer'

const App = () => {
  const { theme } = useTheme()

  return (
    <>
      <BrowserRouter>
          <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          {localStorage.getItem('token') ? <SideMenu /> : <Header />}
          <GlobalStyles />
          <AnimatedRoutes />
          {localStorage.getItem('token') ? null : <Footer />}
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
