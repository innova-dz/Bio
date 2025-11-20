import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-6 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <div className="flex justify-center items-center gap-4 mb-6 opacity-40">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary"></div>
      </div>
      <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-1">
        Innova Digital © {new Date().getFullYear()}
      </p>
      <p className="text-gray-700 text-[10px]">
        Architecting the Future
      </p>
    </footer>
  );
};

export default Footer;