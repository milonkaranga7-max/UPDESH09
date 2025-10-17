
import React from 'react';
import type { ScheduleItem, LinkItem } from './types';

const TelegramIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.886 1.012c.704-.543 1.545-.543 2.25 0l8.115 6.25c.421.324.65.818.65 1.332V19.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a.75.75 0 0 1-.75-.75V16.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75h-4.5a2.25 2.25 0 0 1-2.25-2.25V8.594c0-.514.229-1.008.65-1.332l8.115-6.25Z" />
  </svg>
);


const BookOpenIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.823 15.345a.75.75 0 0 1 1.053-.018l1.75 1.5a.75.75 0 0 0 1.072-.01l3.5-3.25a.75.75 0 0 0-1.04-1.08l-3.01 2.78-1.22-1.047a.75.75 0 0 0-1.072.01l-1.75 1.5a.75.75 0 0 0-.01 1.072z" clipRule="evenodd" />
  </svg>
);

const HeartIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.645 20.91a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06l7.5 7.5a.75.75 0 0 1-1.06 1.06l-7.5-7.5a.75.75 0 1 1 1.06-1.06l7.5 7.5Z" />
    <path d="m19.5 9.75-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 15.689l7.97-7.97a.75.75 0 0 1 1.06 1.06Z" />
    <path fillRule="evenodd" d="M12 21.75c-5.94 0-10.75-4.81-10.75-10.75S6.06 1.25 12 1.25s10.75 4.81 10.75 10.75-4.81 10.75-10.75 10.75ZM12 3a8.75 8.75 0 1 0 0 17.5A8.75 8.75 0 0 0 12 3Z" clipRule="evenodd" />
  </svg>
);


const QuoteIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0-2.863 3.62.75.75 0 0 1-1.5 0 5.25 5.25 0 0 1 5.25-5.25.75.75 0 0 1 .75.75v3.375c0 .621.504 1.125 1.125 1.125h2.25a.75.75 0 0 1 0 1.5h-2.25a2.625 2.625 0 0 1-2.625-2.625V7.5a2.25 2.25 0 0 0-2.25-2.25H6.75a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Z" clipRule="evenodd" />
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
    icon: <TelegramIcon className="w-8 h-8 text-rose-500" />
  },
  {
    id: 2,
    title: 'Daily Spiritual Quotes',
    description: 'Receive daily inspiration and wisdom to guide your path.',
    url: '#',
    icon: <QuoteIcon className="w-8 h-8 text-rose-500" />
  },
  {
    id: 3,
    title: 'Support / Donation',
    description: 'Your generous support helps us continue our spiritual mission.',
    url: '#',
    icon: <HeartIcon className="w-8 h-8 text-rose-500" />
  },
   {
    id: 4,
    title: 'Visit Our Website',
    description: 'Explore more resources, articles, and information on our main site.',
    url: '#',
    icon: <BookOpenIcon className="w-8 h-8 text-rose-500" />
  }
];
