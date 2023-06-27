import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from '../Routes/HomePage'
import Login from '../Routes/Login/Login'
import Register from '../Routes/Register'
import { AnimatePresence } from 'framer-motion'
import NewPassword from '../Routes/NewPassword'
import ValidateEmail from '../Routes/ValidateEmail'
import GeneralFeed from '../Routes/GeneralFeed'
import UserPage from '../Routes/UserPage'
import Welcome from '../Routes/Welcome'
import UserSettings from '../Routes/UserSettings/'
import ForgotPassword from '../Routes/ForgotPassword/'
import Diseases from '../Routes/Diseases'
import useUser from '../../hooks/useUser'
import About from '../Routes/About/About'
import Contact from '../Routes/Contact/Contact'
import Feedback from '../Routes/Feedback/Feedback'
import OtherUserPage from '../Routes/OtherUserPage/OtherUserPage'
import Adm from '../Routes/Adm/Adm'

const AnimatedRoutes = () => {
  const { user, setUser } = useUser()
  const location = useLocation()

  // const { data, isSuccess, isLoading } = useGetDatas()
  // if (!userData && isSuccess) setUserData(data)
  // console.log(data)

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route key={'/homepage'} path="/" element={<HomePage />} />
          <Route key={'/login'} path="/login" element={<Login />} />
          <Route key={'/register'} path="/register" element={<Register />} />
          <Route key={'/register'} path="/contact" element={<Contact />} />
          <Route
            key={'/forgotpassword'}
            path="/forgotpassword"
            element={<ForgotPassword />}
          />
          <Route
            key={'/newpassword/:emailHash'}
            path="/newpassword/:emailHash"
            element={<NewPassword />}
          />
          <Route
            key={'/validateeemail/:token'}
            path="/validateemail/:token"
            element={<ValidateEmail />}
          />
          <Route
            key={'/generalfeed'}
            path="/generalfeed"
            element={<GeneralFeed />}
          />
          <Route key={'/userfeed'} path="/userpage" element={<UserPage />} />
          <Route key={'/welcome'} path="/welcome" element={<Welcome />} />
          <Route
            key={'/usersettings'}
            path="/usersettings"
            element={<UserSettings />}
          />
          <Route key={'/diseases'} path="/diseases" element={<Diseases />} />
          <Route key={'/diseases'} path="/about" element={<About />} />
          <Route key={'/feedback'} path="/feedback" element={<Feedback />} />
          <Route
            key={'/user/:username'}
            path="/user/:username"
            element={<OtherUserPage />}
          />
          <Route key={'/dashboard'} path="/dashboard" element={<Adm />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
