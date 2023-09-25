import { useState } from 'react'
 
import './App.css'

import { ThemeContext } from './context/ThemeContext'
import Home from './components/Home'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <Home />
    </ThemeContext.Provider>
  )
}

export default App
