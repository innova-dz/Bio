import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  title: string;
  subtitle?: string;
  url: string;
  icon: LucideIcon;
  featured?: boolean;
}

export interface BrandProfile {
  name: string;
  tagline: string;
  bio: string;
  cta?: string;
  avatarUrl: string;
  contactEmail: string;
}