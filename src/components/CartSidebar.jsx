import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, cartTotal, removeFromCart, updateQuantity, clearCart } = useApp();
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-dark-lighter z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-primary" />
                <h2 className="text-2xl font-display font-bold">Your Cart</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:text-primary transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag size={64} className="mb-4" />
                  <p className="text-lg font-display uppercase tracking-widest">Cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.taka} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-display font-bold">{item.name || item.Laziiz}</h4>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-600 hover:text-accent transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-primary font-display font-bold mb-3">   {item.offerPrice || item.price}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 bg-white/5 rounded-lg px-2 py-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary"><Minus size={14} /></button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-white/5 space-y-4">
                <div className="flex justify-between items-center text-xl font-display font-bold">
                  <span>Total</span>
                  <span className="text-primary"> ৳{cartTotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  Checkout Now <ArrowRight size={20} />
                </button>
                <button onClick={clearCart} className="w-full text-xs uppercase tracking-widest text-gray-500 hover:text-accent transition-colors font-bold">
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
