// src/sections/Testimonials.jsx
import { motion } from 'framer-motion';
import { testimonials } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeInUp, staggerContainer } from '../lib/animations';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="bg-background-secondary p-8 rounded-3xl border-l-4 border-accent-primary border border-border transition-all duration-300 group hover:border-white/10"
    >
      <div className="flex gap-1 mb-6 text-accent-secondary">
        {[...Array(item.stars)].map((_, i) => (
          <FaStar key={i} size={14} />
        ))}
      </div>
      
      <FaQuoteLeft className="text-accent-primary/20 mb-6 group-hover:text-accent-primary/40 transition-colors" size={32} />
      
      <p className="text-lg text-text-secondary font-body leading-relaxed mb-10 min-h-[100px] italic">
        "{item.feedback}"
      </p>

      <div className="flex items-center gap-4 border-t border-border pt-8">
        <img
          src={item.avatar}
          alt={item.name}
          className="w-12 h-12 rounded-full border border-border p-0.5"
        />
        <div>
          <h4 className="text-white font-display uppercase tracking-widest">{item.name}</h4>
          <p className="text-xs text-text-muted font-bold tracking-widest uppercase">{item.brand}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background-primary relative overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="WHAT CLIENTS SAY"
          title="REAL FEEDBACK"
          subtitle="Testimonials from creators and brand partners who saw real results."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
