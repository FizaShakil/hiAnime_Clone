import { useState } from 'react'
import './index.css'
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
