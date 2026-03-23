// src/sections/About.jsx
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { fadeInUp, fadeInLeft, fadeInRight } from '../lib/animations';
import SectionHeader from '../components/SectionHeader';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <SectionHeader
            label="ABOUT ME"
            title="THE CREATIVE VISIONNAIRE"
            subtitle={profile.bioShort}
          />
          
          <div className="mt-8">
            <h3 className="text-xl text-white uppercase tracking-wider mb-6">NICHES I EXCEL IN</h3>
            <div className="flex flex-wrap gap-3">
              {['Beauty & Makeup', 'Lifestyle', 'Brand Content', 'Tutorial Videos'].map((niche) => (
                <span key={niche} className="px-6 py-2 rounded-full border border-border text-text-secondary text-sm hover:border-accent-primary hover:text-white transition-colors">
                  {niche}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Profile Card */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeInRight}
           className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative bg-background-secondary p-8 rounded-3xl border border-border-color shadow-2xl max-w-md mx-auto">
            <div className="flex flex-col items-center text-center">
               <div className="w-[180px] h-[180px] rounded-full border-4 border-accent-primary p-2 mb-8 relative overflow-hidden">
                 <img src={profile.profileImg} alt={profile.name} className="w-full h-full rounded-full object-cover bg-background-primary transition-transform duration-700 hover:scale-110" />
               </div>
               
               <h3 className="text-3xl text-white mb-2">{profile.name}</h3>
               <p className="text-accent-primary uppercase tracking-widest text-xs font-semibold mb-6">
                 {profile.title}
               </p>
               
               <p className="font-accent text-2xl text-text-secondary italic mb-8">
                 "Every frame tells a story."
               </p>
               
               <div className="flex gap-6 text-text-secondary">
                 <a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer">
                   <FaYoutube size={24} className="hover:text-accent-primary cursor-pointer transition-colors" />
                 </a>
                 <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer">
                   <FaInstagram size={24} className="hover:text-accent-primary cursor-pointer transition-colors" />
                 </a>
                 <a href={profile.socials.tiktok} target="_blank" rel="noopener noreferrer">
                   <FaTiktok size={22} className="hover:text-accent-primary cursor-pointer transition-colors" />
                 </a>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
