import { useState } from 'react'
 
import './App.css'

import { ThemeContext } from './context/ThemeContext'
import Home from './components/Home'
import Login from './components/Login/Login'

function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={
      {theme, setTheme, changeTheme}
    }>
      <Home />
      <Login />
    </ThemeContext.Provider>
  )
}

export default App
