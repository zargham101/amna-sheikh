// src/App.jsx
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Work from './sections/Work';
import Clients from './sections/Clients';
import StatsBar from './sections/StatsBar';
import Testimonials from './sections/Testimonials';
import BookCall from './sections/BookCall';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Global Cinematic Overlay */}
      <div className="noise-overlay" />
      
      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1A1A1A',
            color: '#F5F5F5',
            border: '1px solid #2A2A2A',
            borderRadius: '1rem',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.875rem',
          },
          success: {
            iconTheme: {
              primary: '#E63946',
              secondary: '#F5F5F5',
            },
          },
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Clients />
        <StatsBar />
        <Testimonials />
        <BookCall />
      </main>

      <Footer />
    </div>
  );
}

export default App;
