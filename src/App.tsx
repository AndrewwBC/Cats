import Header from './components/GeneralComponents/Header';
import HomePage from './components/Routes/HomePage';
import Footer from './components/GeneralComponents/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Login from './components/Routes/Login';
import Register from './components/Routes/Register';
import ForgotPassword from './components/Routes/ForgotPassword';
import NewPassword from './components/Routes/NewPassword';
import ValidateEmail from './components/Routes/ValidateEmail';
import GeneralFeed from './components/Routes/GeneralFeed/GeneralFeed';
import ChangePassword from './components/Routes/ChangePassword/ChangePassword';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import useUser from './hooks/useUser';
import useTheme from './hooks/useTheme';
import GlobalStyles from './styles/globalStyles';

const App = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme ? darkTheme : lightTheme}>
          <Header user={user} />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Forgotpassword" element={<ForgotPassword />} />
            <Route path="/newpassword/:email" element={<NewPassword />} />
            <Route path="/validateemail/:token" element={<ValidateEmail />} />
            <Route path="/generalfeed" element={<GeneralFeed />} />
            <Route path="/changepassword" element={<ChangePassword />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
