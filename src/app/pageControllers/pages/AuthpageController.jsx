import { Route, Routes } from "react-router-dom"
import Login from "./auth/LoginPage"
import Signup from "./auth/SignupPage"
import ForgotPassword from "./auth/ForgotPassword"

const AuthpageController = () => {
  return (
    <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="forgotpassword" element={<ForgotPassword/>}/>
        <Route/>
    </Routes>
  )
}

export default AuthpageController