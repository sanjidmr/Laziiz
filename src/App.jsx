import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import CheckoutPage from './components/CheckoutPage';
import Reservation from './pages/Reservation';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import ProductDetails from './pages/ProductDetails';
import { BackToTop, WhatsAppButton } from './components/FloatingButtons';
import CartSidebar from './components/CartSidebar';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MobileStickyOrder() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-40 pointer-events-none">
      {/* Space for sticky content if needed */}
    </div>
  );
}

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-black text-white">
          <Navbar onOpenCart={() => setIsCartOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faq" element={<FAQ />} />
              {/* Product ID matching route */}
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <WhatsAppButton />
          <MobileStickyOrder />
          <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;