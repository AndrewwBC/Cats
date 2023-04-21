import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../Routes/HomePage/HomePage'
import Login from '../Routes/Login/Login'
import Register from '../Routes/Register/Register'
import { AnimatePresence } from 'framer-motion'
import { ForgotPassword } from '../FormComponents/Input/styles'
import NewPassword from '../Routes/NewPassword/NewPassword'
import ValidateEmail from '../Routes/ValidateEmail/validateEmail'
import GeneralFeed from '../Routes/GeneralFeed/GeneralFeed'
import UserPage from '../Routes/UserPage/UserPage'


const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location} >
            <Route key={"homepage"} path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Forgotpassword" element={<ForgotPassword/>} />
            <Route path="/newpassword/:email" element={<NewPassword/>} />
            <Route path="/validateemail/:token" element={<ValidateEmail />} />
            <Route path="/generalfeed" element={<GeneralFeed />} />     
            <Route path="/userpage" element={<UserPage />} />    
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes