export const BUSINESS_INFO = {
  name: "RAMJI BOAT SERVICES",
  tagline: "Enjoy a Beautiful Boat Ride in Varanasi!",
  hindiTagline: "काशी के पावन घाटों एवं माँ गंगा की अलौकिक नौका विहार",
  phone: "8299027010",
  phoneFormatted: "+91 8299027010",
  whatsappNumber: "918299027010",
  address: "Madarwan, Samneghat, Lanka, BHU, Varanasi, Uttar Pradesh - 221005",
  landmark: "Near BHU & Samneghat Bridge",
  pickupPoints: ["Samneghat (Base)", "Assi Ghat", "Dashashwamedh Ghat", "Namo Ghat", "Ravidas Ghat"],
  timings: "5:00 AM – 10:00 PM (Open All 7 Days)",
  email: "ramjiboatservicesvaranasi@gmail.com",
  rating: 4.9,
  totalReviews: 385,
  bannerImage: "/images/ramji-boat-banner.jpg",
  experienceYears: "20+",
  passengersServed: "15,000+",
  safetyRecord: "100%",
};

export const STATS_HIGHLIGHTS = [
  { label: "Big Boat Capacity", value: "50–60", sub: "Double Deck Vessel", icon: "Users" },
  { label: "Small Boat Capacity", value: "20–25", sub: "Intimate Family Boat", icon: "Ship" },
  { label: "Historic Ghats", value: "84 Ghats", sub: "Complete Sightseeing", icon: "Compass" },
  { label: "Guest Satisfaction", value: "4.9 ★", sub: "385+ Verified Reviews", icon: "Star" },
];

export const BOAT_FLEET = [
  {
    id: "big-boat",
    title: "Big Boat (शाही बड़ी नौका)",
    capacity: "50–60 Persons",
    idealFor: "Tour Groups, Corporate Outings, Family Celebrations & Large Gatherings",
    badge: "Most Popular for Groups",
    featured: true,
    priceEstimate: "Custom Quote",
    priceNote: "Direct owner price • No middleman",
    features: [
      "Capacity: 50 to 60 Passengers comfortably seated",
      "Spacious open deck with 360° panoramic Ganges views",
      "Full safety kit with certified life jackets for everyone",
      "High-power silent engine for smooth, noise-free cruising",
      "Modern sound / music system available for bhajans & events",
      "Experienced Kashi local Naviks (licensed boat masters)",
      "Dedicated photography & tea/refreshment setup on request",
      "Ideal for prime spot viewing at Dashashwamedh Ganga Aarti"
    ],
    image: "/images/ramji-boat-banner.jpg",
    specs: {
      length: "42 Feet",
      decks: "Double Deck / Upper Open View",
      speed: "Eco Cruise 8-10 Knots",
      safety: "100% Life Jacket Compliance"
    }
  },
  {
    id: "small-boat",
    title: "Small Boat (पारिवारिक छोटी नौका)",
    capacity: "20–25 Persons",
    idealFor: "Families, Friends Groups, Small Tour Groups & Private Sunrise Rides",
    badge: "Best for Families & Groups",
    featured: false,
    priceEstimate: "Affordable Family Rates",
    priceNote: "Direct owner price • No bargaining hassle",
    features: [
      "Capacity: 20 to 25 Passengers",
      "Cozy and intimate seating with traditional cushioned seats",
      "Certified life jackets for all adults and children",
      "Quick maneuverability close to historic ghats and temples",
      "Special sunrise Subah-e-Banaras meditation & bird feeding ride",
      "Professional local guide narration of 84 ghats history",
      "Custom pickup & drop from Samneghat or Assi Ghat",
      "Clean, sanitized, and well-maintained vessel"
    ],
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    specs: {
      length: "28 Feet",
      decks: "Single Deck with Sun Shade Canopy",
      speed: "Calm River Cruise",
      safety: "Certified Life Guards on board"
    }
  }
];

export const TOUR_PACKAGES = [
  {
    id: "evening-aarti",
    title: "Dashashwamedh Ganga Aarti VIP Boat",
    hindiTitle: "दशाश्वमेध महा आरती दर्शन",
    timing: "5:30 PM – 8:00 PM (Evening)",
    duration: "2 to 2.5 Hours",
    description: "Experience the world-renowned Dashashwamedh Ghat Maha Aarti right from the holy waters of Ganga with VIP front-row floating boat seats.",
    highlights: ["Front-row VIP boat seating", "Floating Diya deepdan ceremony", "Ghats lit with golden illumination", "Divine conch shell & bell chanting"],
    recommendedBoat: "Big Boat (50-60 pax) or Small Boat",
    icon: "Flame",
    popular: true,
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "sunrise-tour",
    title: "Subah-e-Banaras Sunrise Boat Ride",
    hindiTitle: "सुबह-ए-बनारस सूर्योदय नौका विहार",
    timing: "5:30 AM – 7:30 AM (Morning)",
    duration: "1.5 to 2 Hours",
    description: "Witness the celestial sunrise over Mother Ganga as priests chant Vedic mantras and migratory Siberian birds glide around your boat.",
    highlights: ["Misty golden sunrise over water", "Ganga Aarti at Assi Ghat", "Siberian bird feeding (Winter)", "Fresh morning Banarasi Chai on boat"],
    recommendedBoat: "Small Boat or Big Boat",
    icon: "Sun",
    popular: true,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "full-ghats",
    title: "Complete 84 Ghats Heritage Cruise",
    hindiTitle: "समस्त 84 घाट दर्शन यात्रा",
    timing: "Flexible Timings (Morning / Sunset)",
    duration: "2.5 to 3 Hours",
    description: "A comprehensive spiritual cruise from Samneghat & Assi Ghat all the way to Manikarnika Ghat, Panchganga, and Namo Ghat.",
    highlights: ["Legend of Harishchandra & Manikarnika", "Architectural marvels of Maratha & Rajput palaces", "Ancient riverbank temples", "Guided commentary by local boatmen"],
    recommendedBoat: "Big Boat / Small Boat",
    icon: "Compass",
    popular: false,
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "dev-deepawali",
    title: "Dev Deepawali Grand Festival Cruise",
    hindiTitle: "देव दीपावली महा महोत्सव",
    timing: "Karthik Purnima & Festival Evenings",
    duration: "3 to 4 Hours",
    description: "Sail amidst over 1 million earthen oil lamps (diyas) illuminating Varanasi's historic ghats with grand fireworks and laser shows.",
    highlights: ["10+ Lakh glowing diyas", "Green laser show & fireworks", "Advance reservation required", "Exclusive group seating"],
    recommendedBoat: "Big Boat (50-60 pax) - Advance Booking",
    icon: "Sparkles",
    popular: true,
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "family-celebration",
    title: "Private Party & Family Gathering",
    hindiTitle: "पारिवारिक एवं कॉर्पोरेट नौका उत्सव",
    timing: "Customizable as per your event",
    duration: "Flexible (Half / Full Day)",
    description: "Host private birthdays, anniversaries, corporate retreats, and devotional Bhajan Sandhyas on the Ganges on our large 50-60 person vessel.",
    highlights: ["Exclusive boat charter", "Sound system for devotional bhajans", "Catering & seating arrangements", "Customized sailing route"],
    recommendedBoat: "Big Boat (50-60 pax)",
    icon: "Users",
    popular: false,
    image: "/images/ramji-boat-banner.jpg"
  },
  {
    id: "religious-rituals",
    title: "Pind Daan & Asthi Visarjan Service",
    hindiTitle: "पिंड दान एवं अस्थि विसर्जन धार्मिक सेवा",
    timing: "Early Morning / Scheduled Ritual Times",
    duration: "1 to 2 Hours",
    description: "Respectful and devout boat services to sacred confluences and ghats with assistance for Hindu rituals, Brahman priests, and offerings.",
    highlights: ["Peaceful and sacred atmosphere", "Experienced devout boat captains", "Assistance for ritual immersion", "Respectful handling & privacy"],
    recommendedBoat: "Small Boat (20-25 pax)",
    icon: "HeartHandshake",
    popular: false,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1000&q=80"
  }
];

export const FAMOUS_GHATS = [
  {
    name: "Assi Ghat",
    hindi: "अस्सी घाट",
    desc: "Southernmost ghat where river Assi meets Ganga; famous for Subah-e-Banaras, morning yoga, and sunrise aarti.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    significance: "Spiritual Starting Point",
    timeFromBase: "15 Mins by Boat"
  },
  {
    name: "Dashashwamedh Ghat",
    hindi: "दशाश्वमेध घाट",
    desc: "The heartbeat of Varanasi where Lord Brahma performed ten-horse sacrifices; host to the grand world-famous Evening Ganga Aarti.",
    image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
    significance: "Grand Maha Aarti Venue",
    timeFromBase: "35 Mins by Boat"
  },
  {
    name: "Manikarnika Ghat",
    hindi: "मणिकर्णिका घाट",
    desc: "The sacred Maha Shamshan ghat of salvation (Moksha) where eternal sacred fires burn unceasingly.",
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80",
    significance: "Ghat of Liberation (Moksha)",
    timeFromBase: "45 Mins by Boat"
  },
  {
    name: "Chet Singh & Darbhanga Ghat",
    hindi: "चेत सिंह एवं दरभंगा घाट",
    desc: "Majestic palace fortresses of Maratha & Bihari royalty standing tall like medieval castles above the water.",
    image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80",
    significance: "Architectural Fortress",
    timeFromBase: "25 Mins by Boat"
  },
  {
    name: "Namo Ghat",
    hindi: "नमो घाट",
    desc: "Modern northern gateway featuring colossal folded hands (Namaste) sculptures and spacious boat jetties.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    significance: "Iconic Namaste Sculptures",
    timeFromBase: "60 Mins by Boat"
  },
  {
    name: "Samneghat (Our Base)",
    hindi: "सामनेघाट (हमारा मुख्य केंद्र)",
    desc: "Close to Lanka & BHU with wide access and serene water, perfect starting boarding point away from traffic jams.",
    image: "/images/ramji-boat-banner.jpg",
    significance: "Base Station (Easy Parking)",
    timeFromBase: "0 Mins (Boarding)"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "/images/ramji-boat-banner.jpg",
    title: "Ramji Boat Cruise on River Ganga",
    category: "Our Fleet",
    caption: "Spacious cruise gliding along the historic ghats of Varanasi"
  },
  {
    url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    title: "Dashashwamedh Evening Maha Aarti",
    category: "Ganga Aarti",
    caption: "Front-row boat views of sacred fire rituals and bell chanting"
  },
  {
    url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    title: "Subah-e-Banaras Sunrise",
    category: "Sunrise Tour",
    caption: "Divine golden morning over the Ganges with sacred rituals"
  },
  {
    url: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    title: "Historic Ghat Palaces",
    category: "84 Ghats",
    caption: "Royal heritage fortresses standing timeless above the water"
  },
  {
    url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    title: "Sacred Temple Riverbanks",
    category: "Heritage",
    caption: "Centuries of Hindu devotion and spiritual architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    title: "Namo Ghat Sculptures & Sunset",
    category: "84 Ghats",
    caption: "Modern Varanasi welcoming pilgrims from around the world"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "100% Safety & Life Jackets",
    description: "Every passenger is provided top-grade life jackets and all boats are inspected by inland water safety authorities."
  },
  {
    icon: "Anchor",
    title: "Generations of Kashi Naviks",
    description: "Our boat captains carry inherited knowledge of the river currents, hidden legends, and ancient history of each ghat."
  },
  {
    icon: "Users",
    title: "Fleet for Any Group Size",
    description: "From cozy 20-25 pax boats for private families to grand 50-60 pax double-deckers for big tourist and wedding groups."
  },
  {
    icon: "PhoneCall",
    title: "Direct Owner Rates (No Middlemen)",
    description: "Book directly with Ramji Boat Services at 8299027010. Transparent pricing with zero hidden commission."
  },
  {
    icon: "Clock",
    title: "Punctual & Stress-Free Pickups",
    description: "Board easily from Samneghat, Assi Ghat or Dashashwamedh Ghat right on time for sunrise or evening Aarti."
  },
  {
    icon: "Sparkles",
    title: "Clean, Sanitized & Comfortable",
    description: "Well-cushioned seats, shaded sun-canopies, crystal clean decks, and sound systems for devotional bhajans."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar Sharma",
    location: "New Delhi",
    rating: 5,
    text: "We booked the Big Boat (50 persons) for our family reunion and senior citizens trip in Varanasi. Ramji bhai and his team took exceptional care of us! The view of Ganga Aarti from the boat was unforgettable.",
    tag: "Big Boat (50-60 Pax)",
    date: "November 2026"
  },
  {
    name: "Dr. Ananya Mukherjee",
    location: "Kolkata, West Bengal",
    rating: 5,
    text: "Subah-e-Banaras morning sunrise ride with Ramji Boat Services was the spiritual highlight of our Kashi Yatra. Clean boat, life jackets for my kids, and the boatman sang soothing Kabir bhajans on the river.",
    tag: "Morning Sunrise Ride",
    date: "October 2026"
  },
  {
    name: "Amitabh & Shruti Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Directly called on 8299027010 from the banner. Within 10 minutes everything was arranged at Samneghat. Fair price, very polite behavior, no bargaining hassle like at crowded ghats. Highly recommended!",
    tag: "Direct Phone Booking",
    date: "September 2026"
  },
  {
    name: "Michael & Sarah Jenkins",
    location: "London, UK",
    rating: 5,
    text: "An incredible experience sailing past all 84 ghats at sunset. Our boat captain was extremely safe and knowledgeable. Watching the evening Aarti from the river is a must-do!",
    tag: "Heritage 84 Ghats",
    date: "August 2026"
  }
];

export const FAQS = [
  {
    q: "How do I make a reservation with Ramji Boat Services?",
    a: "Booking is very simple! You can directly call or send a WhatsApp message to +91 8299027010. You can also fill the instant inquiry form on our website to receive an immediate callback."
  },
  {
    q: "What boat capacities do you have available?",
    a: "We operate two main vessel categories: Big Boats (capacity 50–60 persons) ideal for large groups, wedding entourages, and tours; and Small Boats (capacity 20–25 persons) ideal for families and intimate groups."
  },
  {
    q: "Where is your boarding and pickup location?",
    a: "Our primary boarding station is located at Madarwan, Samneghat, Lanka, BHU, Varanasi. We also arrange pickups and drop-offs from Assi Ghat, Dashashwamedh Ghat, and Namo Ghat as per your preference."
  },
  {
    q: "Are life jackets provided for safety?",
    a: "Yes, 100%. Safety is our top priority. We provide certified life jackets for all adults and children. Our boats are piloted by experienced, licensed local boatmen."
  },
  {
    q: "Can we watch the Dashashwamedh Ganga Aarti from the boat?",
    a: "Absolutely! Our evening Aarti boat tour anchors directly in front of Dashashwamedh Ghat, giving you an unobstructed VIP view of the grand ritual without the suffocating crowds on the steps."
  },
  {
    q: "Can we organize bhajans, music, or corporate parties on the boat?",
    a: "Yes! Our Big Boat (50-60 persons) is equipped with a sound system and ample open deck space, making it perfect for devotional Bhajan Sandhyas, family milestone celebrations, and group gatherings."
  }
];
