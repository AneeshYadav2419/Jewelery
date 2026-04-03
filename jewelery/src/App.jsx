

import Navbar from './components/Navbar'
import Hero from './components/HeroSection'
import ShopCategory from './components/ShopCategory'
import Products from './components/Products'
import Banner from './components/Banner'
import Footer from './components/Footer'
import CategoryPage from './pages/CategoryPage'
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'

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
        <Route path='/product/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<CartPage />}/>
        
      </Routes>

      <Footer />
    </div>
  );
};

export default App;