import { useState } from 'react'
import './index.css'
import Header from './Components/HeaderFooter/Header'
import Footer from './Components/HeaderFooter/Footer'
import Slider from './Components/Slider/Slider'
import NewAnime from './Components/NewAnime/NewAnime'
import TrendingAnimeSlider from './Components/TrendingAnimeSlider/TrendingAnimeSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Slider/>
    <TrendingAnimeSlider/>
    <NewAnime/>
    <Footer/>
    </>
  )
}

export default App
