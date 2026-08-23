import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Wand2, Coffee } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

const NAV_ITEMS: { id: TabType; label: string; en: string }[] = [
  { id: 'home', label: '首页', en: 'Home' },
  { id: 'about', label: '关于与书单', en: 'About & Books' },
  { id: 'hobbies', label: '兴趣生活', en: 'Life & Hobbies' },
  { id: 'products', label: '独立作品', en: 'Vibe Tools' },
  { id: 'contact', label: '留言交流', en: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4 flex justify-center"
      >
        <div
          id="main-navbar-container"
          className={`w-full max-w-5xl transition-all duration-300 rounded-full flex items-center justify-between px-3.5 sm:px-5 py-2 sm:py-2.5 ${
            scrolled
              ? 'bg-white/85 backdrop-blur-xl border border-white/70 shadow-lg shadow-black/5'
              : 'bg-white/75 backdrop-blur-lg border border-white/60 shadow-sm'
          }`}
        >
          {/* Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-indigo-500 text-white flex items-center justify-center text-xs font-bold tracking-wider shadow-sm group-hover:scale-105 transition-transform">
              🍧
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-extrabold tracking-wider text-[#1e293b] group-hover:text-black">
                小荷才露妙脆角
              </span>
              <span className="text-[10px] text-gray-400 font-medium hidden sm:inline-block">
                AI Creator · Vibe Coder
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-black/[0.03]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-[#1e293b] rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {item.id === 'products' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Vibe Tool Quick Jump */}
          <div className="flex items-center gap-2">
            <button
              id="nav-vibe-tools-btn"
              onClick={() => onSelectTab('products')}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-[#1e293b] text-xs font-semibold border border-purple-200/60 shadow-xs hover:shadow-sm transition-all duration-200 group cursor-pointer"
            >
              <Wand2 className="w-3.5 h-3.5 text-purple-600 group-hover:rotate-12 transition-transform" />
              <span>体验工具</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-gray-600 hover:bg-black/5 focus:outline-none"
              aria-label="打开菜单"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-white/95 backdrop-blur-2xl rounded-2xl p-4 shadow-xl border border-white/60 space-y-1.5"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'bg-[#1e293b] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{item.label}</span>
                  {item.id === 'products' && (
                    <span className="px-1.5 py-0.5 text-[10px] bg-purple-100 text-purple-600 rounded-md font-bold">HOT</span>
                  )}
                </span>
                <span
                  className={`text-xs ${
                    activeTab === item.id ? 'text-gray-300' : 'text-gray-400'
                  }`}
                >
                  {item.en}
                </span>
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onSelectTab('contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-xl text-sm font-medium transition-colors"
              >
                <Coffee className="w-4 h-4" />
                <span>☕ 找我喝杯咖啡 / 交流灵感</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
