import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wand2, Mail, ArrowDown, ChevronRight, Heart, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TabType } from '../types';

interface HeroSectionProps {
  onNavigateTab: (tab: TabType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateTab,
}) => {
  return (
    <section id="hero-section" className="relative min-h-[80vh] flex flex-col justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Creator Identity & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-5"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 border border-purple-100/80 shadow-2xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs font-bold tracking-wider bg-gradient-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
              VIBE CODER · AI CREATOR
            </span>
          </div>

          {/* Big Greeting Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1e293b] leading-[1.15]">
              Hi, <br />
              <span className="relative inline-block">
                我是{PERSONAL_INFO.name} 🍧
                <span className="absolute -bottom-1 left-0 right-0 h-2 bg-purple-200/60 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-gray-700 pt-1 flex items-center gap-2 flex-wrap">
              <span>{PERSONAL_INFO.title}</span>
            </p>
          </div>

          {/* Philosophy / Mindset Box */}
          <div className="w-full bg-white/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/90 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>CREATIVE PHILOSOPHY</span>
            </div>
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-semibold">
              “{PERSONAL_INFO.tagline}”
            </p>
            <p className="text-xs text-gray-500 leading-relaxed pt-1">
              大模型让想法落地的门槛大幅降低。保持对真实问题的关注与对简洁审美的坚持，快速把点子做成顺手可用的工具。
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {PERSONAL_INFO.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-700 border border-gray-200/60 shadow-2xs hover:border-purple-300 hover:text-purple-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              id="hero-explore-tools-btn"
              onClick={() => onNavigateTab('products')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1e293b] hover:bg-black text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
            >
              <Wand2 className="w-4 h-4 text-purple-300" />
              <span>体验独立小工具</span>
            </button>
            <button
              id="hero-about-me-btn"
              onClick={() => onNavigateTab('about')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/90 hover:bg-white text-gray-800 hover:text-black text-sm font-semibold border border-gray-300/80 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-98"
            >
              <Heart className="w-4 h-4 text-purple-600" />
              <span>关于我与书影单</span>
            </button>
            <button
              id="hero-contact-btn"
              onClick={() => onNavigateTab('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-purple-700 transition-colors ml-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>邮件联系</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </motion.div>

        {/* Right Column: Clean Original Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-64 sm:w-72 md:w-80 rounded-3xl p-3 bg-white/90 border border-gray-200/80 shadow-lg backdrop-blur-md flex flex-col justify-between">
            {/* Clean image frame without clutter */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Clean caption */}
            <div className="pt-3 px-1 flex items-center justify-between text-xs">
              <div>
                <div className="font-bold text-gray-900 flex items-center gap-1.5">
                  <span>小荷才露妙脆角</span>
                  <span className="text-[10px] text-purple-600 font-mono">🍧</span>
                </div>
                <div className="text-[11px] text-gray-500 mt-0.5">
                  AI 独立创作者 · Vibe Coder
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-bold text-[10px] border border-purple-100">
                NOW IN FLOW
              </span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down Hint */}
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => onNavigateTab('about')}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 hover:bg-white text-xs font-medium text-gray-600 hover:text-black border border-gray-200/60 shadow-2xs transition-all cursor-pointer group"
        >
          <span>了解关于我与书影单</span>
          <ArrowDown className="w-3 h-3 text-gray-400 group-hover:text-black group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

    </section>
  );
};
