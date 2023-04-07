import './styles/global.css';
import Header from './components/GeneralComponents/Header';
import HomePage from './components/Routes/HomePage';
import Footer from './components/GeneralComponents/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Login from './components/Routes/Login';
import Register from './components/Routes/Register';
import ForgotPassword from './components/ForgotPassword';
import NewPassword from './components/Routes/NewPassword';
import ValidateEmail from './components/Routes/ValidateEmail';
import GeneralFeed from './components/Routes/GeneralFeed/GeneralFeed';
import ChangePassword from './components/Routes/ChangePassword/ChangePassword';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>
    </>
  );
};

export default App;
