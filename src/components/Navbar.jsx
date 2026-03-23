// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';
import { profile } from '../data/portfolioData';
import Button from './Button';
import { clsx } from 'clsx';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Clients', href: '#clients' },
    { name: 'Book Call', href: '#book-call' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-background-primary/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-display text-2xl text-white flex items-center gap-1 group">
          {profile.name}
          <span className="text-accent-primary group-hover:scale-125 transition-transform duration-300">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-white font-body text-sm tracking-wide transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-4 text-text-secondary">
            <a href={profile.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors hover:scale-110">
              <FaYoutube size={20} />
            </a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors hover:scale-110">
              <FaInstagram size={20} />
            </a>
            <a href={profile.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors hover:scale-110">
              <FaTiktok size={18} />
            </a>
          </div>
          <Button variant="primary" className="px-6 py-2" onClick={() => window.location.hash = '#book-call'}>
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background-primary z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={32} className="text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-8 items-center mb-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl text-white hover:text-accent-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-auto flex flex-col items-center gap-8">
              <div className="flex gap-8 text-text-secondary">
                <a href={profile.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors scale-150">
                  <FaYoutube />
                </a>
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors scale-150">
                  <FaInstagram />
                </a>
                <a href={profile.socials.tiktok} target="_blank" rel="noreferrer" className="hover:text-accent-primary transition-colors scale-150">
                  <FaTiktok />
                </a>
              </div>
              <Button
                variant="primary"
                className="w-full max-w-sm py-4 text-lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.hash = '#book-call';
                }}
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
