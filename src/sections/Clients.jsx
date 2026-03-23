// src/sections/Clients.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clientProjects } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations';
import { clsx } from 'clsx';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

const Filters = ['All', 'YouTube', 'Instagram', 'TikTok', 'Brand', 'Collab'];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      whileHover={{ scale: 1.02 }}
      className="bg-background-secondary rounded-2xl border border-border p-5 group transition-all duration-300 hover:border-accent-primary"
    >
      <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-background-primary/40 group-hover:bg-transparent transition-colors duration-500" />
        
        <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] text-white font-bold tracking-widest border border-white/10 uppercase">
                {project.type}
            </span>
            <span className="px-3 py-1 bg-accent-primary/80 backdrop-blur-md rounded-full text-[10px] text-white font-bold tracking-widest uppercase">
                {project.platform}
            </span>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="bg-white/10 backdrop-blur-lg p-4 rounded-full border border-white/20">
                <FaExternalLinkSquareAlt size={24} className="text-white" />
             </div>
        </div>
      </div>

      <h4 className="text-xl text-white font-display uppercase tracking-wider mb-2 group-hover:text-accent-primary transition-colors">
        {project.name}
      </h4>
      <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
        {project.desc}
      </p>
    </motion.div>
  );
};

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = clientProjects.filter((p) => {
    if (activeFilter === 'All') return true;
    return (
        p.platform.toLowerCase().includes(activeFilter.toLowerCase()) || 
        p.type.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section id="clients" className="py-24 bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="left"
          label="THE PORTFOLIO"
          title="CLIENT WORK & COLLABS"
          subtitle="Trusted by creators and brands globally to tell their unique stories."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {Filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={clsx(
                'px-8 py-2 rounded-full font-body text-xs tracking-widest uppercase font-bold transition-all border',
                activeFilter === filter
                  ? 'bg-accent-primary text-white border-accent-primary glow-red'
                  : 'bg-background-tertiary text-text-muted border-border hover:text-white hover:border-white/50'
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
