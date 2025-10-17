import React from 'react';
import type { ScheduleItem, LinkItem } from './types';

const RecordingsIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" />
    <path d="M12 3a9 9 0 00-9 9 1 1 0 002 0 7 7 0 117 7 1 1 0 000 2 9 9 0 009-9 9 9 0 00-9-9z" />
  </svg>
);


const SpiritualQuoteIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2l2.35 7.18H22l-6 4.36 2.35 7.18L12 16.36l-6.35 4.36 2.35-7.18-6-4.36h7.65L12 2z" />
  </svg>
);

const SupportIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 12.75c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4z"/>
    <path d="M20.19 10.3c.06-.43.11-.87.11-1.31 0-5.18-4.21-9.38-9.38-9.38S1.54 3.81 1.54 9c0 .44.04.88.11 1.31L4.8 17.54c.48 1.25 1.68 2.08 3.03 2.08h8.34c1.35 0 2.55-.83 3.03-2.08l3.15-7.24zm-8.27 4.58c-1.8 0-3.26-1.46-3.26-3.26s1.46-3.26 3.26-3.26 3.26 1.46 3.26 3.26-1.46 3.26-3.26 3.26z"/>
  </svg>
);


const WebsiteIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.89 15.11c-2.4-.49-4.2-2.58-4.2-5.11s1.8-4.62 4.2-5.11L12 2.5l1.89 4.39c2.4.49 4.2 2.58 4.2 5.11s-1.8 4.62-4.2 5.11L12 21.5l-1.89-4.39z"/>
     <ellipse cx="12" cy="12" rx="2.5" ry="5" transform="rotate(-60 12 12)"/>
  </svg>
);


export const SCHEDULE_ITEMS: ScheduleItem[] = [
  {
    id: 1,
    title: 'Morning Shrila Prabhupada Lila Mrit Class',
    time: '6:00 AM – 7:00 AM',
    links: [
      { type: 'google', url: 'https://meet.google.com/kjq-wpcn-vmk' },
    ]
  },
  {
    id: 2,
    title: 'Morning Spiritual Class',
    time: '8:00 AM – 9:00 AM',
    links: [
      { type: 'google', url: 'https://meet.google.com/kjq-wpcn-vmk' },
      { type: 'conference', url: 'https://join.freeconferencecall.com/updesh' }
    ]
  },
  {
    id: 3,
    title: 'Evening Spiritual Class',
    time: '8:30 PM – 9:00 PM',
    links: [
      { type: 'google', url: 'https://meet.google.com/kjq-wpcn-vmk' },
    ]
  }
];

export const LINK_ITEMS: LinkItem[] = [
  {
    id: 1,
    title: 'Class Recordings',
    description: 'Catch up on any missed classes via our Telegram channel.',
    url: '#',
    icon: <RecordingsIcon className="w-8 h-8 text-rose-300" />
  },
  {
    id: 2,
    title: 'Daily Spiritual Quotes',
    description: 'Receive daily inspiration and wisdom to guide your path.',
    url: '#',
    icon: <SpiritualQuoteIcon className="w-8 h-8 text-rose-300" />
  },
  {
    id: 3,
    title: 'Support / Donation',
    description: 'Your generous support helps us continue our spiritual mission.',
    url: '#',
    icon: <SupportIcon className="w-8 h-8 text-rose-300" />
  },
   {
    id: 4,
    title: 'Visit Our Website',
    description: 'Explore more resources, articles, and information on our main site.',
    url: '#',
    icon: <WebsiteIcon className="w-8 h-8 text-rose-300" />
  }
];