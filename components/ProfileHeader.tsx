import React from 'react';
import { BrandProfile } from '../types';

interface ProfileHeaderProps {
  profile: BrandProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center text-center mb-10 animate-fade-in-up">
      <div className="relative group mb-6">
        {/* Gradient Ring Glow */}
        <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-primary rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-500"></div>
        
        {/* Profile Image Container - Optimized for Logo */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-[3px] border-white/10 bg-white p-3 shadow-2xl shadow-primary/20">
          <img 
            src={profile.avatarUrl} 
            alt={profile.name} 
            className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      
      <h1 className="text-4xl font-heading font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-sm">
        {profile.name}
      </h1>
      <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-3"></div>
      <p className="text-brand-400 font-medium text-sm tracking-[0.2em] uppercase">
        {profile.tagline}
      </p>
    </div>
  );
};

export default ProfileHeader;