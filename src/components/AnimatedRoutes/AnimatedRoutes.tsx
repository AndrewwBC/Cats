import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../Routes/HomePage'
import Login from '../Routes/Login/Login'
import Register from '../Routes/Register'
import { AnimatePresence } from 'framer-motion'
import { ForgotPassword } from '../FormComponents/Input/styles'
import NewPassword from '../Routes/NewPassword'
import ValidateEmail from '../Routes/ValidateEmail'
import GeneralFeed from '../Routes/GeneralFeed'
import UserPage from '../Routes/UserPage'
import Welcome from '../Routes/Welcome'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route key={'homepage'} path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Forgotpassword" element={<ForgotPassword />} />
        <Route path="/newpassword/:email" element={<NewPassword />} />
        <Route path="/validateemail/:token" element={<ValidateEmail />} />
        <Route path="/generalfeed" element={<GeneralFeed />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
