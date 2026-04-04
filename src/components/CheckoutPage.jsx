import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Phone, 
  MapPin, 
  Navigation, 
  CreditCard, 
  CheckCircle2, 
  ArrowLeft, 
  ShoppingBag,
  Truck,
  MessageSquare,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useApp();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    area: '',
    note: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const deliveryFee = 60;
  const totalAmount = cartTotal + deliveryFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isFormValid = formData.fullName && formData.phone && formData.address && formData.area;

  const handleConfirmOrder = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setConfirmed(true);
    clearCart();
  };

  if (cart.length === 0 && !confirmed) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-gray-500 mb-6">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-display font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-400 mb-8 max-w-md">Looks like you haven&apos;t added anything to your cart yet. Go back to the menu to find something delicious.</p>
        <Link to="/menu" className="btn-primary px-10">
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-dark">
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.div
              key="checkout-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Form */}
              <div className="lg:col-span-7 space-y-8">
                <div className="flex items-center gap-4 mb-2">
                  <Link to="/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                  </Link>
                  <h1 className="text-4xl font-display font-bold">Checkout</h1>
                </div>

                <div className="glass-card p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                    <User className="text-primary" size={24} />
                    <h2 className="text-xl font-bold">Customer Details</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your name"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="01XXXXXXXXX"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Full Address</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-4 text-gray-500" size={18} />
                      <textarea 
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House no, Road no, Block..."
                        rows="3"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all resize-none"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Area / Thana</label>
                    <div className="relative">
                      <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="text" 
                        name="area"
                        value={formData.area}
                        onChange={handleInputChange}
                        placeholder="Enter area"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Optional Note</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-500" size={18} />
                      <textarea 
                        name="note"
                        value={formData.note}
                        onChange={handleInputChange}
                        placeholder="Any special instructions?"
                        rows="2"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className="glass-card p-8">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                    <CreditCard className="text-primary" size={24} />
                    <h2 className="text-xl font-bold">Payment Method</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bkash')}
                      className={`relative p-6 rounded-2xl border-2 transition-all text-left flex flex-col items-center justify-center gap-3 ${
                        paymentMethod === 'bkash' 
                        ? 'border-[#D12053] bg-[#D12053]/10 shadow-lg shadow-[#D12053]/20' 
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#D12053] rounded-xl flex items-center justify-center text-white font-bold text-sm">bKash</div>
                      <span className={`text-sm font-bold ${paymentMethod === 'bkash' ? 'text-[#D12053]' : 'text-gray-400'}`}>bKash</span>
                      {paymentMethod === 'bkash' && <CheckCircle2 className="absolute top-3 right-3 text-[#D12053]" size={18} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('nagad')}
                      className={`relative p-6 rounded-2xl border-2 transition-all text-left flex flex-col items-center justify-center gap-3 ${
                        paymentMethod === 'nagad' 
                        ? 'border-[#F7941D] bg-[#F7941D]/10 shadow-lg shadow-[#F7941D]/20' 
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="w-12 h-12 bg-[#F7941D] rounded-xl flex items-center justify-center text-white font-bold text-sm">Nagad</div>
                      <span className={`text-sm font-bold ${paymentMethod === 'nagad' ? 'text-[#F7941D]' : 'text-gray-400'}`}>Nagad</span>
                      {paymentMethod === 'nagad' && <CheckCircle2 className="absolute top-3 right-3 text-[#F7941D]" size={18} />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`relative p-6 rounded-2xl border-2 transition-all text-left flex flex-col items-center justify-center gap-3 ${
                        paymentMethod === 'cod' 
                        ? 'border-primary bg-primary/10 shadow-lg shadow-primary/20' 
                        : 'border-white/5 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                        <Truck size={24} />
                      </div>
                      <span className={`text-sm font-bold ${paymentMethod === 'cod' ? 'text-primary' : 'text-gray-400'}`}>Cash on Delivery</span>
                      {paymentMethod === 'cod' && <CheckCircle2 className="absolute top-3 right-3 text-primary" size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Summary */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-6">
                  <div className="glass-card p-8">
                    <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                      <ShoppingBag className="text-primary" size={24} />
                      <h2 className="text-xl font-bold">Order Summary</h2>
                    </div>

                    <div className="space-y-4 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center gap-4 group">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0">
                            <img src={item.image} alt={item.taka} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold text-sm line-clamp-1">{item.taka}</h4>
                            <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-sm">৳{(item.offerPrice || item.price) * item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 border-t border-white/5 pt-6">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Subtotal</span>
                        <span>৳{cartTotal}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Delivery Fee</span>
                        <span>৳{deliveryFee}</span>
                      </div>
                      <div className="flex justify-between text-xl font-display font-bold text-white pt-2 border-t border-white/5">
                        <span>Total</span>
                        <span className="text-primary">৳{totalAmount}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleConfirmOrder}
                      disabled={!isFormValid || loading}
                      className={`w-full mt-8 py-5 rounded-2xl font-display font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-3 ${
                        isFormValid && !loading
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]' 
                        : 'bg-white/5 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Processing...
                        </>
                      ) : (
                        <>
                          Confirm Order
                          <ChevronRight size={20} />
                        </>
                      )}
                    </button>
                    
                    {!isFormValid && (
                      <p className="text-[10px] text-center text-gray-500 mt-4 uppercase tracking-wider">
                        Please fill in all required fields to proceed
                      </p>
                    )}
                  </div>

                  <div className="glass-card p-6 flex items-center gap-4 border-primary/20">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Truck size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Fastest Delivery</p>
                      <p className="text-xs text-gray-500">Estimated time: 30-45 mins</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center py-20"
            >
              <div className="relative inline-block mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                  className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 relative z-10"
                >
                  <CheckCircle2 size={64} />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-primary rounded-full"
                />
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl font-display font-bold mb-6"
              >
                Your Order is <span className="primary-gradient italic">Confirmed!</span> 🎉
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-lg mb-12 max-w-md mx-auto leading-relaxed"
              >
                Thank you for choosing TAKA. We&apos;ve received your order and our chefs are already firing up the grill.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button 
                  onClick={() => navigate('/')}
                  className="btn-primary px-12 py-5"
                >
                  Back to Home
                </button>
                <button 
                  onClick={() => navigate('/menu')}
                  className="btn-outline px-12 py-5"
                >
                  Order More
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
