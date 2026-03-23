// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import { tools } from '../data/portfolioData';
import { fadeInUp, staggerContainer } from '../lib/animations';
import SectionHeader from '../components/SectionHeader';
import {
  AftereffectsOriginal,
  IllustratorOriginal,
  PhotoshopOriginal,
  PremiereproOriginal,
} from 'devicons-react';

import { CapCut } from '@lobehub/icons';

const TOOL_ICONS = {
  "Adobe Premiere Pro": PremiereproOriginal,
  "Adobe After Effects": AftereffectsOriginal,
  "Adobe Photoshop": PhotoshopOriginal,
  "Adobe Illustrator": IllustratorOriginal,
  "CapCut": CapCut,
};

const ToolCard = ({ tool, index }) => {
  const Icon = TOOL_ICONS[tool.name];

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-background-secondary p-8 rounded-3xl border border-border group hover:border-accent-primary transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent-primary/10 transition-colors" />

      <div className="flex items-start justify-between mb-8">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-background-tertiary">
          {Icon
            ? <Icon size="38" />
            : <span
              className="text-xl font-black tracking-tight"
              style={{ color: tool.color }}
            >
              {tool.badge}
            </span>
          }
        </div>

        <span className="text-text-muted text-[10px] uppercase font-bold tracking-widest bg-background-tertiary px-3 py-1 rounded-full border border-border">
          {tool.category}
        </span>
      </div>

      <h3 className="text-2xl text-white mb-4">{tool.name}</h3>

      <div className="space-y-3">
        <div className="flex justify-between items-end">
          <span className="text-xs text-text-muted font-semibold uppercase tracking-widest">
            PROFICIENCY
          </span>
          <span className="text-sm font-display text-accent-primary">
            {tool.proficiency >= 90 ? 'EXPERT' : tool.proficiency >= 80 ? 'ADVANCED' : 'INTERMEDIATE'}
          </span>
        </div>

        <div className="h-[6px] w-full bg-background-tertiary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${tool.proficiency}%` }}
            transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: 'circOut' }}
            viewport={{ once: true }}
            className="h-full bg-accent-primary glow-red"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background-secondary relative border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="MY ARSENAL"
          title="TOOLS I MASTER"
          subtitle="Precision, speed, and storytelling powered by industry-standard software."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {tools.map((tool, idx) => (
            <ToolCard key={tool.name} tool={tool} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;