import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Star, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ChevronRight,
  ArrowRight,
  Sun,
  Moon,
  Scissors,
  Heart,
  Ruler,
  Sparkles
} from 'lucide-react';
import { COLLECTION, CollectionItem, Feedback, SERVICES } from './constants';

interface CartItem extends CollectionItem {
  quantity: number;
}

// --- Components ---

const LazyImage = ({ src, alt, className, imgClassName }: { src: string; alt: string; className?: string; imgClassName?: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${imgClassName} transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};

const Navbar = ({ 
  isDark, 
  toggleTheme, 
  cartCount, 
  onOpenCart 
}: { 
  isDark: boolean; 
  toggleTheme: () => void;
  cartCount: number;
  onOpenCart: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Collection', href: '#collection' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'bg-paper/90 dark:bg-night/90 backdrop-blur-md py-4 border-b border-gold/10 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-serif font-bold tracking-widest text-gold hover:text-gold-light transition-colors">
          LACEON AK STICHES
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gold/20">
            <button 
              onClick={toggleTheme}
              className="p-2 hover:text-gold transition-colors rounded-full hover:bg-gold/10"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={onOpenCart}
              className="p-2 hover:text-gold transition-colors rounded-full hover:bg-gold/10 relative"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-night text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={onOpenCart}
            className="p-2 text-gold relative"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-night text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={toggleTheme}
            className="p-2 text-gold"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-gold" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-paper dark:bg-night border-b border-gold/10 md:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif tracking-wide hover:text-gold flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <LazyImage 
          src="https://images.unsplash.com/photo-1594750825015-39c7a441f480?q=80&w=1920&auto=format&fit=crop" 
          alt="Vintage Fashion" 
          className="w-full h-full"
          imgClassName="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/40 to-night"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-gold uppercase tracking-[0.6em] text-[10px] mb-6 block font-bold">Laceon AK Stiches</span>
          <h1 className="text-6xl md:text-9xl font-serif mb-8 leading-[0.9] tracking-tighter">
            Timeless <br />
            <span className="italic text-gold-light font-light">Elegance</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            A curated sanctuary of authentic antique female clothing, celebrating heritage and the art of fine craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a 
              href="#collection" 
              className="group relative px-12 py-5 bg-gold text-night font-bold tracking-widest uppercase text-[10px] overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10">Shop Collection</span>
              <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a 
              href="#about" 
              className="px-12 py-5 border border-gold/30 text-gold font-bold tracking-widest uppercase text-[10px] hover:bg-gold/5 transition-all duration-500"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const ProductCard = ({ 
  item, 
  onImageClick, 
  onAddToBag 
}: { 
  item: CollectionItem; 
  onImageClick?: (item: CollectionItem) => void;
  onAddToBag: (item: CollectionItem) => void;
}) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-theme-card border-theme overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-gold/10 transition-all duration-700"
    >
      <div 
        className="aspect-[4/5] overflow-hidden relative cursor-pointer"
        onClick={() => onImageClick?.(item)}
      >
        <LazyImage 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full"
          imgClassName="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-night/0 group-hover:bg-night/20 transition-colors duration-500"></div>
        <div className="absolute bottom-6 left-6 right-6 translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToBag(item);
            }}
            className="w-full py-5 bg-gold text-night text-[10px] font-bold uppercase tracking-widest hover:bg-gold-light transition-colors rounded-xl shadow-2xl"
          >
            Add to Bag
          </button>
        </div>
      </div>
      <div className="p-10 text-center">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold mb-4 block opacity-70">{item.category}</span>
        <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors duration-500">{item.name}</h3>
        <p className="text-gold font-serif text-xl">{item.price.toLocaleString()} Shs</p>
      </div>
    </motion.div>
  );
};

const Cart = ({ 
  isOpen, 
  onClose, 
  items, 
  onRemove, 
  onUpdateQuantity 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
            className="fixed top-0 right-0 h-full w-full max-w-md bg-paper dark:bg-night z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-gold/10 flex justify-between items-center">
              <h2 className="text-2xl font-serif">Your Bag</h2>
              <button onClick={onClose} className="p-2 hover:text-gold transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag size={64} className="text-gold/20" />
                  <p className="text-theme-muted font-light">Your bag is empty.</p>
                  <button 
                    onClick={onClose}
                    className="text-gold uppercase tracking-widest text-[10px] font-bold border-b border-gold pb-1"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 rounded-xl overflow-hidden flex-shrink-0 border border-gold/10">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-serif text-lg leading-tight">{item.name}</h3>
                          <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-gold transition-colors">
                            <X size={16} />
                          </button>
                        </div>
                        <p className="text-gold text-sm mt-1">{item.price.toLocaleString()} Shs</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gold/20 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-gold/10 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:bg-gold/10 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-gold/10 space-y-6">
                <div className="flex justify-between items-center text-xl font-serif">
                  <span>Total</span>
                  <span className="text-gold">{total.toLocaleString()} Shs</span>
                </div>
                <button className="w-full py-5 bg-gold text-night font-bold uppercase tracking-widest text-[10px] hover:bg-gold-light transition-all rounded-xl shadow-xl">
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ImageZoomModal = ({ item, onClose }: { item: CollectionItem | null; onClose: () => void }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-night/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gold transition-colors p-2"
        >
          <X size={32} />
        </button>
        
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-gold/10">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-auto max-h-[80vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="mt-6 text-center">
          <span className="text-gold uppercase tracking-[0.4em] text-[10px] mb-2 block font-bold">{item.category}</span>
          <h3 className="text-2xl md:text-4xl font-serif text-white mb-2">{item.name}</h3>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">{item.description}</p>
          <p className="text-gold font-serif text-xl mt-4">{item.price.toLocaleString()} Shs</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Scissors: <Scissors size={32} />,
    Heart: <Heart size={32} />,
    Ruler: <Ruler size={32} />,
    Sparkles: <Sparkles size={32} />,
  };

  return (
    <section id="services" className="py-24 bg-theme-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Our Expertise
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Exquisite Services</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-theme-card border border-gold/10 rounded-[2.5rem] hover:border-gold/30 transition-all duration-500 group text-center"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-8 mx-auto group-hover:bg-gold group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-theme-muted font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Shop = ({ 
  onImageClick, 
  onAddToBag 
}: { 
  onImageClick: (item: CollectionItem) => void;
  onAddToBag: (item: CollectionItem) => void;
}) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Dresses', 'Gowns', 'Accessories', 'Evening Wear', 'Bridal', 'Modern', 'Day Wear', 'Couture'];

  const filteredItems = filter === 'All' 
    ? COLLECTION 
    : COLLECTION.filter(item => item.category === filter || (filter === 'Dresses' && item.category === 'Cocktail') || (filter === 'Gowns' && item.category === 'Evening Wear'));

  return (
    <section id="collection" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">The Collection</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-10"></div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all duration-300 border-b-2 font-medium ${filter === cat ? 'border-gold text-gold' : 'border-transparent text-slate-400 hover:text-gold'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProductCard 
                  item={item} 
                  onImageClick={onImageClick} 
                  onAddToBag={onAddToBag}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-theme-section relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Our Heritage</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Crafting Stories Through <span className="italic">Antique Stitches</span></h2>
          <p className="text-theme-muted mb-6 leading-relaxed font-light text-lg">
            At Laceon AK Stiches, we believe that every garment carries a soul. Our journey began with a passion for preserving the exquisite artistry of bygone eras—from the structured elegance of the Victorian period to the rebellious spirit of the Roaring Twenties.
          </p>
          <p className="text-theme-muted mb-10 leading-relaxed font-light text-lg">
            Each piece in our collection is hand-selected for its authenticity, craftsmanship, and unique character. We don't just sell clothes; we offer you a chance to wear a piece of history, meticulously restored to its former glory.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-gold text-4xl font-serif mb-2">100%</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Authentic Vintage</p>
            </div>
            <div>
              <h4 className="text-gold text-4xl font-serif mb-2">Hand</h4>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Restored Pieces</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="border border-gold/30 p-6 relative z-10 rounded-3xl overflow-hidden bg-white dark:bg-slate-dark shadow-2xl">
            <LazyImage 
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop" 
              alt="Craftsmanship" 
              className="w-full h-auto"
              imgClassName="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 border-l border-b border-gold/20 -z-0 rounded-bl-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('laceon_feedback');
    if (saved) {
      setFeedbacks(JSON.parse(saved));
    } else {
      const initial = [
        { id: '1', name: 'Eleanor Vance', rating: 5, comment: 'The Victorian gown I purchased is absolutely breathtaking. The quality is better than I imagined!', date: new Date().toLocaleDateString() },
        { id: '2', name: 'Clara Barton', rating: 4, comment: 'Beautiful pieces and excellent customer service. The delivery was slightly delayed but worth the wait.', date: new Date().toLocaleDateString() }
      ];
      setFeedbacks(initial);
      localStorage.setItem('laceon_feedback', JSON.stringify(initial));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newFeedback: Feedback = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString()
      };
      
      const updated = [newFeedback, ...feedbacks];
      setFeedbacks(updated);
      localStorage.setItem('laceon_feedback', JSON.stringify(updated));
      setFormData({ name: '', rating: 5, comment: '' });
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black border-t border-gold/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Contact Us</h2>
          <p className="text-gold uppercase tracking-[0.4em] text-xs">Get in touch or share your story</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Email</h4>
                  <p className="text-theme-muted text-sm">hello@laceonak.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gold/10 rounded-2xl text-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Phone</h4>
                  <p className="text-theme-muted text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="bg-theme-card p-10 rounded-[2.5rem] border border-gold/10 shadow-2xl">
              <h3 className="text-2xl font-serif mb-8 text-gold">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-gold/30 py-3 focus:border-gold outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Rating</label>
                    <div className="flex gap-2 py-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button 
                          key={num}
                          type="button"
                          onClick={() => setFormData({...formData, rating: num})}
                          className={`transition-all transform hover:scale-110 ${formData.rating >= num ? 'text-gold' : 'text-slate-300 dark:text-slate-700'}`}
                        >
                          <Star size={24} fill={formData.rating >= num ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full bg-transparent border border-gold/20 rounded-2xl p-4 focus:border-gold outline-none transition-colors resize-none"
                    placeholder="Tell us about your experience..."
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-light transition-all disabled:opacity-50 rounded-2xl shadow-xl transform hover:-translate-y-1"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Testimonials List */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-gold"></span>
              Client Stories
            </h3>
            <div className="space-y-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {feedbacks.map((fb) => (
                  <motion.div 
                    key={fb.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-theme-card border border-gold/5 shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-xl font-serif">{fb.name}</h4>
                        <div className="flex text-gold mt-2 gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} fill={i < fb.rating ? 'currentColor' : 'none'} />
                          ))}
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">{fb.date}</span>
                    </div>
                    <p className="text-theme-muted italic font-light leading-relaxed text-lg">"{fb.comment}"</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl font-serif text-gold mb-6 tracking-widest">LACEON AK STICHES</h2>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed font-light">
              Preserving the elegance of history through authentic antique fashion. Join our community of vintage enthusiasts.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-500 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white mb-8">Quick Links</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#collection" className="hover:text-gold transition-colors">Collection</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] text-white mb-8">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Subscribe to receive updates on new arrivals and exclusive offers.</p>
            <div className="flex border-b border-gold/30 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent w-full text-sm outline-none placeholder:text-gray-700"
              />
              <button className="text-gold hover:text-gold-light transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gold/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-gray-700">
            © 2026 Laceon AK Stiches. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-gray-700">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const addToBag = (item: CollectionItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-paper dark:bg-night selection:bg-gold selection:text-night transition-colors duration-700">
      <Navbar 
        isDark={isDarkMode} 
        toggleTheme={toggleTheme} 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      <Hero />
      <Shop onImageClick={setSelectedItem} onAddToBag={addToBag} />
      <Services />
      <About />
      <ContactUs />
      <Footer />

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <AnimatePresence>
        {selectedItem && (
          <ImageZoomModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
