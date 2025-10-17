
import React from 'react';
import type { LinkItem } from '../types';

interface LinkCardProps {
  item: LinkItem;
}

const ArrowRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>
);

const LinkCard: React.FC<LinkCardProps> = ({ item }) => {
  return (
    <a 
      href={item.url}
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-rose-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] hover:border-rose-300"
    >
      <div className="flex items-start space-x-4">
        <div className="bg-rose-100 p-3 rounded-full">
          {item.icon}
        </div>
        <div>
          <h4 className="text-lg font-bold text-rose-800">{item.title}</h4>
          <p className="text-amber-800 text-sm mt-1">{item.description}</p>
          <div className="inline-flex items-center text-sm font-semibold text-rose-600 mt-4">
            Learn More
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
