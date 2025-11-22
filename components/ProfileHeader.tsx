import React, { useState } from 'react';
import { BrandProfile } from '../types';
import { User } from 'lucide-react';

interface ProfileHeaderProps {
  profile: BrandProfile;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col items-center text-center mb-10 animate-fade-in-up">
      <div className="relative group mb-6">
        {/* Gradient Ring Glow - Thinner and sharper to look like a line */}
        <div className="absolute -inset-[1px] bg-gradient-to-tr from-primary via-secondary to-primary rounded-full opacity-70 group-hover:opacity-100 blur-[1px] transition duration-500"></div>
        
        {/* Profile Image Container - Thinner border (reduced padding from p-1 to p-[2px]) */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/10 bg-white p-[2px] shadow-2xl shadow-primary/20">
          {!imageError ? (
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              onError={() => setImageError(true)}
              className="w-full h-full object-contain rounded-full transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-300">
              <User size={40} />
            </div>
          )}
        </div>
      </div>
      
      {/* Using Kalam Font (font-brand) */}
      <h1 className="text-4xl font-brand font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 drop-shadow-sm">
        {profile.name}
      </h1>
      
      {/* Separator - Thinner line */}
      <div className="h-0.5 w-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-3"></div>
      
      {/* Tagline */}
      <p className="text-brand-400 font-medium text-sm tracking-[0.2em] uppercase">
        {profile.tagline}
      </p>
    </div>
  );
};

export default ProfileHeader;