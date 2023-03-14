import './styles/global.css';
import Header from './components/GeneralComponents/Header';
import HomePage from './components/HomePage';
import Footer from './components/GeneralComponents/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
