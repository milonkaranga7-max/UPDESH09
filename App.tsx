
import React from 'react';
import ScheduleCard from './components/ScheduleCard';
import LinkCard from './components/LinkCard';
import { SCHEDULE_ITEMS, LINK_ITEMS } from './constants';
import type { ScheduleItem, LinkItem } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-pink-100 text-slate-800 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-rose-800 tracking-tight">
            🌸 UPDESH 🌸
          </h1>
          <p className="text-lg md:text-xl mt-2 text-amber-700">
            Your Daily Spiritual Connection
          </p>
        </header>

        <main>
          <section id="schedule" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">🙏 Spiritual Classes Schedule</h2>
            <div className="space-y-6">
              {SCHEDULE_ITEMS.map((item: ScheduleItem) => (
                <ScheduleCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section id="highlights" className="mb-12 text-center bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-rose-100">
            <h3 className="text-2xl font-bold text-rose-700 mb-4">✨ Stay Connected with the Divine</h3>
            <p className="text-amber-800 max-w-2xl mx-auto">
              Join the divine teachings of <span className="font-semibold">HG Paresh Dasji</span> for devotional songs, spiritual discourses, and guided meditation. Get your daily dose of positivity and inner peace.
            </p>
          </section>

          <section id="links">
             <h2 className="text-3xl font-bold text-center mb-8 text-rose-700">🌿 More Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {LINK_ITEMS.map((item: LinkItem) => (
                <LinkCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 py-6 border-t border-rose-200/50">
          <p className="text-amber-700">
            👉 Visit: <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-rose-600 hover:underline">[YourWebsiteLinkHere]</a>
          </p>
          <p className="text-sm text-rose-500 mt-2">
            💫 Transform your day with devotion, learning, and joy!
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;
