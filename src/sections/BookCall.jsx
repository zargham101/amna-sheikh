// src/sections/BookCall.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeInUp, fadeInLeft, fadeInRight } from '../lib/animations';
import Button from '../components/Button';
import { FaWhatsapp, FaEnvelope, FaCalendarCheck, FaClock, FaDollarSign } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const BookCall = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: 'YouTube Video',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in required fields (Name, Email, Message)');
      return false;
    }
    return true;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = `
NEW PROJECT INQUIRY

----------------------------------------
CLIENT INFORMATION
----------------------------------------
Name: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp || 'Not provided'}

----------------------------------------
PROJECT DETAILS
----------------------------------------
Project Type: ${formData.projectType}
Preferred Date: ${formData.date || 'TBD'}

----------------------------------------
MESSAGE
----------------------------------------
${formData.message}

----------------------------------------
Sent via Portfolio Website
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const sanitizedNumber = profile.whatsapp.replace(/\D/g, ''); // Removes all non-digit characters
    window.open(`https://wa.me/${sanitizedNumber}?text=${encodedMessage}`, "_blank");
    toast.success("Opening WhatsApp...");
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const body = `
New Project Inquiry from ${formData.name}

Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Project Type: ${formData.projectType}
Preferred Date: ${formData.date}

Message:
${formData.message}
    `.trim();

    const subject = `[Portfolio] Project Inquiry from ${formData.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening Email Client...");
  };

  const inputStyles = "w-full bg-background-tertiary border border-border rounded-xl px-5 py-3 text-white focus:border-accent-primary focus:ring-1 focus:ring-accent-primary outline-none transition-all placeholder:text-text-muted text-sm font-body mb-5";
  const labelStyles = "block text-[10px] text-text-muted font-bold tracking-widest uppercase mb-2";

  return (
    <section id="book-call" className="py-24 bg-background-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="LET'S WORK TOGETHER"
          title="BOOK A DISCOVERY CALL"
          subtitle="Tell me about your project — let's make something amazing."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="bg-background-primary p-8 md:p-12 rounded-[2.5rem] border border-border shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 rounded-full blur-[60px] pointer-events-none" />

            <form className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <div>
                  <label className={labelStyles}>Full Name *</label>
                  <input name="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} className={inputStyles} required />
                </div>
                <div>
                  <label className={labelStyles}>Email Address *</label>
                  <input name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} className={inputStyles} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                <div>
                  <label className={labelStyles}>WhatsApp (Optional)</label>
                  <input name="whatsapp" type="tel" placeholder="+92 XXX XXXXXXX" value={formData.whatsapp} onChange={handleChange} className={inputStyles} />
                </div>
                <div>
                  <label className={labelStyles}>Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className={inputStyles}>
                    <option>YouTube Video</option>
                    <option>Instagram Reels</option>
                    <option>TikTok Content</option>
                    <option>Brand Video</option>
                    <option>Full Package</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelStyles}>Preferred Date</label>
                <input name="date" type="date" value={formData.date} onChange={handleChange} className={inputStyles} />
              </div>

              <div>
                <label className={labelStyles}>Your Message *</label>
                <textarea name="message" rows="4" placeholder="Briefly describe your vision..." value={formData.message} onChange={handleChange} className={inputStyles} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Button variant="primary" onClick={handleWhatsApp} className="py-4 text-sm tracking-widest uppercase font-bold">
                  <FaWhatsapp size={20} /> Book via WhatsApp
                </Button>
                <Button variant="outline" onClick={handleEmail} className="py-4 text-sm tracking-widest uppercase font-bold text-text-secondary">
                  <FaEnvelope size={18} /> Send via Email
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="lg:pl-12 py-8"
          >
            <h3 className="text-3xl text-white mb-10 uppercase tracking-widest">WHAT TO EXPECT</h3>
            <div className="space-y-8">
              {[
                { icon: FaCalendarCheck, title: "30-Min Discovery", desc: "A free call to discuss your project vision & goals." },
                { icon: FaClock, title: "Timeline Breakdown", desc: "Clear deadlines and milestone tracking from start to finish." },
                { icon: FaDollarSign, title: "Custom Pricing", desc: "Transparent pricing packages tailored to your specific needs." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-background-tertiary flex items-center justify-center border border-border group-hover:border-accent-primary transition-all duration-300">
                    <item.icon className="text-accent-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg text-white mb-1 uppercase tracking-wider">{item.title}</h4>
                    <p className="text-sm text-text-muted group-hover:text-text-secondary transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-background-tertiary rounded-3xl border border-border">
              <p className="text-sm text-accent-primary font-bold tracking-[0.2em] mb-4 uppercase">Direct Contact</p>
              <div className="flex flex-col gap-4 text-text-secondary font-body">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Typically responds within 24 hours
                </p>
                <p>Email: <a href={`mailto:${profile.email}`} className="text-white hover:text-accent-primary transition-colors">{profile.email}</a></p>
                <p>Location: <span className="text-white">{profile.location}</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
