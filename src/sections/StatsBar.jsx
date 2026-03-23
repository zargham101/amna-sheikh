// src/sections/StatsBar.jsx
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { profile } from '../data/portfolioData';

const Counter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const numericValue = parseInt(value) || 0;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, numericValue, count]);

  return (
    <div ref={ref} className="text-center p-8 relative flex flex-col items-center group">
       <div className="text-section-title text-white mb-2 flex items-baseline">
            <motion.span>{rounded}</motion.span>
            <span className="text-accent-primary ml-1">+</span>
       </div>
       <p className="text-sm text-text-muted font-bold tracking-[0.2em] uppercase group-hover:text-text-secondary transition-colors">
            {label}
       </p>
    </div>
  );
};

const StatsBar = () => {
  const stats = [
    { label: 'Clients Served', value: profile.clientsServed },
    { label: 'Videos Edited', value: profile.videosEdited },
    { label: 'Social Platforms', value: profile.platforms },
    { label: 'Collaborations', value: profile.collaborations },
  ];

  return (
    <section className="bg-background-tertiary border-y border-border py-12 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
            {stats.map((stat, idx) => (
                <Counter key={idx} value={stat.value} label={stat.label} />
            ))}
        </div>
    </section>
  );
};

export default StatsBar;
