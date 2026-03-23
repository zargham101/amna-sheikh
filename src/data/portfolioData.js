// src/data/portfolioData.js

export const profile = {
  name: "Amna Sheikh",
  title: "Video Editor & Content Creator",
  tagline: "I don't just edit videos — I craft stories that stop the scroll.",
  bioShort: "Freelance video editor with a passion for storytelling across YouTube, Instagram, and TikTok. Worked with 10+ clients, created content in beauty, lifestyle, and brand niches.",
  whatsapp: "+92 335 0456301", // Without + sign
  email: "amnauituts@gmail.com",
  location: "Pakistan",
  yearsExperience: "3",
  clientsServed: "10+",
  videosEdited: "100+",
  platforms: 3,
  collaborations: "10+",
  profileImg: "/amna.jpeg",
  socials: {
    youtube: "https://www.youtube.com/@lahorisisters",
    instagram: "https://www.instagram.com/igamnasheikh?igsh=cXNrYmZodWZ4dTZk",
    tiktok: "https://www.tiktok.com/@amnahaiguriya?_r=1&_t=ZP-94w3xhdhZyI",
  }
};

export const tools = [
  { name: "Adobe Premiere Pro", category: "Video Editing", proficiency: 90, color: "#9999FF", icon: "SiAdobepremierepro" },
  { name: "Adobe After Effects", category: "Motion Graphics", proficiency: 85, color: "#9999FF", icon: "SiAdobeaftereffects" },
  { name: "CapCut", category: "Video Editing", proficiency: 95, color: "#FFFFFF", icon: "SiCapcut" },
  { name: "Adobe Photoshop", category: "Design", proficiency: 80, color: "#31A8FF", icon: "SiAdobephotoshop" },
  { name: "Adobe Illustrator", category: "Design", proficiency: 75, color: "#FF9A00", icon: "SiAdobeillustrator" },
];

export const youtubeContent = {
  longForm: [
    { id: "LF1", videoId: "dQw4w9WgXcQ", title: "Product Launch: Brand X", category: "Brand Video", views: "10K+" },
    { id: "LF2", videoId: "dQw4w9WgXcQ", title: "Beauty Secrets Tutorial", category: "Tutorial", views: "25K+" },
    { id: "LF3", videoId: "dQw4w9WgXcQ", title: "Behind the Scenes - Vlog", category: "Vlog", views: "5K+" },
  ],
  shorts: [
    { id: "S1", videoId: "dQw4w9WgXcQ", title: "Makeup Trick #1", category: "Shorts", views: "100K+" },
    { id: "S2", videoId: "dQw4w9WgXcQ", title: "Editing Hack", category: "Shorts", views: "50K+" },
    { id: "S3", videoId: "dQw4w9WgXcQ", title: "Transition Showreel", category: "Shorts", views: "200K+" },
    { id: "S4", videoId: "dQw4w9WgXcQ", title: "Color Grade Quicktip", category: "Shorts", views: "15K+" },
  ]
};

export const instagramReels = [
  { id: "R1", reelId: "reel_id_1", title: "Style Edit", caption: "Fresh styles for the season...", views: "30K+" },
  { id: "R2", reelId: "reel_id_2", title: "Lifestyle Shot", caption: "A day in the life...", views: "12K+" },
  { id: "R3", reelId: "reel_id_3", title: "Transition Magic", caption: "Seamless transitions only...", views: "45K+" },
  { id: "R4", reelId: "reel_id_4", title: "Beauty Reel", caption: "Glow up tips...", views: "22K+" },
];

export const tiktokVideos = [
  { id: "T1", videoId: "tiktok_id_1", title: "Viral Trend #1", caption: "Can't believe this worked...", views: "500K+" },
  { id: "T2", videoId: "tiktok_id_2", title: "POV: Editing", caption: "3 AM vibes...", views: "80K+" },
  { id: "T3", videoId: "tiktok_id_3", title: "Tutorial Pt. 1", caption: "Save this for later...", views: "150K+" },
  { id: "T4", videoId: "tiktok_id_4", title: "Aesthetic Morning", caption: "Good vibes only...", views: "40K+" },
];

export const clientProjects = [
  { id: 1, name: "Brand Client 1", type: "Brand Video", platform: "YouTube", desc: "60s product launch video", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=1" },
  { id: 2, name: "Creator Collab 1", type: "Collaboration", platform: "YouTube", desc: "Joint vlog edit", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=2" },
  { id: 3, name: "Brand Client 2", type: "Social Media", platform: "Instagram", desc: "5-reel campaign", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=3" },
  { id: 4, name: "Makeup Artist 1", type: "Tutorial", platform: "TikTok", desc: "Tutorial series edit", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=4" },
  { id: 5, name: "Brand Client 3", type: "Brand Video", platform: "YouTube", desc: "Behind the scenes video", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=5" },
  { id: 6, name: "Creator Collab 2", type: "Collaboration", platform: "YouTube", desc: "Channel promo", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=6" },
  { id: 7, name: "Business Client 1", type: "Brand Video", platform: "All", desc: "Full content package", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=7" },
  { id: 8, name: "Beauty Brand 1", type: "Social Media", platform: "Instagram", desc: "Reel campaign", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=8" },
  { id: 9, name: "Lifestyle Creator", type: "Collaboration", platform: "Shorts", desc: "Shorts series", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=9" },
  { id: 10, name: "Local Business", type: "Brand Video", platform: "YouTube", desc: "Ad video", thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=10" },
];

export const testimonials = [
  { id: 1, name: "Jane Smith", brand: "Beauty Lab", feedback: "Amazing work! The edits were exactly what our brand needed to scale on TikTok.", stars: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane" },
  { id: 2, name: "John Creator", brand: "YT Channel", feedback: "The best editor I've worked with. Fast turnarounds and incredible storytelling.", stars: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john" },
  { id: 3, name: "Alice Brand", brand: "Startup X", feedback: "Professional and creative. They turned our raw footage into a cinematic masterpiece.", stars: 5, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice" },
];
