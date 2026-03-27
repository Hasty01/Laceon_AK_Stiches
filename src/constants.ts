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
    id: 'p1',
    name: 'Victorian Lace Gown',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage1/800/1200',
    category: 'Gowns',
    description: 'A stunning authentic Victorian-era gown with intricate lace detailing.'
  },
  {
    id: 'p2',
    name: 'Edwardian Tea Dress',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage2/800/1200',
    category: 'Dresses',
    description: 'Elegant white cotton tea dress from the early 1900s.'
  },
  {
    id: 'p3',
    name: 'Art Deco Silk Scarf',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage3/800/1200',
    category: 'Accessories',
    description: 'Hand-painted silk scarf featuring geometric Art Deco patterns.'
  },
  {
    id: 'p4',
    name: '1920s Flapper Dress',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage4/800/1200',
    category: 'Dresses',
    description: 'Authentic beaded flapper dress with fringe detailing.'
  },
  {
    id: 'p5',
    name: 'Velvet Evening Cape',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage5/800/1200',
    category: 'Accessories',
    description: 'Deep burgundy velvet cape with gold embroidery.'
  },
  {
    id: 'p6',
    name: 'Regency Era Ball Gown',
    price: 350000,
    image: 'https://picsum.photos/seed/vintage6/800/1200',
    category: 'Gowns',
    description: 'Empire waist silk gown inspired by the Regency period.'
  },
  {
    id: 'g1',
    name: "Royal Purple Elegance",
    price: 350000,
    image: "https://picsum.photos/seed/laceon1/800/1200",
    category: "Evening Wear",
    description: "Exquisite royal purple gown for grand evening occasions."
  },
  {
    id: 'g2',
    name: "Blush Pink Charm",
    price: 350000,
    image: "https://picsum.photos/seed/laceon2/800/1200",
    category: "Cocktail",
    description: "Delicate blush pink dress perfect for cocktail parties."
  },
  {
    id: 'g3',
    name: "Azure Floral Front",
    price: 350000,
    image: "https://picsum.photos/seed/laceon3/800/1200",
    category: "Day Wear",
    description: "Bright azure floral dress for elegant day outings."
  },
  {
    id: 'g4',
    name: "Monochrome Patterns",
    price: 350000,
    image: "https://picsum.photos/seed/laceon4/800/1200",
    category: "Modern",
    description: "Bold monochrome patterns for a contemporary vintage look."
  },
  {
    id: 'g5',
    name: "Emerald Floral Accent",
    price: 350000,
    image: "https://picsum.photos/seed/laceon5/800/1200",
    category: "Evening Wear",
    description: "Deep emerald gown with beautiful floral accents."
  },
  {
    id: 'g6',
    name: "Ivory Floral Grace",
    price: 350000,
    image: "https://picsum.photos/seed/laceon6/800/1200",
    category: "Bridal",
    description: "Graceful ivory floral gown for the classic bride."
  },
  {
    id: 'g7',
    name: "Crimson Statement",
    price: 350000,
    image: "https://picsum.photos/seed/laceon7/800/1200",
    category: "Couture",
    description: "A bold crimson statement piece for high-fashion events."
  },
  {
    id: 'g8',
    name: "Satin Forest Green",
    price: 350000,
    image: "https://picsum.photos/seed/laceon8/800/1200",
    category: "Evening Wear",
    description: "Luxurious forest green satin gown."
  },
  {
    id: 'g9',
    name: "Bridal Masterpiece",
    price: 350000,
    image: "https://picsum.photos/seed/laceon9/800/1200",
    category: "Bridal",
    description: "A true masterpiece of bridal couture."
  },
  {
    id: 'g10',
    name: "Sunset Gradient",
    price: 350000,
    image: "https://picsum.photos/seed/laceon10/800/1200",
    category: "Modern",
    description: "Vibrant sunset gradient dress."
  },
  {
    id: 'g11',
    name: "Midnight Rose",
    price: 350000,
    image: "https://picsum.photos/seed/laceon11/800/1200",
    category: "Evening Wear",
    description: "Elegant midnight rose evening gown."
  },
  {
    id: 'g12',
    name: "Ruby Geometric",
    price: 350000,
    image: "https://picsum.photos/seed/laceon12/800/1200",
    category: "Modern",
    description: "Ruby red dress with geometric patterns."
  },
  {
    id: 'g13',
    name: "Pink Silk Gown",
    price: 350000,
    image: "https://picsum.photos/seed/laceon13/800/1200",
    category: "Bridal",
    description: "Soft pink silk gown for a romantic look."
  },
  {
    id: 'g14',
    name: "Purple Chiffon Group",
    price: 350000,
    image: "https://picsum.photos/seed/laceon14/800/1200",
    category: "Evening Wear",
    description: "Flowing purple chiffon gown."
  },
  {
    id: 'g15',
    name: "Lime Satin Grace",
    price: 350000,
    image: "https://picsum.photos/seed/laceon15/800/1200",
    category: "Couture",
    description: "Unique lime green satin couture piece."
  },
  {
    id: 'g16',
    name: "Golden Mustard Flow",
    price: 350000,
    image: "https://picsum.photos/seed/laceon16/800/1200",
    category: "Day Wear",
    description: "Warm golden mustard flowing dress."
  },
  {
    id: 'g17',
    name: "Green Monkey Print",
    price: 350000,
    image: "https://picsum.photos/seed/laceon17/800/1200",
    category: "Modern",
    description: "Playful green monkey print dress."
  },
  {
    id: 'g18',
    name: "Peach Lace Wrap",
    price: 350000,
    image: "https://picsum.photos/seed/laceon18/800/1200",
    category: "Accessories",
    description: "Delicate peach lace wrap."
  },
  {
    id: 'g19',
    name: "Floral Cream Back",
    price: 350000,
    image: "https://picsum.photos/seed/laceon19/800/1200",
    category: "Evening Wear",
    description: "Cream floral gown with stunning back detail."
  },
  {
    id: 'g20',
    name: "Floral Cream Front",
    price: 350000,
    image: "https://picsum.photos/seed/laceon20/800/1200",
    category: "Evening Wear",
    description: "Elegant front view of the cream floral gown."
  },
  {
    id: 'g21',
    name: "Dusty Rose Flow",
    price: 350000,
    image: "https://picsum.photos/seed/laceon21/800/1200",
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
    name: 'Annet Kyomuhendo',
    role: 'Founder & Creative Director',
    image: 'https://picsum.photos/seed/annet/400/500',
    bio: 'With over 15 years of experience in vintage restoration and bespoke tailoring, Annet leads our creative vision.',
    socials: {
      instagram: 'https://instagram.com/laceonak',
      whatsapp: 'https://wa.me/256700000000',
      gmail: 'mailto:annet@laceonak.com',
      linkedin: 'https://linkedin.com/in/annetkyomuhendo'
    }
  },
  {
    id: 't2',
    name: 'Joel Hasty',
    role: 'Head of Operations',
    image: 'https://picsum.photos/seed/joel/400/500',
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
