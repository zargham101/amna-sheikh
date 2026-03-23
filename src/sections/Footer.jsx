// src/sections/Footer.jsx
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { fadeInUp } from '../lib/animations';
import { FaYoutube, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-background-primary pt-24 pb-12 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <a href="#home" className="font-display text-4xl text-white flex items-center gap-1 group">
            {profile.name}
            <span className="text-accent-primary animate-pulse">.</span>
          </a>
          <p className="text-text-secondary leading-relaxed font-body">
            {profile.bioShort}
          </p>
          <div className="flex gap-4 text-text-secondary">
             {[
               { Icon: FaYoutube, href: profile.socials.youtube },
               { Icon: FaInstagram, href: profile.socials.instagram },
               { Icon: FaTiktok, href: profile.socials.tiktok },
               { Icon: FaWhatsapp, href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}` },
               { Icon: FaEnvelope, href: `mailto:${profile.email}` },
             ].map((item, idx) => (
                <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer">
                  <item.Icon size={20} className="hover:text-accent-primary cursor-pointer transition-colors" />
                </a>
             ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
           <h4 className="text-white font-display uppercase tracking-widest text-lg">NAVIGATION</h4>
           <div className="flex flex-col gap-3 font-body text-text-secondary text-sm">
             {['Home', 'About', 'Work', 'Clients', 'Book a Call'].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-accent-primary transition-colors hover:pl-2">
                  {link}
                </a>
             ))}
           </div>
        </div>

        {/* Platforms */}
        <div className="space-y-6">
           <h4 className="text-white font-display uppercase tracking-widest text-lg">PLATFORMS</h4>
           <div className="flex flex-col gap-3 font-body text-text-secondary text-sm">
             {['YouTube (Long-Form)', 'YouTube Shorts', 'Instagram Reels', 'TikTok Videos'].map((item) => (
                <a key={item} href="#work" className="hover:text-accent-primary transition-colors hover:pl-2">
                  {item}
                </a>
             ))}
           </div>
        </div>

        {/* Reach Out */}
        <div className="space-y-6">
           <h4 className="text-white font-display uppercase tracking-widest text-lg">REACH OUT</h4>
           <div className="flex flex-col gap-4 font-body text-text-secondary text-sm">
              <a href={`https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent-primary/50 transition-all group">
                 <FaWhatsapp className="text-accent-primary group-hover:scale-125 transition-transform" />
                 <span className="text-white font-bold">{profile.whatsapp}</span>
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-accent-primary/50 transition-all group">
                 <FaEnvelope className="text-accent-primary group-hover:scale-125 transition-transform" />
                 <span className="text-white font-bold">{profile.email}</span>
              </a>
              <p className="text-xs text-text-muted mt-2 tracking-widest uppercase flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                 BASED IN {profile.location}
              </p>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-text-muted text-xs uppercase tracking-[0.2em]">
            © 2026 {profile.name} - ALL RIGHTS RESERVED.
         </p>
         <p className="text-text-muted text-xs uppercase tracking-[0.1em] flex items-center gap-2">
            CRAFTED WITH <span className="text-accent-primary">♥</span> FOR STORYTELLING
         </p>
      </div>
    </footer>
  );
};

export default Footer;
