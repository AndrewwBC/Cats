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

const App = () => {
  const { user, setUser } = useUser()
  const { theme } = useTheme()

  let token = localStorage.getItem('token')
  console.log(token)
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
          {token ? <SideMenu /> : <Header />}
          <GlobalStyles />
          <AnimatedRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
