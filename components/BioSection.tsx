import React from 'react';

interface BioSectionProps {
  bio: string;
  cta?: string;
}

const BioSection: React.FC<BioSectionProps> = ({ bio, cta }) => {
  return (
    <div className="w-full mx-auto mb-8 px-0 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
      <p 
        dir="auto" 
        className="text-gray-300 leading-relaxed font-medium text-[15px] sm:text-[16px] whitespace-pre-line tracking-wide font-sans mb-6 [text-wrap:balance]"
      >
        {bio}
      </p>
      
      {cta && (
        <div className="relative inline-block animate-pulse-slow">
          {/* Reverted Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg rounded-full"></div>
          <div className="relative px-6 py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm">
            <p 
              dir="auto" 
              className="text-secondary-light font-bold text-sm tracking-wider"
            >
              {cta}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BioSection;