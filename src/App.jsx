import Footer from './components/Footer'
import Hero from './components/SignUp'
import { Route, Routes } from 'react-router-dom'
import ThankYou from './components/ThankYou'
import { ThemeContext } from './ThemeContext'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState("")

  return (
    <>
      <ThemeContext.Provider value={{ input, setInput }}>
        <Routes>
          <Route index element={<Hero />} />
          <Route path='thankyou' element={<ThankYou />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
