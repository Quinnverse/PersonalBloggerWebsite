import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { TabType } from './types';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen mesh-gradient-bg text-[#1e293b]">
      
      {/* Floating Header Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main Content Area */}
      <main className="relative z-10 pt-4 pb-20">
        
        {/* Tab 1: 首页 (Home - with unified flowing sections) */}
        {activeTab === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            <HeroSection
              onNavigateTab={handleSelectTab}
            />
            
            <div className="border-t border-purple-100/40 my-6"></div>
            <AboutSection onNavigateTab={handleSelectTab} />
            
            <div className="border-t border-purple-100/40 my-6"></div>
            <ProductsSection onNavigateTab={handleSelectTab} />

            <div className="border-t border-purple-100/40 my-6"></div>
            <HobbiesSection onNavigateTab={handleSelectTab} />
            
            <div className="border-t border-purple-100/40 my-6"></div>
            <ContactSection onNavigateTab={handleSelectTab} />
          </motion.div>
        )}

        {/* Tab 2: 关于与书单 (About & Books) */}
        {activeTab === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-16 sm:pt-20"
          >
            <AboutSection onNavigateTab={handleSelectTab} />
          </motion.div>
        )}

        {/* Tab 3: 兴趣生活 (Hobbies) */}
        {activeTab === 'hobbies' && (
          <motion.div
            key="hobbies"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-16 sm:pt-20"
          >
            <HobbiesSection onNavigateTab={handleSelectTab} />
          </motion.div>
        )}

        {/* Tab 4: 独立作品 (Products & Vibe Tools) */}
        {activeTab === 'products' && (
          <motion.div
            key="products"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-16 sm:pt-20"
          >
            <ProductsSection onNavigateTab={handleSelectTab} />
          </motion.div>
        )}

        {/* Tab 5: 留言交流 (Contact) */}
        {activeTab === 'contact' && (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="pt-16 sm:pt-20"
          >
            <ContactSection onNavigateTab={handleSelectTab} />
          </motion.div>
        )}

      </main>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md text-gray-800 hover:text-black border border-gray-200/80 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          title="回到顶部"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}

    </div>
  );
}
