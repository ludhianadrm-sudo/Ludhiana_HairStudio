import { Doctor, Product, Testimonial, FAQ, BlogPost } from '../types';

// Unsplash high quality curated clinic & product URLs
export const DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Ananya Sharma',
    specialty: 'Trichologist & Hair Loss Specialist',
    experience: 14,
    degree: 'MD - Dermatology, DNB',
    description: 'Expert in treating female pattern hair thinning, androgenetic alopecia, and metabolic hair disorders with holistic and medical protocols.',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    availableTimings: ['10:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'],
    email: 'ananya.sharma@ludhianahairstudio.com',
    phone: '+91 98100 12020',
    clinicAddress: 'Ludhiana Hair Studio, Ferozepur Road, Ludhiana, Punjab'
  },
  {
    id: 'doc-2',
    name: 'Dr. Marcus Vance',
    specialty: 'Advanced Hair Transplant Surgeon',
    experience: 18,
    degree: 'MD, FACS, ABHRS Certified',
    description: 'A pioneer in FUE and DHT (Direct Hair Transplant) techniques with over 4,500 successful transplant surgeries performed globally.',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    availableTimings: ['09:00 AM', '11:00 AM', '01:30 PM', '03:00 PM'],
    email: 'marcus.vance@ludhianahairstudio.com',
    phone: '+91 98100 12021',
    clinicAddress: 'Advanced Surgical Wing, Ludhiana Hair Studio, Punjab'
  },
  {
    id: 'doc-3',
    name: 'Dr. Priya Nair',
    specialty: 'Consultant Dermatologist',
    experience: 10,
    degree: 'MD - Dermatology & Venerology',
    description: 'Specializes in clinical scalp therapeutics, seborrheic dermatitis control, and rejuvenating PRP (Platelet-Rich Plasma) therapy.',
    photo: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    availableTimings: ['11:00 AM', '12:30 PM', '03:30 PM', '05:00 PM'],
    email: 'priya.nair@ludhianahairstudio.com',
    phone: '+91 98100 12022',
    clinicAddress: 'Ludhiana Hair Studio, Ferozepur Road, Ludhiana, Punjab'
  },
  {
    id: 'doc-4',
    name: 'Dr. Ethan Hunt',
    specialty: 'Hair Transplant & Restoration Expert',
    experience: 12,
    degree: 'MS - General Surgery, MCh - Plastic Surgery',
    description: 'Specialist in robotic FUE hairline reconstruction, crown density restoration, and corrective transplant procedures.',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    availableTimings: ['10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'],
    email: 'ethan.hunt@ludhianahairstudio.com',
    phone: '+91 98100 12023',
    clinicAddress: 'Advanced Surgical Wing, Ludhiana Hair Studio, Punjab'
  },
  {
    id: 'doc-5',
    name: 'Dr. Sarah Jenkins',
    specialty: 'Pediatric Trichologist & Scalp Health',
    experience: 9,
    degree: 'MD - Pediatrics, Fellowship in Trichology',
    description: 'Dedicated to scalp health and alopecia areata in children and teenagers, combining gentle botanicals and targeted therapies.',
    photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    availableTimings: ['09:30 AM', '11:30 AM', '02:00 PM', '03:30 PM'],
    email: 'sarah.jenkins@ludhianahairstudio.com',
    phone: '+91 98100 12024',
    clinicAddress: 'Ludhiana Hair Studio, Ferozepur Road, Ludhiana, Punjab'
  },
  {
    id: 'doc-6',
    name: 'Dr. Kenji Sato',
    specialty: 'Regenerative Medicine Specialist',
    experience: 15,
    degree: 'PhD - Stem Cell Biology, MD',
    description: 'Leads follicle stem cell activation research and advanced exosomes therapy for non-surgical hair regeneration.',
    photo: 'https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    availableTimings: ['10:00 AM', '12:00 PM', '03:00 PM', '05:00 PM'],
    email: 'kenji.sato@ludhianahairstudio.com',
    phone: '+91 98100 12025',
    clinicAddress: 'Regenerative Medicine Unit, Ludhiana Hair Studio, Punjab'
  },
  {
    id: 'doc-7',
    name: 'Dr. Elena Rostova',
    specialty: 'Hormonal Hair Loss Specialist',
    experience: 11,
    degree: 'MD - Endocrinology & Dermatology',
    description: 'Deep specialization in thyroid-related hair fall, post-pregnancy thinning, and PCOS-related androgenic alopecia.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    availableTimings: ['11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM'],
    email: 'elena.rostova@ludhianahairstudio.com',
    phone: '+91 98100 12026',
    clinicAddress: 'Ludhiana Hair Studio, Suite 402, Ludhiana, Punjab'
  },
  {
    id: 'doc-8',
    name: 'Dr. Robert Chen',
    specialty: 'Nutritional Trichologist',
    experience: 13,
    degree: 'MD - Clinical Nutrition & Trichology',
    description: 'Expert in nutrient-deficiency induced hair loss, dietetics for keratin synthesis, and customized micronutrient plans.',
    photo: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    availableTimings: ['09:00 AM', '10:30 AM', '02:00 PM', '04:00 PM'],
    email: 'robert.chen@ludhianahairstudio.com',
    phone: '+91 98100 12027',
    clinicAddress: 'Ludhiana Hair Studio, Ferozepur Road, Ludhiana, Punjab'
  },
  {
    id: 'doc-9',
    name: 'Dr. Emily Watson',
    specialty: 'Laser Scalp Therapist',
    experience: 8,
    degree: 'MD - Dermatology, LLLT Certified',
    description: 'Specializes in Low-Level Laser Therapy (LLLT), photobiomodulation, and micro-needling for localized alopecia.',
    photo: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?auto=format&fit=crop&q=80&w=400',
    rating: 4.7,
    availableTimings: ['10:00 AM', '11:00 AM', '01:00 PM', '03:30 PM'],
    email: 'emily.watson@ludhianahairstudio.com',
    phone: '+91 98100 12028',
    clinicAddress: 'Ludhiana Hair Studio, Laser Wing, Ludhiana, Punjab'
  },
  {
    id: 'doc-10',
    name: 'Dr. Tariq Mahmood',
    specialty: 'Beard & Eyebrow Reconstruction Specialist',
    experience: 16,
    degree: 'MD, Board Certified Plastic Surgeon',
    description: 'World-renowned for delicate micro-FUE graft extraction for high-definition facial hair and eyebrow restoration.',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400',
    rating: 4.9,
    availableTimings: ['09:30 AM', '11:00 AM', '02:00 PM', '04:30 PM'],
    email: 'tariq.mahmood@ludhianahairstudio.com',
    phone: '+91 98100 12029',
    clinicAddress: 'Advanced Surgical Wing, Ludhiana Hair Studio, Punjab'
  },
  {
    id: 'doc-11',
    name: 'Dr. Clara Oswald',
    specialty: 'Stress-Induced Hair Loss Consultant',
    experience: 10,
    degree: 'MD - Psychiatry & Trichology',
    description: 'Expert in treating telogen effluvium, trichotillomania, and psychogenic hair disorders with bio-psychosocial approaches.',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400',
    rating: 4.8,
    availableTimings: ['10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM'],
    email: 'clara.oswald@ludhianahairstudio.com',
    phone: '+91 98100 12030',
    clinicAddress: 'Ludhiana Hair Studio, Suite 405, Ludhiana, Punjab'
  },
  {
    id: 'doc-12',
    name: 'Dr. David Miller',
    specialty: 'Scalp Pathology Dermatologist',
    experience: 20,
    degree: 'MD, PhD - Dermatology & Immunology',
    description: 'Top authority in autoimmune hair disorders, scarring alopecia, lichen planopilaris, and immunomodulatory therapeutics.',
    photo: 'https://images.unsplash.com/photo-1582750433449-64c012015529?auto=format&fit=crop&q=80&w=400',
    rating: 5.0,
    availableTimings: ['09:00 AM', '10:30 AM', '01:00 PM', '03:00 PM'],
    email: 'david.miller@ludhianahairstudio.com',
    phone: '+91 98100 12031',
    clinicAddress: 'Ludhiana Hair Studio, Research Lab, Ludhiana, Punjab'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Ludhiana Hair Studio Intense Re-Growth Serum',
    category: 'Serums',
    shortDescription: 'Advanced 5% Redensyl + 3% Procapil concentrate for overnight hair root activation.',
    description: 'An ultra-lightweight, non-greasy hair growth formulation fortified with award-winning ingredients like Redensyl, Procapil, Capixyl, and Anagain. This clinical serum targets hair loss at the cellular level, stimulating dermal papilla cells to prolong the anagen (growth) phase of hair.',
    price: 38,
    rating: 4.8,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Redensyl (5%)', 'Procapil (3%)', 'Capixyl (2%)', 'Anagain', 'Rosemary Extract', 'Biotinoyl Tripeptide-1'],
    benefits: ['Reduces hair fall within 4 weeks', 'Stimulates new follicle generation', 'Increases hair density and thickness', 'Non-sticky, water-based formula for daily use'],
    howToUse: 'Apply 1ml (approx. 5-6 drops) directly onto clean, dry scalp in the targeted hair loss areas. Massage gently with fingertips. Leave overnight. Do not rinse.',
    reviews: [
      { user: 'Sarah M.', rating: 5, comment: 'I have tried everything, but this serum has actually given me baby hairs along my hairline in just 6 weeks!', date: 'June 14, 2026' },
      { user: 'Michael K.', rating: 4, comment: 'Very pleasant smell, not sticky at all. Hair shedding has noticeably reduced.', date: 'May 28, 2026' }
    ]
  },
  {
    id: 'prod-2',
    name: 'Anagen Revival Anti-Hairfall Shampoo',
    category: 'Shampoos',
    shortDescription: 'Sulfate-free DHT blocking shampoo with Saw Palmetto and Rosemary Oil.',
    description: 'Formulated specifically for weak, thinning hair, this shampoo gently cleanses the scalp of sebum and DHT build-up without stripping natural oils. Packed with natural DHT blockers like Saw Palmetto and pumpkin seed oil to arrest hereditary hair thinning.',
    price: 24,
    rating: 4.6,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Saw Palmetto Extract', 'Rosemary Essential Oil', 'Caffeine', 'Niacinamide', 'Hydrolyzed Wheat Protein'],
    benefits: ['Blocks scalp DHT build-up', 'Gently purifies clogged hair follicles', 'Strengthens hair shafts against breakage', 'Adds instant volume and shine'],
    howToUse: 'Wet hair thoroughly. Apply a generous amount to scalp and hair, massaging to create a rich lather. Leave on for 2 minutes to allow active botanical absorption. Rinse thoroughly.',
    reviews: [
      { user: 'David T.', rating: 5, comment: 'Best shampoo for hair fall. Scalp feels clean and fresh without feeling dry.', date: 'July 1, 2026' }
    ]
  },
  {
    id: 'prod-3',
    name: 'Biotin & Keratin Nourish Capsules',
    category: 'Supplements',
    shortDescription: 'Daily clinical-grade multivitamin for optimal hair density and structural strength.',
    description: 'A precise pharmaceutical blend of high-potency Biotin, Zinc, Iron, and Amino Acids (L-Cysteine, L-Methionine) engineered to feed hair follicles from within. It replenishes critical structural building blocks necessary for robust keratin synthesis.',
    price: 29,
    rating: 4.7,
    reviewsCount: 218,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Biotin (10,000 mcg)', 'L-Cysteine', 'Hydrolyzed Keratin', 'Iron & Zinc', 'Vitamin D3 & B12', 'Green Tea Extract'],
    benefits: ['Accelerates hair growth rate', 'Improves tensile hair strength', 'Reduces nutritional deficiency hair loss', 'Also promotes stronger, healthier nails'],
    howToUse: 'Take 1 capsule daily after a heavy meal (breakfast or lunch) with plenty of water. Do not exceed the recommended dose.',
    reviews: [
      { user: 'Jessica L.', rating: 5, comment: 'My hair feels thicker, and my dermatologist actually recommended these to supplement my diet.', date: 'June 20, 2026' }
    ]
  },
  {
    id: 'prod-4',
    name: 'Rosemary & Onion Root Nourishing Oil',
    category: 'Oils',
    shortDescription: 'Cold-pressed traditional elixir optimized for deep scalp micro-circulation.',
    description: 'A premium blend of cold-pressed oils enriched with high-concentration red onion extract and Spanish rosemary oil. Rich in sulfur and antioxidants, this oil deeply conditions, soothens itchy scalps, and activates idle follicles.',
    price: 19,
    rating: 4.5,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Red Onion Seed Oil', 'Rosemary Essential Oil', 'Cold-pressed Coconut Oil', 'Argan Oil', 'Jojoba Oil', 'Vitamin E'],
    benefits: ['Deep scalp nourishment', 'Sulfur-rich formula boosts keratin', 'Fights dandruff and dry flakiness', 'Enhances natural hair shine and texture'],
    howToUse: 'Massage a small amount of oil onto scalp and hair length. Wrap in a warm towel for 30 minutes, or leave overnight before washing with Anagen Revival Shampoo.',
    reviews: [
      { user: 'Amit R.', rating: 4, comment: 'Smells surprisingly nice! Very soothing and hair feels amazingly soft after wash.', date: 'April 15, 2026' }
    ]
  },
  {
    id: 'prod-5',
    name: 'Complete Hair Densifying Kit',
    category: 'Kits',
    shortDescription: 'Ultimate 3-step synergetic system for hair thinning, shedding, and bald spots.',
    description: 'The definitive clinical kit for comprehensive hair restoration. Combines our premium Anti-Hairfall Shampoo (cleanse), Intense Re-Growth Serum (stimulate), and Biotin Capsules (nourish) to provide a 360-degree attack on follicle miniaturization.',
    price: 79,
    rating: 4.9,
    reviewsCount: 654,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    ingredients: ['1x Re-Growth Serum (50ml)', '1x Anti-Hairfall Shampoo (200ml)', '1x Biotin Capsules (60 count)'],
    benefits: ['Complete synergistic routine', 'Maximized cost savings (save 15%)', 'Designed by top clinical trichologists', 'Clinically proven results in 12 weeks'],
    howToUse: 'Take 1 Biotin capsule daily. Wash hair 3 times a week with the Shampoo. Apply the Re-Growth Serum every single night before sleep.',
    reviews: [
      { user: 'Emily B.', rating: 5, comment: 'Highly recommend getting the kit. Consistent routine made all the difference for my post-COVID hair fall.', date: 'July 5, 2026' }
    ]
  },
  {
    id: 'prod-6',
    name: 'Ludhiana Hair Studio Stem-Cell Exosome Elixir',
    category: 'Serums',
    shortDescription: 'Hyper-advanced serum utilizing cell-free plant exosome technology.',
    description: 'Representing the absolute cutting edge of dermatological science, this peptide-dense serum uses bio-engineered apple stem cell exosomes to target dormant hair follicles and trigger immediate regeneration.',
    price: 52,
    rating: 4.8,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Malus Domestica Fruit Cell Culture', 'Copper Tripeptide-1', 'Resveratrol', 'Centella Asiatica Extract'],
    benefits: ['Rejuvenates aged scalp cells', 'Enhances follicular anchoring', 'Fights oxidative hair follicle stress'],
    howToUse: 'Apply 1 dropper full onto dry scalp, concentrating on crown and hairline. Massage thoroughly. Best applied in the morning.',
    reviews: []
  },
  {
    id: 'prod-7',
    name: 'Scalp Detox Charcoal Scrub',
    category: 'Shampoos',
    shortDescription: 'Exfoliating charcoal scrub to eliminate product build-up and excess sebum.',
    description: 'A revitalizing scalp scrub formulated with micro-fine activated charcoal, sea salt, and cooling tea tree oil. Peels away dead cells, chemical residues, and hard-water deposits, allowing hair follicles to breathe.',
    price: 22,
    rating: 4.6,
    reviewsCount: 145,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Activated Charcoal Powder', 'Fine Sea Salt', 'Tea Tree Oil', 'Menthol Crystals', 'Salicylic Acid (1%)'],
    benefits: ['Instant cooling and relief from itchiness', 'Deep exfoliation of dry flakes', 'Enhances absorption of hair serums'],
    howToUse: 'Use once or twice a week. Apply to wet scalp, gently massaging in circular motions. Rinse thoroughly, then follow with conditioner.',
    reviews: []
  },
  {
    id: 'prod-8',
    name: 'Hydro-Lock Silk Conditioner',
    category: 'Shampoos',
    shortDescription: 'Deep moisture restoration conditioner for dry, brittle, and chemically-treated hair.',
    description: 'An intensive moisture-binding conditioner infused with silk amino acids, plant-based squalane, and organic shea butter. Rebuilds damaged hair cuticles, seals moisture, and dramatically reduces styling breakage.',
    price: 20,
    rating: 4.7,
    reviewsCount: 172,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Silk Amino Acids', 'Plant Squalane', 'Shea Butter', 'Panthenol (Pro-Vitamin B5)'],
    benefits: ['Provides silky smoothness and combability', 'Reduces split ends by up to 85%', 'Lightweight, will not weigh down fine hair'],
    howToUse: 'After shampooing, apply from mid-lengths to ends. Leave on for 3 minutes. Rinse thoroughly with cool water to seal the cuticles.',
    reviews: []
  },
  {
    id: 'prod-9',
    name: 'Scalp Awakening Caffeine Serum',
    category: 'Serums',
    shortDescription: 'Fast-absorbing topical caffeine shot for immediate hair volume and micro-circulation.',
    description: 'A clinical-strength scalp revitalizer loaded with 1.5% encapsulated caffeine and green tea catechins. Acts as a natural vasodilator, bringing fresh oxygen and vital nutrients directly to hair roots.',
    price: 26,
    rating: 4.4,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Encapsulated Caffeine (1.5%)', 'Green Tea Extract (EGCG)', 'Ginkgo Biloba', 'Menthol'],
    benefits: ['Instantly lifts hair at the root', 'Stimulates micro-circulation', 'Refreshes and wakes up tired scalps'],
    howToUse: 'Spray or drip onto scalp in the morning. Massage gently. Styling products can be applied 5 minutes after use.',
    reviews: []
  },
  {
    id: 'prod-10',
    name: 'Gut-Hair Axis Probiotics',
    category: 'Supplements',
    shortDescription: 'Targeted gut health capsule to combat inflammatory and autoimmune hair fall.',
    description: 'A revolutionary probiotic supplement linking digestive wellness to scalp health. Delivers 20 billion CFUs of targeted bacterial strains known to reduce systemic inflammation and support hair density.',
    price: 34,
    rating: 4.8,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Lactobacillus paracasei', 'Bifidobacterium lactis', 'Inulin (Prebiotic)', 'Folic Acid', 'Selenium'],
    benefits: ['Fights inflammatory scalp conditions', 'Boosts immune system against alopecia', 'Enhances nutrient absorption'],
    howToUse: 'Take 1 capsule every morning on an empty stomach with a glass of warm water.',
    reviews: []
  },
  {
    id: 'prod-11',
    name: 'Therapeutic Tea Tree Oil',
    category: 'Oils',
    shortDescription: '100% pure steam-distilled tea tree oil for scalp antiseptic protection.',
    description: 'Pharmaceutical-grade organic tea tree oil designed to naturally neutralize dandruff-causing Malassezia fungus. Purifies and balances oily scalps, relieving chronic itching and flaking.',
    price: 16,
    rating: 4.5,
    reviewsCount: 134,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=400',
    ingredients: ['100% Pure Steam-distilled Tea Tree Oil'],
    benefits: ['Natural anti-fungal and antibacterial', 'Calms severe scalp dandruff', 'Regulates overactive sebaceous glands'],
    howToUse: 'Mix 2-3 drops with your regular shampoo or 1 tablespoon of Coconut oil. Massage into scalp, leave for 15 minutes, then wash.',
    reviews: []
  },
  {
    id: 'prod-12',
    name: 'Keratin Build Strength Shampoo',
    category: 'Shampoos',
    shortDescription: 'Keratin-infused reparative shampoo for color-treated and heat-damaged hair.',
    description: 'A rich structural shampoo designed to reconstruct compromised peptide bonds in damaged hair. Seals hair cuticles, eliminating frizz and stopping breakage immediately.',
    price: 22,
    rating: 4.7,
    reviewsCount: 221,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Hydrolyzed Keratin Protein', 'Argan Oil', 'Biotin', 'Wheat Amino Acids'],
    benefits: ['Restores structural hair protein', 'Protects hair color vibrancy', 'Mends heat-fried strands'],
    howToUse: 'Apply to wet hair, lather, and rinse. For best results, follow with Hydro-Lock Silk Conditioner.',
    reviews: []
  },
  {
    id: 'prod-13',
    name: 'DHT-Blocker Max Supplements',
    category: 'Supplements',
    shortDescription: 'Clinical DHT blocker capsules combining Saw Palmetto, Pumpkin Seed, and Pygeum.',
    description: 'A highly concentrated natural DHT blocker capsule. Safely inhibits the 5-alpha-reductase enzyme responsible for converting testosterone into DHT, thereby arresting genetic hair follicle miniaturization.',
    price: 36,
    rating: 4.8,
    reviewsCount: 167,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Saw Palmetto Extract (450mg)', 'Pumpkin Seed Extract', 'Pygeum Bark', 'Stinging Nettle', 'Zinc Citrate'],
    benefits: ['Targets genetic androgenic alopecia', 'Stops hereditary hair thinning', 'Promotes fuller crown coverage'],
    howToUse: 'Take 2 capsules daily, preferably with dinner.',
    reviews: []
  },
  {
    id: 'prod-14',
    name: 'Cold-Pressed Argan Scalp-Soothe Oil',
    category: 'Oils',
    shortDescription: '100% pure organic Moroccan Argan Oil for intense hair shaft hydration.',
    description: 'Sourced directly from organic Moroccan co-operatives, this premium cold-pressed oil is packed with Vitamin E and fatty acids. It protects the hair shaft from environmental styling damage while imparting luxury softness.',
    price: 25,
    rating: 4.6,
    reviewsCount: 99,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=400',
    ingredients: ['100% Pure Cold-Pressed Argania Spinosa Kernel Oil'],
    benefits: ['Rich in antioxidants and Vitamin E', 'Heals styling and sun-induced heat damage', 'Ultra-light, absorbs quickly without grease'],
    howToUse: 'Rub 3-4 drops between palms and run through damp or dry hair, focusing on split ends. Massage a few drops onto scalp if dry.',
    reviews: []
  },
  {
    id: 'prod-15',
    name: 'Premium Post-Transplant Recovery Kit',
    category: 'Kits',
    shortDescription: 'Sterile, pH-balanced system designed specifically for scalp care post-hair transplant.',
    description: 'A medically compiled care kit to safeguard newly implanted FUE grafts. Contains ultra-gentle saline foam spray, sterile pH shampoo, and healing ointments to minimize scabbing and maximize graft survival.',
    price: 95,
    rating: 5.0,
    reviewsCount: 42,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Sterile Saline Foam Spray (150ml)', 'pH 5.5 Graft Cleansing Foam (200ml)', 'Soothe & Heal Panthenol Gel (50g)'],
    benefits: ['Speeds up recipient area healing', 'Minimizes itching and severe scabbing', 'Formulated under guidance of ABHRS surgeons', 'Completely sterile, alcohol-free, perfume-free'],
    howToUse: 'Follow instructions provided by your transplant surgeon. Spray saline foam every 2 hours. Use gentle cleansing foam from Day 3 onwards.',
    reviews: []
  },
  {
    id: 'prod-16',
    name: 'Ludhiana Hair Studio Peptide Repair Serum',
    category: 'Serums',
    shortDescription: 'Multi-peptide formulation targeting hair shaft elasticity and thickness.',
    description: 'An advanced Peptide-rich scalp treatment designed to reconstruct hair protein chains. It uses copper peptides and tripeptides to thicken existing hair diameters and reduce breakages.',
    price: 32,
    rating: 4.7,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Copper Tripeptide-1', 'Acetyl Tetrapeptide-3', 'Hydrolyzed Soy Protein', 'Biotin'],
    benefits: ['Improves scalp elasticity', 'Increases follicle anchoring', 'Visibly thickens fine, wispy hair'],
    howToUse: 'Apply 1ml to clean scalp. Massage and style as usual. Apply every night.',
    reviews: []
  },
  {
    id: 'prod-17',
    name: 'Coal Tar Scalp Therapy Shampoo',
    category: 'Shampoos',
    shortDescription: 'Clinical-strength coal tar formulation for psoriasis and severe dandruff.',
    description: 'A dermatologically formulated therapeutic shampoo for extreme scaling and itching. Specially blended with Coal Tar and Salicylic Acid to treat scalp psoriasis, eczema, and severe seborrheic dermatitis.',
    price: 21,
    rating: 4.8,
    reviewsCount: 114,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Coal Tar Topical Solution USP (1%)', 'Salicylic Acid (2%)', 'Aloe Vera Juice', 'Eucalyptus Oil'],
    benefits: ['Stops extreme scaling and itching', 'Calms chronic scalp inflammation', 'FDA-approved active ingredients'],
    howToUse: 'Wet hair thoroughly. Massage shampoo into scalp, lather and leave for 5 minutes. Rinse completely. Use 2-3 times a week.',
    reviews: []
  },
  {
    id: 'prod-18',
    name: 'Biotin Volume Boost Mousse',
    category: 'Kits',
    shortDescription: 'Instant styling and volume mousse enriched with Biotin and Vitamin B5.',
    description: 'An innovative styling mousse that coats each individual hair fiber with a fine, supportive layer of Biotin and Panthenol, creating instant structural volume, hold, and heat protection without stiff residue.',
    price: 18,
    rating: 4.3,
    reviewsCount: 54,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Biotin', 'Panthenol', 'Hydrolyzed Silk Protein', 'UV Filters'],
    benefits: ['Delivers instant 3D volume boost', 'Protects hair from heat styling up to 230°C', 'Safe for color-treated hair'],
    howToUse: 'Shake well. Dispense a small puff into palms and spread through damp hair from roots to tips. Blow-dry for maximum lift.',
    reviews: []
  },
  {
    id: 'prod-19',
    name: 'Ludhiana Hair Studio Derma Roller (0.5mm)',
    category: 'Kits',
    shortDescription: 'Medical-grade titanium microneedle derma roller to boost serum absorption.',
    description: 'A premium micro-needling device fitted with 540 ultra-sharp 0.5mm medical-grade titanium needles. Safely punctures the epidermis to trigger the scalp’s natural healing response and boost topical serum absorption by up to 300%.',
    price: 15,
    rating: 4.8,
    reviewsCount: 304,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    ingredients: ['540 Medical-grade Titanium Microneedles (0.5mm)'],
    benefits: ['Triggers collagen production', 'Enables 300% better serum absorption', 'Stimulates scalp stem cells'],
    howToUse: 'Sanitize with rubbing alcohol before and after use. Gently roll horizontally, vertically, and diagonally over thinning spots 1-2 times a week. Apply Re-Growth Serum immediately after rolling.',
    reviews: []
  },
  {
    id: 'prod-20',
    name: 'Daily Hair Defense Conditioner',
    category: 'Shampoos',
    shortDescription: 'Ultra-light daily rinse conditioner protecting against pollution and UV damage.',
    description: 'A protective, everyday conditioning rinse that forms an invisible anti-pollution and UV shield over the hair shaft, shielding follicles from structural environmental stress.',
    price: 18,
    rating: 4.4,
    reviewsCount: 83,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400',
    ingredients: ['Green Tea Extract', 'Sunflower Seed Extract', 'Hydrolyzed Keratin', 'UV Protectants'],
    benefits: ['Guards against particulate soot and dust', 'Filters harmful UV-A & UV-B rays', 'Leaves hair bouncy, shiny, and light'],
    howToUse: 'After shampooing, apply to hair mid-lengths and ends. Massage, leave on for 1 minute, then rinse thoroughly.',
    reviews: []
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Adrian Sterling',
    review: 'The clinical consultation with Dr. Vance was life-changing. He was extremely honest about my FUE options, and 12 months after my 3,200-graft transplant, my confidence is completely restored. Best medical team ever.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    beforeImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    afterImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    condition: 'Male Pattern Baldness (Stage IV)',
    treatment: 'FUE Hair Transplant (3200 Grafts)'
  },
  {
    id: 'test-2',
    name: 'Meera Iyer',
    review: 'After having my baby, my hair was falling out in massive clumps. Dr. Sharma analyzed my blood work, diagnosed post-pregnancy telogen effluvium, and put me on a customized plan of Biotin Capsules and the Re-Growth Serum. 3 months in and my hair is back to its original volume!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    beforeImage: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=200',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    condition: 'Post-Pregnancy Telogen Effluvium',
    treatment: 'Biotin + Re-Growth Serum Protocol'
  },
  {
    id: 'test-3',
    name: 'Marcus Brody',
    review: 'Absolutely stellar results. I had severe crown thinning and a receding hairline. I did 6 sessions of PRP combined with the Complete Hair Densifying Kit. The microscopic scalp scans show actual follicle reactivation. Fully satisfied!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    condition: 'Crown Thinning (Androgenic)',
    treatment: 'PRP Therapy + Complete Kit'
  },
  {
    id: 'test-4',
    name: 'Samantha Collins',
    review: 'I suffered from chronic seborrheic dermatitis and itching that was causing severe hair breakage. Dr. Nair prescribed the Coal Tar Shampoo and Scalp Detox Scrub. Within two weeks my scalp irritation has completely cleared up and my hair feels stronger.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    condition: 'Seborrheic Dermatitis',
    treatment: 'Scalp Detox + Coal Tar Shampoo'
  },
  {
    id: 'test-5',
    name: 'Rajesh Kumar',
    review: 'I was highly skeptical of hair transplants due to scarring. Dr. Hunt explained the micro-FUE technique with robotic precision. The procedure was virtually painless. Healing was super fast thanks to their Post-Transplant Kit. I am extremely pleased with the natural-looking hairline.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=200',
    condition: 'Receding Hairline (Stage III)',
    treatment: 'Micro-FUE (2400 Grafts)'
  },
  {
    id: 'test-6',
    name: 'Elena Rostova',
    review: 'Excellent online consulting process. Dr. Chen looked at my diet, identified an extreme iron and vitamin D deficiency, and designed a personalized plan. Saving me hundreds of dollars on useless retail shampoos. Real medical science works.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    condition: 'Nutritional Diffuse Thinning',
    treatment: 'Micronutrient Therapy'
  },
  {
    id: 'test-7',
    name: 'Julian Henderson',
    review: 'My beard was extremely patchy and never grew on the cheeks. I had a facial hair FUE transplant with Dr. Mahmood. He aligned the graft directions perfectly. People are shocked when I tell them my beard is transplanted. It looks 100% natural.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    condition: 'Patchy Beard / Facial Alopecia',
    treatment: 'Beard FUE Transplant (1800 Grafts)'
  },
  {
    id: 'test-8',
    name: 'Chloe Sinclair',
    review: 'Very professional clinic. I have been using their stem cell exosome serum and taking probiotic capsules for 4 months now. My scalp feels so much healthier, and my hair feels much thicker at the roots. A premium experience from start to finish.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    condition: 'Stress Hair Fall / Early Thinning',
    treatment: 'Exosome Elixir + Gut-Hair Protocol'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do I know if I need a consultation, hair products, or a hair transplant?',
    answer: 'If you are experiencing early stage hair fall, thinning, or dry scalp, starting with a Doctor Consultation is highly recommended. Our doctors can diagnose your root cause and prescribe specific Hair Products. For advanced baldness with completely dormant hair roots where shiny skin is visible, a Hair Transplant is the most effective permanent solution.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How does the online doctor consultation work?',
    answer: 'Once you book a consultation, you will fill out a short scalp history form and upload high-resolution photos of your thinning areas. Our certified trichologist or dermatologist will review your case, schedule a 15-minute video call if needed, and write a personalized medical prescription and hair care plan within 24 hours.',
    category: 'Consultation'
  },
  {
    id: 'faq-3',
    question: 'Are Ludhiana Hair Studio products suitable for color-treated or chemically treated hair?',
    answer: 'Yes. All our Shampoos, Serums, and Oils are completely free of sulfates, parabens, silicones, and synthetic dyes. They are highly gentle and safe for colored, keratin-treated, or chemically-relaxed hair.',
    category: 'Products'
  },
  {
    id: 'faq-4',
    question: 'What is the recovery time after a hair transplant surgery?',
    answer: 'With our advanced micro-FUE technique, recovery is incredibly quick. Most patients experience mild redness and swelling which subsides in 3-5 days. Tiny scabs around the grafts form and naturally shed off within 7-10 days. You can return to desk work in 2-3 days, and resume light workouts after 2 weeks.',
    category: 'Transplant'
  },
  {
    id: 'faq-5',
    question: 'Are there any side effects to the Intense Re-Growth Serum?',
    answer: 'Our serum is formulated with Redensyl and Procapil, which are cell-activating plant-based peptides. Unlike Minoxidil, our formula has zero hormonal side effects, does not cause scalp itching or dry flaking, and does not trigger sudden rebound hair shedding when you discontinue use.',
    category: 'Products'
  },
  {
    id: 'faq-6',
    question: 'How long does it take to see visible results from the treatments?',
    answer: 'Hair grows in cycles, so patience is key. Hair fall typically slows down within 3-4 weeks. By week 8, you will notice increased thickness and scalp health. Visible new hair growth and filled-in spots generally appear between 12 to 16 weeks of consistent daily usage.',
    category: 'General'
  },
  {
    id: 'faq-7',
    question: 'Is a hair transplant procedure painful?',
    answer: 'Not at all. The procedure is performed under highly localized anesthesia, administered via comfortable micro-needles or needle-free pressure injectors. Once the scalp is numb, you will feel absolutely no pain. Many of our patients watch movies, read, or take a nap during the grafting process.',
    category: 'Transplant'
  },
  {
    id: 'faq-8',
    question: 'Can women undergo hair transplant surgery?',
    answer: 'Yes, absolutely. Women are excellent candidates for FUE hair transplants, especially those with localized thinning, high hair lines, or traction alopecia. Our surgeons specialize in non-shaving FUE techniques, meaning we can perform the transplant without shaving your visible scalp.',
    category: 'Transplant'
  },
  {
    id: 'faq-9',
    question: 'Do you offer a subscription plan for your hair products?',
    answer: 'Yes! You can subscribe to any of our serums, shampoos, or capsules and save 10% on every order. We will automatically deliver your products to your doorstep every 30 or 60 days so you never break your recovery streak.',
    category: 'Products'
  },
  {
    id: 'faq-10',
    question: 'What qualifications do Ludhiana Hair Studio doctors hold?',
    answer: 'Every doctor on our panel is a highly qualified MD or DNB in Dermatology with specialized clinical training in Trichology (hair and scalp medicine). Our hair transplant surgeons hold certifications from prestigious national and international medical boards.',
    category: 'Consultation'
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Science of DHT: Why Your Hair is Thinning and How to Block It',
    category: 'Hair Science',
    summary: 'Discover what Dihydrotestosterone (DHT) is, why it targets certain hair follicles, and the top scientifically-proven natural blockers to arrest hereditary thinning.',
    content: 'Dihydrotestosterone (DHT) is an androgen hormone derived from testosterone. In genetically predisposed individuals, DHT binds to receptors in hair follicles at the crown and hairline, triggering a process called miniaturization. The follicle progressively shrinks, produces thinner hair, and eventually stops growing altogether. Blocking DHT is critical for reversing hair fall. Clinical studies highlight Saw Palmetto, Pumpkin Seed Oil, and Caffeine as highly potent natural ingredients that inhibit the 5-alpha-reductase enzyme—reversing miniaturization safely.',
    author: 'Dr. Ananya Sharma',
    date: 'July 15, 2026',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400',
    readTime: '5 min read'
  },
  {
    id: 'blog-2',
    title: 'FUE vs. FUT: Deciding the Right Hair Transplant Technique for You',
    category: 'Hair Transplant',
    summary: 'An in-depth breakdown comparing Follicular Unit Extraction (FUE) and Follicular Unit Transplantation (FUT) to help you choose the best technique for your scalp.',
    content: 'Hair transplant technologies have evolved immensely. Follicular Unit Transplantation (FUT), or strip surgery, involves removing a thin strip of scalp from the back of the head, leaving a linear scar. Follicular Unit Extraction (FUE) extracts individual follicles directly using micro-punches. FUE has become the absolute gold standard because it avoids linear scarring, reduces recovery time to just a few days, and allows for much more flexible hairline sculpting. FUE is highly recommended for active lifestyles.',
    author: 'Dr. Marcus Vance',
    date: 'June 28, 2026',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400',
    readTime: '7 min read'
  },
  {
    id: 'blog-3',
    title: 'Post-Pregnancy Hair Loss: A Guide to Telogen Effluvium Recovery',
    category: 'Scalp Care',
    summary: 'Experiencing severe hair shedding after giving birth? Learn why this happens, why it is temporary, and how to accelerate your recovery safely.',
    content: 'During pregnancy, high estrogen levels keep your hair in an extended growth (anagen) phase, leading to beautifully thick hair. However, 2 to 4 months after delivery, estrogen levels plummet. This sudden drop triggers a large percentage of hair follicles to simultaneously enter the resting (telogen) phase and shed—a condition known as postpartum telogen effluvium. While alarming, it is completely reversible. Focus on clinical nutrition rich in iron and biotin, avoid heat-styling stress, and use gentle botanical peptide serums to wake up resting roots.',
    author: 'Dr. Sarah Jenkins',
    date: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=400',
    readTime: '4 min read'
  },
  {
    id: 'blog-4',
    title: 'Is Rosemary Oil Actually as Effective as Minoxidil for Hair Growth?',
    category: 'Hair Science',
    summary: 'We unpack the famous 2013 clinical study comparing rosemary oil to minoxidil 2% and discuss who should use each.',
    content: 'A randomized comparative clinical trial showed that rosemary oil is as effective as 2% minoxidil in increasing hair count after 6 months of daily scalp application. The major advantage of rosemary oil is its natural therapeutic compound, which stimulates blood circulation without the side effects of minoxidil, such as severe scalp itching, dryness, and sudden rebound shedding when discontinued. It also contains powerful antiseptic benefits which calm dandruff and dry scales.',
    author: 'Dr. Robert Chen',
    date: 'April 30, 2026',
    image: 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=400',
    readTime: '6 min read'
  },
  {
    id: 'blog-5',
    title: 'How Diet and Micronutrients Control Hair Follicle Regeneration',
    category: 'Clinical Nutrition',
    summary: 'Your hair is made of protein, but vitamins are the fuel. Learn the essential micronutrients your follicles need to build strong keratin chains.',
    content: 'Each hair strand is comprised of a protein called keratin. Keratin synthesis requires a specialized chain of amino acids powered by specific micronutrient catalysts. Iron deficiency (ferritin) is one of the leading causes of diffuse hair fall in women, as it restricts oxygen delivery to hair roots. Vitamin D3 acts as a key gene expression activator for hair cycle progression. Supplementing with clinical-grade L-Cysteine, Biotin, Zinc, and Vitamin D3 is a foundational step in any hair restoration protocol.',
    author: 'Dr. Priya Nair',
    date: 'March 15, 2026',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400',
    readTime: '5 min read'
  },
  {
    id: 'blog-6',
    title: 'Micro-Needling Your Scalp: How Dermarolling Activates Hair Roots',
    category: 'Scalp Care',
    summary: 'Learn the correct, safe way to use a 0.5mm derma roller at home to stimulate collagen and maximize serum absorption.',
    content: 'Micro-needling uses tiny sterile needles to create controlled micro-injuries in the stratum corneum of the scalp. This micro-damage triggers the body’s localized wound-healing cascade, releasing plate-derived growth factors and stimulating stem cell activity in hair follicles. Additionally, it creates micro-channels that allow hair growth serums to penetrate up to 3 times deeper into the hair roots. Always use a 0.5mm titanium roller, sterilize it with alcohol, roll with light pressure, and do not use on bleeding or irritated skin.',
    author: 'Dr. Emily Watson',
    date: 'February 10, 2026',
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400',
    readTime: '4 min read'
  }
];
