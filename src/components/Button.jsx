// src/components/Button.jsx
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, variant = 'primary', className, onClick, ...props }) => {
  const baseStyles = 'px-8 py-3 rounded-full font-body font-medium transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-accent-primary text-white hover:bg-[#ff4d5a] glow-red',
    secondary: 'bg-white text-background-primary hover:bg-gray-200',
    outline: 'border border-border text-white hover:bg-white/5',
    ghost: 'text-text-secondary hover:text-white',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(baseStyles, variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
