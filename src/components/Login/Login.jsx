import React, { useContext } from 'react'
import './Login.css'


import { ThemeContext } from '../../context/ThemeContext'

const Login = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <div id='login' className={theme}>Login {theme}</div>
  )
}

export default Login