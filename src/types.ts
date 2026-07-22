export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number; // in years
  degree: string;
  description: string;
  photo: string;
  rating: number;
  availableTimings: string[];
  email: string;
  phone: string;
  clinicAddress: string;
}

export interface Review {
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Serums' | 'Shampoos' | 'Supplements' | 'Oils' | 'Kits';
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  ingredients: string[];
  benefits: string[];
  howToUse: string;
  reviews: Review[];
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  condition: string;
  treatment: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Products' | 'Consultation' | 'Transplant';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingDetails {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  doctorId?: string;
  concern?: string;
  reason: string;
}

export interface OrderDetails {
  id: string;
  shipping: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    postalCode: string;
  };
  items: CartItem[];
  total: number;
  paymentMethod: string;
  date: string;
}
