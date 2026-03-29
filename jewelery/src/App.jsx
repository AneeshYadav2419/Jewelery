import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import ShopCategory from './components/ShopCategory'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Banner from './components/Banner'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ShopCategory />
      <Products />
      <Banner />
      <Footer />
      <Routes>
         <Route path="/category/:name" element={<h1>Category Page</h1>} />
      </Routes>

    </div>
  )
}

export default App