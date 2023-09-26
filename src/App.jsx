import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login/Login'

import { ThemeContext } from './context/ThemeContext'
import { LoginProvider } from './context/LoginContext'

function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={
      {theme, setTheme, changeTheme}
    }>
      <LoginProvider>
        <Home />
        <Login />
      </LoginProvider>
    </ThemeContext.Provider>
  )
}

export default App
