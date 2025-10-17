
import React from 'react';
import type { ScheduleItem } from '../types';

interface ScheduleCardProps {
  item: ScheduleItem;
}

const ClockIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-amber-600">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const GoogleMeetIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24">
    <path fill="#00832d" d="M12.35 22.18h-1.1c-1.33 0-2.4-.63-3.14-1.6L2.33 11.5c-.32-.42-.5-.95-.5-1.52V10c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v.03c0 .54-.17 1.05-.47 1.47l-5.6 9c-.74.98-1.8 1.6-3.12 1.68Z" />
    <path fill="#0066da" d="M21.78 8.22 12.35 22.18h-1.1c-1.32.09-2.39-.54-3.12-1.68l-5.6-9C2.2 11.08 2 10.56 2 10.02V10c0-1.1.9-2 2-2h1.78l16 0Z" />
    <path fill="#e94235" d="M5.78 8 2.33 11.5c-.32.42-.5.95-.5 1.52l6.83-8.29L5.78 8Z" />
    <path fill="#2684fc" d="M22 10.03c0 .54-.17 1.05-.47 1.47l-5.6 9c-.74.98-1.8 1.6-3.12 1.68l9.66-12.15H22Z" />
    <path fill="#00ac47" d="M15.54 8 8.7 16.27l-4.1-4.92.01-.03 5.42-6.54h5.5l.01.22Z" />
    <path fill="#ffba00" d="M15.54 8h5.5l-2.07-2.48c-.62-.75-1.58-1.22-2.64-1.22h-5.5l4.7 3.7Z" />
    <path fill="#fff" d="m14.89 12.44-4.52.02c-.38 0-.62-.4-.44-.73l2.26-4.2c.22-.4.78-.4.99 0l2.13 4.17c.17.33-.06.74-.42.74Z" />
  </g>
  </svg>
);

const ConferenceCallIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.211-1.01-.564-1.372L18.75 15.75M2.25 6.75L5.625 10.5M2.25 6.75H5.625M18.75 15.75L15.375 12M18.75 15.75h-3.375" />
    </svg>
);


const ScheduleCard: React.FC<ScheduleCardProps> = ({ item }) => {
  return (
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-rose-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <h3 className="text-xl font-bold text-rose-800 mb-3">{item.title}</h3>
      <div className="flex items-center text-md text-amber-800 mb-4">
        <ClockIcon />
        <span>{item.time}</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        {item.links.map(link => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-colors duration-300 shadow-sm ${
              link.type === 'google' 
                ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {link.type === 'google' ? <GoogleMeetIcon /> : <ConferenceCallIcon />}
            Join via {link.type === 'google' ? 'Google Meet' : 'FreeConferenceCall'}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
