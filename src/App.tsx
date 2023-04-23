import Header from './components/GeneralComponents/Header'
import Footer from './components/GeneralComponents/Footer'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/theme'
import useUser from './hooks/useUser'
import useTheme from './hooks/useTheme'
import GlobalStyles from './styles/globalStyles'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'
import SideMenu from './components/GeneralComponents/SideMenu/SideMenu'
import useUserCod from './hooks/useUserCod'

const App = () => {
  const { user, setUser } = useUser()
  const { setUserCod } = useUserCod()
  const { theme } = useTheme()

  if (localStorage.getItem('username'))
    setUser(localStorage.getItem('username'))
  if (localStorage.getItem('usercod'))
    setUserCod(localStorage.getItem('usercod'))

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          {user ? <SideMenu /> : <Header />}

          <GlobalStyles />
          <AnimatedRoutes />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
