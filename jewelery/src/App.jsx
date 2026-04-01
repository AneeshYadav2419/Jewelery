// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/HeroSection'
// import ShopCategory from './components/ShopCategory'
// import { Route, Routes } from 'react-router-dom'
// import Products from './components/Products'
// import Banner from './components/Banner'
// import Footer from './components/Footer'
// import CategoryPage from './pages/CategoryPage'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <ShopCategory />
//       <Products />
//       <Banner />
//       <Footer />
//       <Routes>
//            <Route path="/category/:category" element={<CategoryPage />} />
//       </Routes>

//     </div>
//   )
// }

// export default App

import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import ShopCategory from './components/ShopCategory'
import Products from './components/Products'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import { Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Hero />
      <ShopCategory />
      <Products />
      <Banner />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />

      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;