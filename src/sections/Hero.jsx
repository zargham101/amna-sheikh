// src/sections/Hero.jsx
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { profile } from '../data/portfolioData';
import { staggerContainer, fadeInUp, fadeInRight } from '../lib/animations';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-gradient">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-left"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-text-secondary uppercase tracking-[0.3em] text-xs font-semibold">
              FREELANCE VIDEO EDITOR
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-hero text-white mb-8"
          >
            I CRAFT<br />
            STORIES<br />
            <span className="text-accent-primary">THAT CONVERT</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-text-secondary text-xl font-body max-w-lg mb-12 leading-relaxed"
          >
            {profile.tagline} • YouTube • Instagram • TikTok • Brand Videos
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-16">
            <Button variant="primary" onClick={() => window.location.hash = '#work'} className="px-10 py-4">
              View My Work →
            </Button>
            <Button variant="outline" onClick={() => window.location.hash = '#book-call'} className="px-10 py-4">
              Book a Call
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
            {[
              { label: 'Clients Served', value: profile.clientsServed },
              { label: 'Videos Edited', value: profile.videosEdited },
              { label: 'Platforms', value: profile.platforms },
              { label: 'Exp. Years', value: profile.yearsExperience },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-display text-white mb-1">{stat.value}</p>
                <p className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Stacked Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          className="hidden lg:flex justify-center relative h-[600px]"
        >
          {[
            { rotate: -15, x: -60, scale: 0.9, opacity: 0.4 },
            { rotate: 10, x: 40, scale: 0.95, opacity: 0.6 },
            { rotate: -5, x: 0, scale: 1, opacity: 1 },
          ].map((style, idx) => (
            <motion.div
              key={idx}
              whileHover={{ rotate: 0, x: 0, scale: 1.05, zIndex: 10 }}
              transition={{ type: 'spring', damping: 15 }}
              style={{
                rotate: style.rotate,
                x: style.x,
                scale: style.scale,
                opacity: style.opacity,
              }}
              className="absolute w-[400px] aspect-[9/16] bg-background-secondary rounded-2xl border border-border overflow-hidden shadow-2xl transition-opacity duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 to-transparent" />
              {/* Placeholder Video Pattern */}
              <div className="w-full h-full bg-slate-900/50 flex items-center justify-center">
                 <div className="w-16 h-16 rounded-full border-2 border-accent-primary flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-accent-primary border-b-[10px] border-b-transparent ml-1" />
                 </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
