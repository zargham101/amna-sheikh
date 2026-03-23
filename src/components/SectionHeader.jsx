// src/components/SectionHeader.jsx
import { motion } from 'framer-motion';
import { fadeInUp } from '../lib/animations';
import { clsx } from 'clsx';

const SectionHeader = ({ label, title, subtitle, align = 'left', className }) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={clsx('mb-12 max-w-3xl', alignment[align], className)}
    >
      {label && (
        <span className="text-accent-primary uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
          {label}
        </span>
      )}
      <h2 className="text-section-title text-white uppercase mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg font-body leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
