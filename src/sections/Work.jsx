// src/sections/Work.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  youtubeContent, 
  instagramReels, 
  tiktokVideos, 
  profile 
} from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import { fadeInUp, staggerContainer, scaleIn } from '../lib/animations';
import { FaYoutube, FaInstagram, FaTiktok, FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import Button from '../components/Button';
import { clsx } from 'clsx';

const Tabs = {
  YOUTUBE: 'youtube',
  INSTAGRAM: 'instagram',
  TIKTOK: 'tiktok',
};

const VideoCard = ({ video, type }) => {
  const isShortForm = type !== 'long-form';
  const youtubeUrl = type === 'shorts' ? `https://www.youtube.com/shorts/${video.videoId}` : `https://www.youtube.com/watch?v= ${video.videoId}`;
  const instagramUrl = `https://www.instagram.com/reels/${video.reelId}`;
  const tiktokUrl = `https://www.tiktok.com/video/${video.videoId}`;

  const getUrl = () => {
     if (type === 'long-form' || type === 'shorts') return youtubeUrl;
     if (type === 'instagram') return instagramUrl;
     if (type === 'tiktok') return tiktokUrl;
  };

  const getThumbnail = () => {
    if (type === 'long-form' || type === 'shorts') return `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;
    return 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800'; // Placeholder for Insta/TikTok
  };

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, scale: 1.02 }}
      className={clsx(
        'group relative bg-background-secondary rounded-2xl border border-border overflow-hidden cursor-pointer shadow-lg transition-all duration-300',
        isShortForm ? 'aspect-[9/16]' : 'aspect-video'
      )}
      onClick={() => window.open(getUrl(), '_blank')}
    >
      <img
        src={getThumbnail()}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent opacity-80" />
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
        <FaPlayCircle size={64} className="text-accent-primary drop-shadow-[0_0_20px_rgba(230,57,70,0.5)]" />
      </div>

      {type === 'shorts' && (
        <span className="absolute top-4 left-4 bg-accent-primary text-[10px] font-bold tracking-widest px-3 py-1 rounded-full text-white uppercase glow-red">
          SHORTS
        </span>
      )}

      {video.views && (
        <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-[10px] text-white font-bold tracking-widest px-3 py-1 rounded-full border border-white/10 uppercase">
          {video.views} VIEWS
        </span>
      )}

      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-accent-primary text-[10px] uppercase font-bold tracking-[0.2em] mb-2 block">
          {video.category || type.toUpperCase()}
        </span>
        <h4 className="text-lg text-white font-display mb-1 truncate">{video.title || video.caption}</h4>
        {isShortForm && (
            <p className="text-xs text-text-secondary truncate opacity-0 group-hover:opacity-100 transition-opacity">
                {video.caption || '@' + profile.name.toLowerCase().replace(' ', '')}
            </p>
        )}
      </div>
    </motion.div>
  );
};

const Work = () => {
  const [activeTab, setActiveTab] = useState(Tabs.YOUTUBE);
  const [youtubeSubtab, setYoutubeSubtab] = useState('long-form');

  const tabContent = {
    [Tabs.YOUTUBE]: (
      <div key="youtube-content">
        <div className="flex justify-center gap-4 mb-12">
            <button
                onClick={() => setYoutubeSubtab('long-form')}
                className={clsx('px-6 py-2 rounded-full font-body text-sm transition-all', youtubeSubtab === 'long-form' ? 'bg-white text-black' : 'text-text-secondary hover:text-white')}
            >
                📺 LONG-FORM
            </button>
            <button
                onClick={() => setYoutubeSubtab('shorts')}
                className={clsx('px-6 py-2 rounded-full font-body text-sm transition-all', youtubeSubtab === 'shorts' ? 'bg-white text-black' : 'text-text-secondary hover:text-white')}
            >
                ⚡ SHORTS
            </button>
        </div>
        
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className={clsx(
                'grid gap-6',
                youtubeSubtab === 'long-form' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
            )}
        >
            {youtubeContent[youtubeSubtab === 'long-form' ? 'longForm' : 'shorts'].map((video) => (
                <VideoCard key={video.id} video={video} type={youtubeSubtab} />
            ))}
        </motion.div>
      </div>
    ),
    [Tabs.INSTAGRAM]: (
       <motion.div
          key="instagram-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
       >
          {instagramReels.map((video) => (
              <VideoCard key={video.id} video={video} type="instagram" />
          ))}
       </motion.div>
    ),
    [Tabs.TIKTOK]: (
        <motion.div
           key="tiktok-content"
           variants={staggerContainer}
           initial="hidden"
           animate="visible"
           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
           {tiktokVideos.map((video) => (
               <VideoCard key={video.id} video={video} type="tiktok" />
           ))}
        </motion.div>
     ),
  };

  return (
    <section id="work" className="py-24 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          align="center"
          label="PORTFOLIO HIGHLIGHTS"
          title="SELECTED WORKS"
          subtitle="Explore my creations across various platforms and content styles."
        />

        {/* Global Tabs */}
        <div className="flex justify-center mb-12">
            <div className="bg-background-secondary p-1 rounded-full border border-border flex gap-1">
                <button
                    onClick={() => setActiveTab(Tabs.YOUTUBE)}
                    className={clsx('px-8 py-3 rounded-full flex items-center gap-2 font-body text-sm transition-all', activeTab === Tabs.YOUTUBE ? 'bg-accent-primary text-white shadow-lg' : 'text-text-secondary hover:text-white')}
                >
                    <FaYoutube /> YOUTUBE
                </button>
                <button
                    onClick={() => setActiveTab(Tabs.INSTAGRAM)}
                    className={clsx('px-8 py-3 rounded-full flex items-center gap-2 font-body text-sm transition-all', activeTab === Tabs.INSTAGRAM ? 'bg-accent-primary text-white shadow-lg' : 'text-text-secondary hover:text-white')}
                >
                    <FaInstagram /> INSTAGRAM
                </button>
                <button
                    onClick={() => setActiveTab(Tabs.TIKTOK)}
                    className={clsx('px-8 py-3 rounded-full flex items-center gap-2 font-body text-sm transition-all', activeTab === Tabs.TIKTOK ? 'bg-accent-primary text-white shadow-lg' : 'text-text-secondary hover:text-white')}
                >
                    <FaTiktok size={14} /> TIKTOK
                </button>
            </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
             <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
             >
                {tabContent[activeTab]}
             </motion.div>
        </AnimatePresence>

        <div className="mt-20 flex justify-center">
             <Button
                variant="outline"
                className="group"
                onClick={() => window.open(profile.socials[activeTab], '_blank')}
             >
                Visit Full {activeTab.toUpperCase()} Profile 
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
             </Button>
        </div>
      </div>
    </section>
  );
};

export default Work;
