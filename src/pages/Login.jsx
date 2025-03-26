import React, { useState } from 'react';
import '../styles/index.css'
import '../styles/mediaquery.css'	
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import LoginForm from '../Components/LoginForm'
import SignUp from '../Components/SignUp'

const Login = () => {
  const [currentForm, setCurrentForm] = useState('login')

  const switchForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <>
    <Header />
      <div className="login-container">
        {currentForm === 'login' ? 
        (<LoginForm onSwitchForm={switchForm}/>) : (<SignUp onSwitchForm={switchForm}/>)
      }
      </div>
    <Footer />
    </>
  )
}

export default Login