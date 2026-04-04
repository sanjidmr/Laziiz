import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  CheckCircle2, 
  Clock, 
  ChevronRight
} from 'lucide-react';
// FIXED: menuData-r bodole products import kora hoyeche
import { products } from '../components/products';
import { useApp } from '../context/AppContext';
import FoodCard from '../components/FoodCard';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  
  // FIXED: Plain JavaScript-e generics (<...>) soriye fela hoyeche
  const [activeTab, setActiveTab] = useState('description');

  // FIXED: ID match korar jonno String() use kora hoyeche
  const product = products.find(item => String(item.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 bg-black text-white px-6">
        <h2 className="text-3xl font-display font-bold mb-4 text-primary">Product Not Found</h2>
        <p className="text-gray-500 mb-8">Looking for ID: {id}</p>
        <Link to="/menu" className="bg-primary text-black px-10 py-3 rounded-full font-bold uppercase tracking-widest transition-transform hover:scale-105">
          Back to Menu
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(item => item.category === product.category && String(item.id) !== String(id))
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout'); // "Buy Now" checkout-e niye jabe
  };

  // Helper function to handle price numeric calculation
  const getNumericPrice = (priceStr) => {
    if (!priceStr) return 0;
    return parseFloat(priceStr.toString().replace(/[^\d.]/g, ''));
  };

  return (
    <div className="pt-24 pb-24 overflow-hidden bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link to="/menu" className="hover:text-primary transition-colors">Menu</Link>
          <ChevronRight size={14} />
          {/* FIXED: product.Laziiz er bodole product.name */}
          <span className="text-primary">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {(product.tag || product.isOffer) && (
              <div className="absolute top-8 left-8 bg-orange-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl animate-pulse">
                {product.tag || "Special Offer"}
              </div>
            )}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-full blur-[100px] opacity-20 pointer-events-none" />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold">{product.category}</span>
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-primary">
                <Star size={14} fill="currentColor" />
                {product.rating || "4.8"} (120+ Reviews)
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-6 mb-10">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-display font-bold text-primary">
                  {product.discountPrice || product.price}
                </span>
                {product.discountPrice && (
                  <span className="text-xl text-gray-500 line-through font-light">{product.price}</span>
                )}
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-gray-400 text-sm font-light">
                <Clock size={16} className="text-primary" />
                <span>Ready in 15-20 mins</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-white/10 mb-8">
              {['description', 'ingredients', 'nutrients'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-xs font-bold uppercase tracking-widest transition-all relative ${
                    activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="min-h-[120px] mb-10">
              <AnimatePresence mode="wait">
                {activeTab === 'description' && (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-gray-400 text-lg font-light leading-relaxed"
                  >
                    {product.description || "Freshly prepared with premium ingredients to satisfy your cravings."}
                  </motion.p>
                )}
                {activeTab === 'ingredients' && (
                  <motion.div
                    key="ing"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {(product.items || product.ingredients || ["Fresh Ingredients", "Secret Spices"]).map((ing, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-400">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span className="text-sm font-light uppercase tracking-wider">{ing}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
                {activeTab === 'nutrients' && (
                  <motion.div
                    key="nut"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-4 gap-4"
                  >
                    {product.nutrients ? Object.entries(product.nutrients).map(([key, value], i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                        <span className="block text-primary font-display font-bold text-xl">{value}</span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{key}</span>
                      </div>
                    )) : (
                      <p className="text-gray-500 text-sm italic col-span-4">Nutritional info available on request.</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-6 mt-auto">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center font-display font-bold text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primary transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>

              <div className="flex-1 flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 border border-primary/30 text-white hover:bg-primary hover:text-black transition-all rounded-2xl py-4 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-[10px]"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-primary text-black font-bold rounded-2xl py-4 flex items-center justify-center gap-3 shadow-lg shadow-primary/20 uppercase tracking-widest text-[10px]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="pt-24 border-t border-white/10">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-primary tracking-[0.4em] uppercase text-xs font-bold mb-4 block">More Flavors</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold">
                  You May <span className="text-primary italic">Also Like</span>
                </h2>
              </div>
              <Link to="/menu" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                View All <ChevronRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky Mobile Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full p-4 z-40 pointer-events-none">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-zinc-900 border border-white/10 p-4 rounded-[2rem] flex items-center justify-between gap-4 pointer-events-auto shadow-2xl"
        >
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Total</span>
            <span className="text-xl font-display font-bold text-primary">
              ৳{(getNumericPrice(product.discountPrice || product.price) * quantity).toFixed(0)}
            </span>
          </div>
          <button
            onClick={handleBuyNow}
            className="bg-primary text-black font-bold py-3 px-8 text-xs rounded-2xl flex-1 uppercase tracking-widest"
          >
            Buy Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}