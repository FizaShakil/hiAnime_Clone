import { useState } from 'react'
import './index.css'
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer'
import Slider from './Components/Slider/Slider'
import NewAnime from './Components/NewAnime/NewAnime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slider/>
    <NewAnime/>
    <Footer/>
    </>
  )
}

export default App
