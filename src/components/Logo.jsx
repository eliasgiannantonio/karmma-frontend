import React from 'react';

const Logo = ({ size = 'medium', showText = true, className = '' }) => {
  const sizes = {
    small: 'w-8 h-12',
    medium: 'w-10 h-14',
    large: 'w-24 h-36',
    xlarge: 'w-32 h-48'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Rectángulo con gradiente */}
      <div className="relative group">
        <div className={`${sizes[size]} bg-gradient-to-b from-yellow-400 via-red-500 to-blue-600 rounded-lg transition-transform group-hover:scale-105`}></div>
      </div>
      
      {/* Logo Text */}
      {showText && (
        <span className="text-2xl font-bold tracking-tight logo-font group-hover:text-yellow-400 transition-colors">
          karmma.
        </span>
      )}
    </div>
  );
};

export default Logo;