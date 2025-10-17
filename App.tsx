import React from 'react';
import ScheduleCard from './components/ScheduleCard';
import LinkCard from './components/LinkCard';
import { SCHEDULE_ITEMS, LINK_ITEMS } from './constants';
import type { ScheduleItem, LinkItem } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black/30 text-stone-200 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg font-serif">
            🌸 UPDESH 🌸
          </h1>
          <p className="text-lg md:text-xl mt-2 text-rose-200">
            A Daily Spiritual Connection
          </p>
        </header>

        <main>
          <section id="schedule" className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-white font-serif">📜 A Sacred Schedule</h2>
            <div className="space-y-6">
              {SCHEDULE_ITEMS.map((item: ScheduleItem) => (
                <ScheduleCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          <section id="highlights" className="mb-12 text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">🕊️ A Moment of Reflection</h3>
            <p className="text-rose-200 max-w-2xl mx-auto">
              Join the divine teachings of <span className="font-semibold text-stone-100">HG Paresh Prabhuji</span> for devotional songs, spiritual discourses, and guided meditation. Get your daily dose of positivity and inner peace.
            </p>
          </section>

          <section id="links">
             <h2 className="text-3xl font-bold text-center mb-8 text-white font-serif">📖 Paths to Wisdom</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {LINK_ITEMS.map((item: LinkItem) => (
                <LinkCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center mt-12 py-6 border-t border-white/10">
          <p className="text-rose-200">
            💫 Visit Our Digital Sanctuary: <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-300 hover:underline">[YourWebsiteLinkHere]</a>
          </p>
          <p className="text-sm text-stone-400 mt-2">
            🌿 Nurture your inner peace.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default App;