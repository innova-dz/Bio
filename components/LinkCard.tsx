import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SocialLink } from '../types';

interface LinkCardProps {
  link: SocialLink;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, index }) => {
  // Staggered animation delay based on index
  const animationDelay = `${0.2 + (index * 0.1)}s`;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-between p-4 rounded-2xl
        glass-card
        hover:border-secondary/50 hover:bg-white/[0.05]
        transition-all duration-300 ease-out animate-fade-in-up
        overflow-hidden
      `}
      style={{ animationDelay }}
    >
      {/* Gradient Hover Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative flex items-center gap-5 z-10">
        <div className={`
          p-3 rounded-xl transition-all duration-300
          ${link.featured 
            ? 'bg-gradient-to-br from-secondary to-primary text-white shadow-lg shadow-secondary/20' 
            : 'bg-white/5 text-gray-300 group-hover:bg-white/10 group-hover:text-white group-hover:scale-110'
          }
        `}>
          <link.icon size={22} strokeWidth={1.5} />
        </div>
        
        <div className="flex flex-col text-left">
          <span className="font-heading font-semibold text-lg text-gray-100 group-hover:text-white tracking-tight">
            {link.title}
          </span>
          {link.subtitle && (
            <span className="text-xs text-gray-500 font-medium group-hover:text-secondary-light transition-colors">
              {link.subtitle}
            </span>
          )}
        </div>
      </div>

      <div className={`
        relative z-10 p-2 rounded-full 
        text-gray-500 group-hover:text-white group-hover:bg-secondary/20
        transition-all duration-300 transform
        ${link.featured ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}
      `}>
        <ArrowUpRight size={18} />
      </div>
    </a>
  );
};

export default LinkCard;