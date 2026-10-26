import Hero from './Pages/Landing/Hero.jsx'
import Status from './Pages/Landing/Status.jsx'
import Products from './Pages/Landing/Products.jsx'
import FeaturedProducts from './Pages/Landing/Featured_Products.jsx'
import Schemes from './Pages/Landing/Schemes.jsx'
import Schedule from './Pages/Landing/Schedule.jsx'
import Calculator from './Pages/Landing/Calculator.jsx'
import Footer from './Pages/Landing/Footer.jsx'
import WhatsApp from './Pages/Landing/Whatsapp.jsx'
import ProductsPage from './Pages/ProductsPage.jsx'

function App() {
  if (window.location.pathname === '/products') {
    return <ProductsPage />
  }

  return (
    <>
      <Hero />
      <Status />
      <Products />
      <FeaturedProducts />
      <Schedule />
      <Schemes />
      <Calculator />
      <Footer />
      <WhatsApp />
    </>
  )
}

export default App
