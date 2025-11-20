import { Facebook, Instagram, MessageCircle, Music2 } from 'lucide-react';
import { BrandProfile, SocialLink } from './types';

export const BRAND_PROFILE: BrandProfile = {
  name: "Innova Digital",
  tagline: "Premium Digital Services",
  // Updated Bio
  bio: "خدمات رقمية تسهلك تجربتك 🎀\nSnapchat Premium، Netflix، Canva ✨\nبأسعار رمزية.. خلي حياتك أسهل وديجيتال أكثر 💗",
  cta: "👇 انضمي لعالمنا الرقمي وتابعي جديدنا 👇",
  avatarUrl: "logo.png", 
  contactEmail: "contact@innova-digital.com"
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    title: 'Facebook',
    subtitle: 'انضمي لمجتمعنا 🎀',
    url: 'https://web.facebook.com/innova.digital.03/',
    icon: Facebook,
    featured: true
  },
  {
    id: 'instagram',
    title: 'Instagram',
    subtitle: 'خدماتنا ومنتجاتنا ✨',
    url: 'https://www.instagram.com/innova_digital_03',
    icon: Instagram,
    featured: true
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    subtitle: 'جديد الترندات ⚡️',
    url: 'https://www.tiktok.com/@innova.startup',
    icon: Tiktok,
    featured: true
  }
];