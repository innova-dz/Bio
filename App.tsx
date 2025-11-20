import React, { useEffect, useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import BioSection from './components/BioSection';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import { BRAND_PROFILE, SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-[#050505] selection:bg-secondary selection:text-white">
      
      {/* Dynamic Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Primary Purple Orb */}
        <div 
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"
        />
        {/* Secondary Pink Orb following mouse slightly */}
        <div 
          className="absolute w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen transition-transform duration-1000 ease-out"
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(${mousePosition.x * 0.02 - 250}px, ${mousePosition.y * 0.02 - 250}px)`
          }}
        />
         {/* Bottom glow */}
         <div 
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>
      
      {/* Noise texture overlay */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none z-0 mix-blend-overlay"></div>

      <main className="relative z-10 max-w-md mx-auto px-6 pt-20 pb-12 flex flex-col min-h-screen">
        
        <ProfileHeader profile={BRAND_PROFILE} />
        
        <BioSection bio={BRAND_PROFILE.bio} cta={BRAND_PROFILE.cta} />
        
        <div className="w-full flex flex-col gap-3">
          {SOCIAL_LINKS.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>

        <div className="flex-grow"></div>

        <Footer />
      </main>
    </div>
  );
};

export default App;