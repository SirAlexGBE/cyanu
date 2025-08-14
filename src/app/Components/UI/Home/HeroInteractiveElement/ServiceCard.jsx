'use client';
import React from 'react';

const ServiceCard = React.memo(({ icon: Icon, label, description }) => (
  <div className="group relative">
    <div className="relative p-2 flex items-center justify-center text-center flex-col backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-[#EADD8F]/50 transition-all duration-500 hover:transform hover:scale-105 h-48">
      <div className="absolute inset-0 bg-transparent transition-opacity duration-500 rounded-2xl" />
      <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
        <Icon className="w-8 h-8 text-[#cabb67] group-hover:rotate-12 transition-transform duration-500" aria-label={label} />
        <h3 className="text-white font-bold text-xl">{label}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
