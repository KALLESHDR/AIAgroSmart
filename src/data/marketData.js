export const liveMandiFeeds = [
  {
    id: 1,
    commodity: "Wheat (गेहूं / గోధుమలు)",
    variety: "Sharbati / Lokwan",
    mandi: "Khanna Mandi, Punjab",
    modalPrice: 2480,
    unit: "₹ / Quintal",
    trend: "+2.8%",
    trendDirection: "up",
    govSource: "e-NAM Synced",
    lastUpdated: "12 mins ago"
  },
  {
    id: 2,
    commodity: "Onion (प्याज / ఉల్లిపాయ)",
    variety: "Nashik Red Special",
    mandi: "Lasalgaon Mandi, Maharashtra",
    modalPrice: 1950,
    unit: "₹ / Quintal",
    trend: "-1.2%",
    trendDirection: "down",
    govSource: "Agmarknet Live",
    lastUpdated: "5 mins ago"
  },
  {
    id: 3,
    commodity: "Tomato (टमाटर / టమాటా)",
    variety: "Hybrid Desi",
    mandi: "Kolar APMC, Karnataka",
    modalPrice: 2200,
    unit: "₹ / Quintal",
    trend: "+4.5%",
    trendDirection: "up",
    govSource: "Agmarknet Live",
    lastUpdated: "8 mins ago"
  },
  {
    id: 4,
    commodity: "Cotton (कपास / పత్తి)",
    variety: "Medium Staple",
    mandi: "Warangal Mandi, Telangana",
    modalPrice: 7120,
    unit: "₹ / Quintal",
    trend: "+1.9%",
    trendDirection: "up",
    govSource: "e-NAM Synced",
    lastUpdated: "15 mins ago"
  },
  {
    id: 5,
    commodity: "Soybean (सोयाबीन)",
    variety: "Yellow Grade-A",
    mandi: "Indore APMC, Madhya Pradesh",
    modalPrice: 4890,
    unit: "₹ / Quintal",
    trend: "+0.6%",
    trendDirection: "up",
    govSource: "e-NAM Synced",
    lastUpdated: "20 mins ago"
  },
  {
    id: 6,
    commodity: "Basmati Paddy (धान / వరి)",
    variety: "1121 Pusa",
    mandi: "Karnal Mandi, Haryana",
    modalPrice: 3850,
    unit: "₹ / Quintal",
    trend: "+3.1%",
    trendDirection: "up",
    govSource: "Agmarknet Live",
    lastUpdated: "18 mins ago"
  }
];

export const cropRecommendationDatabase = {
  "Black Soil": {
    "Kharif (Monsoon)": {
      recommendedCrops: ["Cotton (कपास / పత్తి)", "Soybean (सोयाबीन)", "Pigeon Pea (अरहर / కంది)"],
      expectedYield: "18 - 24 Quintals/Acre",
      projectedRevenue: "₹75,000 - ₹95,000 / Acre",
      demandLevel: "Very High (Export & Mills)",
      waterRequirement: "Moderate (Monsoon Dependent)",
      aiInsight: "Black cotton soil retains excellent moisture. High market demand in textile corridors makes medium-staple cotton optimal this Kharif season."
    },
    "Rabi (Winter)": {
      recommendedCrops: ["Chickpea / Bengal Gram (चना)", "Wheat (गेहूं)", "Safflower (करडई)"],
      expectedYield: "14 - 18 Quintals/Acre",
      projectedRevenue: "₹60,000 - ₹78,000 / Acre",
      demandLevel: "High (National Buffer)",
      waterRequirement: "Low to Moderate",
      aiInsight: "Residual moisture supports chickpeas without heavy irrigation. Price forecast indicates a 7% upward trend at local mandis."
    },
    "Zaid (Summer)": {
      recommendedCrops: ["Moong (Green Gram)", "Sesame (तिल)", "Fodder Sorghum"],
      expectedYield: "6 - 8 Quintals/Acre",
      projectedRevenue: "₹35,000 - ₹45,000 / Acre",
      demandLevel: "Moderate to High",
      waterRequirement: "Controlled Drip Irrigation",
      aiInsight: "Short-cycle 65-day crop enriches soil nitrogen while fetching quick cash between major crop rotations."
    }
  },
  "Alluvial Soil": {
    "Kharif (Monsoon)": {
      recommendedCrops: ["Paddy (Rice / धान)", "Maize (मक्का)", "Jute / Sugarcane"],
      expectedYield: "26 - 32 Quintals/Acre",
      projectedRevenue: "₹65,000 - ₹88,000 / Acre",
      demandLevel: "Guaranteed MSP & Supermarket Demand",
      waterRequirement: "High",
      aiInsight: "Rich silt content gives unmatched fertility for water-intensive cereal crops and direct grain procurement by big supermarket networks."
    },
    "Rabi (Winter)": {
      recommendedCrops: ["Wheat (गेहूं)", "Mustard (सरसों)", "Potato (आलू)"],
      expectedYield: "20 - 25 Quintals/Acre",
      projectedRevenue: "₹70,000 - ₹1,10,000 / Acre",
      demandLevel: "Extremely High (Edible Oil & Food Processing)",
      waterRequirement: "Moderate (3-4 irrigations)",
      aiInsight: "Mustard offers high oil-extraction premium with minimum pest susceptibility in alluvial flood plains."
    },
    "Zaid (Summer)": {
      recommendedCrops: ["Watermelon & Melons", "Cucumber", "Okra / Ladyfinger"],
      expectedYield: "120 - 150 Quintals/Acre",
      projectedRevenue: "₹80,000 - ₹1,20,000 / Acre",
      demandLevel: "High Urban Supermarket Demand",
      waterRequirement: "Frequent Drip / Furrow",
      aiInsight: "Supermarkets and retail chains in metropolitan areas pay immediate spot payments for fresh summer fruits."
    }
  },
  "Red Sandy Loam": {
    "Kharif (Monsoon)": {
      recommendedCrops: ["Groundnut (मूंगफली)", "Finger Millet / Ragi (रागी)", "Castor"],
      expectedYield: "12 - 16 Quintals/Acre",
      projectedRevenue: "₹55,000 - ₹72,000 / Acre",
      demandLevel: "High (Millet Mission & Healthy Foods)",
      waterRequirement: "Low to Drought Tolerant",
      aiInsight: "Millet Mission has created record supermarket retail demand. Ragi requires minimal fertilizer and thrives in well-drained red loam."
    },
    "Rabi (Winter)": {
      recommendedCrops: ["Horse Gram (कुलथी)", "Onion (प्याज)", "Chilli (लाल मिर्च)"],
      expectedYield: "15 - 20 Quintals/Acre",
      projectedRevenue: "₹85,000 - ₹1,30,000 / Acre",
      demandLevel: "Very High (Spice Exporters & Domestic)",
      waterRequirement: "Moderate Drip",
      aiInsight: "Red soil develops vibrant color and high pungency in chillies, matching export quality benchmarks."
    },
    "Zaid (Summer)": {
      recommendedCrops: ["Cowpea", "Cluster Beans (Guar)", "Vegetable Greens"],
      expectedYield: "30 - 45 Quintals/Acre",
      projectedRevenue: "₹40,000 - ₹55,000 / Acre",
      demandLevel: "Steady Local Market Demand",
      waterRequirement: "Low",
      aiInsight: "Guar and heat-hardy legumes protect topsoil while generating steady weekly revenue."
    }
  }
};

export const sampleMapLocations = [
  {
    id: 1,
    name: "Rameshwar Kisan Farm (रामेश्वर फार्म)",
    type: "Farmer",
    distance: "3.4 km",
    rating: 4.9,
    products: "Organic Tomatoes, Green Chillies",
    availableStock: "120 Crates (approx 2,400 kg)",
    verifiedGovId: "Kisan ID: MH-2024-8841",
    location: "Nashik Rural Sector 4",
    priceQuote: "₹21/kg (Gov Mandi is ₹22/kg)",
    tag: "Direct Farm Gate"
  },
  {
    id: 2,
    name: "Lasalgaon Central Mandi (APMC)",
    type: "Gov Mandi",
    distance: "6.8 km",
    rating: 4.8,
    products: "Onion, Wheat, Soybean Auctions",
    availableStock: "Live Electronic Auction 09:00 AM - 05:00 PM",
    verifiedGovId: "APMC Reg: GOV-APMC-041",
    location: "Mandi Yard Gate 2",
    priceQuote: "e-NAM Terminal 04 Active",
    tag: "Government Mandi"
  },
  {
    id: 3,
    name: "Kisan Sheetgrah Cold Storage & Logistics",
    type: "Warehouse",
    distance: "5.1 km",
    rating: 4.7,
    products: "Temperature-controlled 2°C - 8°C slots",
    availableStock: "840 Metric Tons space available",
    verifiedGovId: "WDRA License #8912",
    location: "State Highway 14 Bypass",
    priceQuote: "₹1.40/kg per month subsidized",
    tag: "Storage & Logistics"
  },
  {
    id: 4,
    name: "Spencers & Reliance Agro Procurement Hub",
    type: "Supermarket Hub",
    distance: "8.9 km",
    rating: 4.9,
    products: "Bulk Procurement: Potatoes, Onions, Bananas",
    availableStock: "Open Daily RFQ: 50 Tons capacity",
    verifiedGovId: "FSSAI / Corporate Buyer Reg",
    location: "Agro Logistic Park Hub C",
    priceQuote: "Guaranteed 24-hr Direct Bank Settlement",
    tag: "Corporate Buyer"
  }
];

export const platformRoles = [
  {
    id: "farmer",
    title: "For Farmers (किसान)",
    badge: "Direct Sales & Maximum Profit",
    color: "emerald",
    highlight: "Sell Directly, Eliminate Middlemen & Get Live Mandi Rates",
    benefits: [
      "Access real-time Gov Mandi price feeds from 480+ APMCs via e-NAM & Agmarknet.",
      "Get AI recommendation for highest-paying buyers and nearest cold storages.",
      "Use Voice Search in your regional mother tongue without typing.",
      "Receive AI soil and weather-based crop guidance to maximize yield and profit."
    ],
    stat: "+24% Higher Net Revenue vs traditional commission agents",
    actionLabel: "Start Selling as a Farmer"
  },
  {
    id: "supermarket",
    title: "For Supermarkets & Chains",
    badge: "Reliable B2B Farm Supply",
    color: "amber",
    highlight: "Direct Farm Procurement with Full Batch Traceability",
    benefits: [
      "Contract directly with verified farmer collectives (FPOs) and large cultivators.",
      "Predictive pricing alerts to lock in supply before seasonal price spikes.",
      "Digital invoicing, quality grading tags, and logistics tracking in one dashboard.",
      "Guaranteed farm-to-shelf freshness within 12-24 hours."
    ],
    stat: "35% Lower Supply Chain Waste & Fresher Inventory",
    actionLabel: "Register Supermarket Account"
  },
  {
    id: "retailer",
    title: "For Traders & Wholesalers",
    badge: "Transparent Mandi Trading",
    color: "blue",
    highlight: "Smarter Mandi Sourcing & Nearby Farm Gate Discovery",
    benefits: [
      "Find surplus produce from farmers within a 15-50 km radius on the interactive map.",
      "Real-time bid and offer matching with automated digital contracts.",
      "Integrated transport and cold chain booking with instant truck dispatch.",
      "GST-compliant e-bills and fast multi-mandi settlements."
    ],
    stat: "10x Faster Sourcing Turnaround with Zero Phone Calling Delay",
    actionLabel: "Join as Trader / Wholesaler"
  },
  {
    id: "consumer",
    title: "For Consumers & Communities",
    badge: "Farm-Fresh to Doorstep",
    color: "teal",
    highlight: "Fair Prices for Consumers, Fair Pay for Farmers",
    benefits: [
      "Know exactly which farmer grew your vegetables and fruits.",
      "Support local agriculture and enjoy chemical-free, pesticide-tracked harvests.",
      "Group buying options for apartment complexes and societies at wholesale rates.",
      "Full transparency with Government benchmark pricing."
    ],
    stat: "100% Farm-Traceable and 15-20% cheaper than middleman retail",
    actionLabel: "Shop Farm Fresh"
  }
];

