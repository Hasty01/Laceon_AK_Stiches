export interface CollectionItem {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface Feedback {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const COLLECTION: CollectionItem[] = [
  {
    id: 'g1',
    name: "Royal Purple Elegance",
    price: 350000,
    image: "images/vi_b.jpg",
    category: "Evening Wear",
    description: "Exquisite royal purple gown for grand evening occasions."
  },
  {
    id: 'g2',
    name: "Blush Pink Charm",
    price: 350000,
    image: "images/pitch_f.jpg",
    category: "Cocktail",
    description: "Delicate blush pink dress perfect for cocktail parties."
  },
  {
    id: 'g3',
    name: "Azure Floral Front",
    price: 350000,
    image: "images/blue_m.jpg",
    category: "Day Wear",
    description: "Bright azure floral dress for elegant day outings."
  },
  {
    id: 'g4',
    name: "Monochrome Patterns",
    price: 350000,
    image: "images/blv_f.jpg",
    category: "Modern",
    description: "Bold monochrome patterns for a contemporary vintage look."
  },
  {
    id: 'g5',
    name: "Gold Floral Accent",
    price: 350000,
    image: "images/gold.jpg",
    category: "Evening Wear",
    description: "Deep gold gown with beautiful floral accents."
  },
  {
    id: 'g6',
    name: "Ivory Floral Grace",
    price: 350000,
    image: "images/flo.jpg",
    category: "Bridal",
    description: "Graceful ivory floral gown for the classic bride."
  },
  {
    id: 'g7',
    name: "Crimson Statement",
    price: 350000,
    image: "images/flo_j.jpg",
    category: "Couture",
    description: "A bold crimson statement piece for high-fashion events."
  },
  {
    id: 'g8',
    name: "Satin Forest",
    price: 350000,
    image: "images/home.jpg",
    category: "Evening Wear",
    description: "Luxurious satin gown."
  },
  {
    id: 'g9',
    name: "Bridal Masterpiece",
    price: 350000,
    image: "images/bd.jpg",
    category: "Bridal",
    description: "A true masterpiece of bridal couture."
  },
  {
    id: 'g10',
    name: "Blue Gradient",
    price: 350000,
    image: "images/bg_f.jpg",
    category: "Modern",
    description: "Vibrant gradient dress."
  },
  {
    id: 'g11',
    name: "Midnight Rose",
    price: 350000,
    image: "images/red_m.jpg",
    category: "Evening Wear",
    description: "Elegant midnight rose evening gown."
  },
  {
    id: 'g12',
    name: "Ruby Geometric",
    price: 350000,
    image: "images/black_f.jpg",
    category: "Modern",
    description: "Ruby red dress with geometric patterns."
  },
  {
    id: 'g13',
    name: "Pink Silk Gown",
    price: 350000,
    image: "images/pink.jpg",
    category: "Bridal",
    description: "Soft pink silk gown for a romantic look."
  },
  {
    id: 'g14',
    name: "Purple Chiffon Group",
    price: 350000,
    image: "images/gng.jpg",
    category: "Evening Wear",
    description: "Flowing purple chiffon gown."
  },
  {
    id: 'g15',
    name: "Lime Satin Grace",
    price: 350000,
    image: "images/dark_s.jpg",
    category: "Couture",
    description: "Unique lime green satin couture piece."
  },
  {
    id: 'g16',
    name: "Golden Mustard Flow",
    price: 350000,
    image: "images/gold_m.jpg",
    category: "Day Wear",
    description: "Warm golden mustard flowing dress."
  },
  {
    id: 'g17',
    name: "Green Monkey Print",
    price: 350000,
    image: "images/gr_m.jpg",
    category: "Modern",
    description: "Playful green monkey print dress."
  },
  {
    id: 'g18',
    name: "Peach Lace Wrap",
    price: 350000,
    image: "images/pitch_m.jpg",
    category: "Accessories",
    description: "Delicate peach lace wrap."
  },
  {
    id: 'g19',
    name: "Floral Cream Back",
    price: 350000,
    image: "images/fl_b.jpg",
    category: "Evening Wear",
    description: "Cream floral gown with stunning back detail."
  },
  {
    id: 'g20',
    name: "Floral Cream Front",
    price: 350000,
    image: "images/fl_f.jpg",
    category: "Evening Wear",
    description: "Elegant front view of the cream floral gown."
  },
  {
    id: 'g21',
    name: "Dusty Rose Flow",
    price: 350000,
    image: "images/red_f.jpg",
    category: "Day Wear",
    description: "Soft dusty rose flowing day dress."
  }
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
    gmail?: string;
  };
}

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Atwongyere Kate',
    role: 'Founder & Creative Director',
    image: '/images/tm.jpg',
    bio: 'With over 15 years of experience in vintage restoration and bespoke tailoring, Annet leads our creative vision.',
    socials: {
      instagram: 'https://instagram.com/laceonak',
      whatsapp: 'https://wa.me/+256760672702',
      gmail: 'mailto:hastyjoel1@gmail.com',
      linkedin: 'https://linkedin.com/in/annetkyomuhendo'
    }
  },
  {
    id: 't2',
    name: 'Joel Hasty',
    role: 'Head of Operations',
    image: '/images/joel2.jpg',
    bio: 'Joel ensures that every piece in our collection is meticulously curated and delivered with care.',
    socials: {
      instagram: 'https://instagram.com/hastyjoel',
      whatsapp: 'https://wa.me/256700000001',
      gmail: 'mailto:hastyjoel1@gmail.com',
      linkedin: 'https://linkedin.com/in/joelhasty'
    }
  },
  {
    id: 't3',
    name: 'Sarah Namuli',
    role: 'Master Tailor',
    image: 'https://picsum.photos/seed/sarah/400/500',
    bio: 'Sarah specializes in delicate lace restoration and intricate beadwork, bringing history back to life.',
    socials: {
      instagram: 'https://instagram.com/sarahstiches',
      whatsapp: 'https://wa.me/256700000002',
      gmail: 'mailto:sarah@laceonak.com'
    }
  }
];

export const SERVICES = [
  {
    title: "Bespoke Tailoring",
    description: "Custom-made garments tailored to your exact measurements and style preferences.",
    icon: "Scissors"
  },
  {
    title: "Bridal Couture",
    description: "Exquisite wedding gowns designed to make your special day truly unforgettable.",
    icon: "Heart"
  },
  {
    title: "Alterations",
    description: "Expert adjustments to ensure your favorite pieces fit perfectly.",
    icon: "Ruler"
  },
  {
    title: "Vintage Restoration",
    description: "Careful restoration of heirloom pieces to their former glory.",
    icon: "Sparkles"
  }
];
