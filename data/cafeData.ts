export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isJainAvailable?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  image?: string;
}

export interface Outlet {
  id: string;
  name: string;
  tagline: string;
  address: string;
  area: string;
  timing: string;
  phone: string;
  googleRating: number;
  totalReviews: number;
  seatingVibe: string;
  speciality: string;
  mapUrl: string;
  image: string;
  gallery: string[];
  zones: string[];
}

export interface Review {
  id: string;
  author: string;
  source: 'Google' | 'Zomato' | 'Justdial' | 'Instagram';
  rating: number;
  date: string;
  comment: string;
  tag?: string;
  outletName?: string;
}

export interface InstagramReel {
  id: string;
  title: string;
  author: string;
  url: string;
  embedUrl: string;
  caption: string;
}

export interface JamEvent {
  id: string;
  title: string;
  day: string;
  date: string;
  time: string;
  outlet: string;
  performer: string;
  genre: string;
  description: string;
  image: string;
  slotsOpen: boolean;
}

export const INSTAGRAM_HANDLE = "@beantherebharat";
export const INSTAGRAM_URL = "https://www.instagram.com/beantherebharat/";

export const OUTLETS: Outlet[] = [
  {
    id: "pratap-nagar",
    name: "BEAN THERE ?? — Pratap Nagar",
    tagline: "Grounded open-air pebble courtyard with private bamboo cabins",
    address: "170-Ch- 2/12, 13, Sector 17, Near Mewar Apartments & Rawat Public School, Pratap Nagar",
    area: "Pratap Nagar, Jaipur",
    timing: "10:00 AM – 11:00 PM (Everyday)",
    phone: "+91 98290 12345",
    googleRating: 4.4,
    totalReviews: 850,
    seatingVibe: "Bamboo Reed Cabins & Pebble Floor Courtyard",
    speciality: "Hazelnut Cold Brews & Tandoori Toasties under string fairy lights",
    mapUrl: "https://maps.google.com/?q=Bean+There+Cafe+Pratap+Nagar+Jaipur",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
    ],
    zones: ["Bamboo Private Pod", "Open Pebble Courtyard", "Acoustic Stage Front", "Low Wooden Bench Area"]
  },
  {
    id: "jagatpura",
    name: "BEAN THERE ?? Velvet — Jagatpura",
    tagline: "Student friendly rustic hideout with foosball & cozy warm wood seating",
    address: "Plot No. 45, Near SKIT College Road, Budhsinghpura, Jagatpura",
    area: "Jagatpura, Jaipur",
    timing: "10:30 AM – 11:30 PM (Everyday)",
    phone: "+91 98291 67890",
    googleRating: 4.3,
    totalReviews: 620,
    seatingVibe: "Warm Timber Frames & Gaming Lounge",
    speciality: "Creamy Alfredo Pasta & Irish Cold Coffee for study hangouts",
    mapUrl: "https://maps.google.com/?q=Bean+There+Velvet+Jagatpura+Jaipur",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    ],
    zones: ["Study Cabin with Power Outlets", "Foosball & Board Games Pod", "Bamboo Lattice Corner", "Outdoor Terrace Table"]
  },
  {
    id: "mansarovar",
    name: "BEAN THERE ?? Tritiya — Mansarovar",
    tagline: "Green garden terrace with weekend acoustic jam sessions near City Park",
    address: "Sector 8, VT Road, Near City Park Entrance, Mansarovar",
    area: "Mansarovar, Jaipur",
    timing: "11:00 AM – 11:00 PM (Everyday)",
    phone: "+91 98292 45678",
    googleRating: 4.5,
    totalReviews: 490,
    seatingVibe: "Open Air Rooftop & Jam Stage",
    speciality: "Wood-fired style Pizza & Sizzling Choco Lava under starry skies",
    mapUrl: "https://maps.google.com/?q=Bean+There+Tritiya+Mansarovar+Jaipur",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80"
    ],
    zones: ["Unplugged Stage View Table", "Garden Cobblestone Pod", "Bamboo Pergola Lounge", "Sunset Terrace Table"]
  }
];

export const MENU_CATEGORIES = [
  "All Items",
  "Cold Coffees & Frappes",
  "Hot Brews",
  "Sandwiches & Toasties",
  "Burgers & Wraps",
  "Pasta & Pizzas",
  "Snacks & Sides",
  "Shakes & Desserts"
];

export const MENU_ITEMS: MenuItem[] = [
  // Cold Coffees & Frappes
  {
    id: "m1",
    name: "Signature Hazelnut Cold Coffee",
    category: "Cold Coffees & Frappes",
    price: 160,
    description: "Our bestseller! Rich espresso blended with creamy milk, hazelnut syrup, and crushed ice, topped with cocoa dust.",
    isPopular: true,
    isChefSpecial: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m2",
    name: "Irish Cream Frappe",
    category: "Cold Coffees & Frappes",
    price: 170,
    description: "Creamy frappe infused with non-alcoholic Irish cream syrup and dark chocolate drizzle.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m3",
    name: "Classic Bean There Cold Coffee",
    category: "Cold Coffees & Frappes",
    price: 130,
    description: "Thick, smooth classic cold coffee whipped to perfection. Grounded flavor that started it all.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m4",
    name: "Iced Caramel Macchiato",
    category: "Cold Coffees & Frappes",
    price: 180,
    description: "Chilled espresso layers poured over vanilla milk, finished with buttery caramel drizzle.",
    isChefSpecial: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=700&q=80"
  },

  // Hot Brews
  {
    id: "m5",
    name: "Artisanal Cappuccino",
    category: "Hot Brews",
    price: 130,
    description: "Double shot of 100% Arabica espresso topped with velvet steamed milk foam and micro-art.",
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m6",
    name: "Belgian Dark Hot Chocolate",
    category: "Hot Brews",
    price: 150,
    description: "Pure melted dark chocolate whisked with whole milk, topped with toasted marshmallows.",
    isPopular: true,
    isChefSpecial: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=700&q=80"
  },

  // Sandwiches & Toasties
  {
    id: "m7",
    name: "Tandoori Paneer Grilled Sandwich",
    category: "Sandwiches & Toasties",
    price: 180,
    description: "Smoky tandoori marinated paneer cubes, crunchy capsicum, onion, and melted mozzarella inside jumbo multigrain bread.",
    isPopular: true,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m8",
    name: "Cheese Corn Capsicum Toastie",
    category: "Sandwiches & Toasties",
    price: 150,
    description: "Golden sweet corn kernels, diced green peppers, and double cheddar cheese toasted crisp on a frame iron grill.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m9",
    name: "Bean There Special Club Sandwich",
    category: "Sandwiches & Toasties",
    price: 190,
    description: "Triple-decker stacked sandwich loaded with grilled veggies, coleslaw, cheese slice, and house mint chutney.",
    isChefSpecial: true,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=700&q=80"
  },

  // Burgers & Wraps
  {
    id: "m10",
    name: "Crispy Veg Patty Burger with Fries",
    category: "Burgers & Wraps",
    price: 140,
    description: "Herb-seasoned potato & pea patty crisp-fried, served in a warm sesame bun with house sauce and seasoned fries.",
    isPopular: true,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m11",
    name: "Spicy Paneer Tikka Wrap",
    category: "Burgers & Wraps",
    price: 175,
    description: "Char-grilled paneer tikka, pickled red onions, and chipotle mayo tightly rolled in a soft whole wheat tortilla.",
    isChefSpecial: true,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80"
  },

  // Pasta & Pizzas
  {
    id: "m12",
    name: "Creamy Alfredo White Sauce Pasta",
    category: "Pasta & Pizzas",
    price: 220,
    description: "Penne pasta tossed in a rich, buttery garlic parmesan cream sauce with broccoli, zucchini, and sweet corn.",
    isPopular: true,
    isChefSpecial: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m13",
    name: "Fiery Arrabbiata Red Sauce Pasta",
    category: "Pasta & Pizzas",
    price: 210,
    description: "Penne pasta cooked in crushed Italian plum tomato sauce with garlic, chili flakes, fresh basil, and black olives.",
    spiceLevel: 3,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m14",
    name: "Classic Margherita Pizza (9\")",
    category: "Pasta & Pizzas",
    price: 240,
    description: "Hand-stretched thin crust topped with fresh pomodoro sauce, mozzarella cheese, olive oil drizzle, and basil leaves.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m15",
    name: "Veggie Supreme Garden Pizza (9\")",
    category: "Pasta & Pizzas",
    price: 280,
    description: "Loaded with bell peppers, sweet corn, mushrooms, red onions, jalapenos, and melted mozzarella.",
    isChefSpecial: true,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80"
  },

  // Snacks & Sides
  {
    id: "m16",
    name: "Peri Peri Seasoned Crinkle Fries",
    category: "Snacks & Sides",
    price: 120,
    description: "Extra crispy crinkle cut fries dusted generously with fiery African Peri Peri seasoning, served with garlic dip.",
    isPopular: true,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m17",
    name: "Loaded Cheese & Jalapeño Nachos",
    category: "Snacks & Sides",
    price: 165,
    description: "Crispy tortilla chips smothered in warm cheese sauce, fresh salsa, jalapeno slices, and sour cream.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m18",
    name: "Cheese Garlic Bread (4 pcs)",
    category: "Snacks & Sides",
    price: 140,
    description: "Thick rustic baguette slices brushed with garlic herb butter and baked golden under stringy mozzarella.",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1573140247614-681b2d045542?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m19",
    name: "Steamed Veg Momos with Spicy Chutney",
    category: "Snacks & Sides",
    price: 130,
    description: "Handmade dumpling pockets stuffed with minced cabbage, carrots, and paneer, served with red fiery garlic dip.",
    isPopular: true,
    spiceLevel: 2,
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m20",
    name: "Bean There Special Masala Maggi",
    category: "Snacks & Sides",
    price: 90,
    description: "Comfort in a bowl! Maggi noodles cooked with onion, tomatoes, green chilies, and our secret cafe secret spice blend.",
    isPopular: true,
    spiceLevel: 1,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=700&q=80"
  },

  // Shakes & Desserts
  {
    id: "m21",
    name: "Nutella Overload Waffle",
    category: "Shakes & Desserts",
    price: 170,
    description: "Freshly iron-baked Belgian waffle slathered with pure Nutella, dark chocolate chips, and a scoop of vanilla ice cream.",
    isPopular: true,
    isChefSpecial: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m22",
    name: "Sizzling Choco Lava Cake",
    category: "Shakes & Desserts",
    price: 140,
    description: "Warm chocolate cake with a molten liquid dark chocolate center, served with cold vanilla bean gelati.",
    isPopular: true,
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: "m23",
    name: "Triple Berry Thick Milkshake",
    category: "Shakes & Desserts",
    price: 160,
    description: "Thick creamy shake blended with real blueberries, raspberries, and strawberries, topped with whipped cream.",
    isJainAvailable: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Aarav Sharma",
    source: "Google",
    rating: 5,
    date: "3 days ago",
    comment: "Hands down the best cold coffee in Pratap Nagar! The bamboo seating cabins with small pebbles on the ground give such an earthy, grounded vibe. Perfect for hanging out after college lectures.",
    tag: "Pratap Nagar Flagship",
    outletName: "BEAN THERE ??"
  },
  {
    id: "r2",
    author: "Riya Sen",
    source: "Zomato",
    rating: 5,
    date: "1 week ago",
    comment: "Loved the Tandoori Paneer Grilled Sandwich and Hazelnut Cold Coffee. Very pocket-friendly and super aesthetic atmosphere. The open courtyard and ambient string lighting are gorgeous in the evening!",
    tag: "Pocket Friendly & Aesthetic",
    outletName: "BEAN THERE ?? Velvet"
  },
  {
    id: "r3",
    author: "Tanmay Verma",
    source: "Justdial",
    rating: 4.5,
    date: "2 weeks ago",
    comment: "Great spot for SKIT and Rawat college students. The bamboo lattice partitions offer genuine privacy for group discussions. Foosball table is an awesome addition too!",
    tag: "Student Hangout Spot",
    outletName: "BEAN THERE ?? Velvet"
  },
  {
    id: "r4",
    author: "Pooja Khandelwal",
    source: "Google",
    rating: 5,
    date: "1 month ago",
    comment: "Attended the Saturday Unplugged Jamming Session at the Mansarovar branch. Amazing indie acoustic music, wood-fired style pizza, and cozy wooden chairs. Feels so raw and grounded compared to artificial mall cafes.",
    tag: "Weekend Acoustic Jam",
    outletName: "BEAN THERE ?? Tritiya"
  },
  {
    id: "r5",
    author: "Jaipur Foodie Guide",
    source: "Instagram",
    rating: 5,
    date: "2 weeks ago",
    comment: "Jaipur’s hidden rustic gem! 🌿 Pebbles on the ground, bamboo cabins, & signature cold brews under ₹170. Must visit for authentic relaxed vibes.",
    tag: "Viral Mention",
    outletName: "All Outlets"
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: "reel1",
    title: "Friendship Day Jamming Session 🎸",
    author: "@beantherebharat",
    url: "https://www.instagram.com/reel/DbfP1UNzy-8/",
    embedUrl: "https://www.instagram.com/reel/DbfP1UNzy-8/embed/",
    caption: "Friendship Day acoustic jam under string lights at BEAN THERE ?? Pratap Nagar Courtyard."
  },
  {
    id: "reel2",
    title: "Weekend Courtyard Jamming Session 🎶",
    author: "@beantherebharat",
    url: "https://www.instagram.com/reel/Daxf7KqzFaz/",
    embedUrl: "https://www.instagram.com/reel/Daxf7KqzFaz/embed/",
    caption: "Unplugged acoustic guitar & cajon session on our open-air pebble floor."
  },
  {
    id: "reel3",
    title: "Brewing Love & Hazelnut Coffee ☕",
    author: "@beantherebharat",
    url: "https://www.instagram.com/reel/DZ8dNsYTbRk/",
    embedUrl: "https://www.instagram.com/reel/DZ8dNsYTbRk/embed/",
    caption: "Handcrafted hazelnut cold brews & cozy private bamboo cabin vibes."
  }
];

export const JAM_EVENTS: JamEvent[] = [
  {
    id: "e1",
    title: "Friendship Day Unplugged Jamming",
    day: "Saturday",
    date: "This Saturday",
    time: "6:30 PM – 9:30 PM",
    outlet: "Pratap Nagar (Flagship Courtyard)",
    performer: "The Jaipur Acoustic Collective",
    genre: "Indie Folk, Soft Rock & Sufi Acoustics",
    description: "Sit under the warm string lights on our pebble courtyard floor while local indie artists play unplugged acoustic guitar & cajon.",
    image: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
    slotsOpen: true
  },
  {
    id: "e2",
    title: "Open Mic Night — Poetry, Comedy & Vocals",
    day: "Sunday",
    date: "This Sunday",
    time: "7:00 PM – 9:30 PM",
    outlet: "Mansarovar (Tritiya Terrace Stage)",
    performer: "Open Stage for Jaipur Talent",
    genre: "Spoken Word Poetry, Acoustic Covers & Standup",
    description: "Grab the mic! Express your original poems, acoustic songs, or light comedy. 5-minute slots available for registered performers.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    slotsOpen: true
  },
  {
    id: "e3",
    title: "Sunset Vinyl & Cold Brew Lounge",
    day: "Friday",
    date: "Next Friday",
    time: "5:30 PM – 8:00 PM",
    outlet: "Jagatpura (Velvet Branch)",
    performer: "DJ Sam (Retro Vinyl Collector)",
    genre: "Lo-Fi Beats, Retro Vinyl & Ambient Blues",
    description: "Wind down your college/work week with smooth vinyl grooves, hazelnut cold brews, and foosball matches.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    slotsOpen: false
  }
];
