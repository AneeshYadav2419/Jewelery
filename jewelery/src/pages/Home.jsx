import Hero from '../components/HeroSection'
import ShopCategory from '../components/ShopCategory'
import Products from '../components/Products'
import Banner from '../components/Banner'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ShopCategory />
      <Products />
      <Banner />
    </motion.div>
  );
};

export default Home;
