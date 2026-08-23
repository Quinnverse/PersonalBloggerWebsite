import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Waves, BookOpen, Gamepad2, Compass, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { HOBBIES_LIST } from '../data/portfolioData';
import { TabType } from '../types';

interface HobbiesSectionProps {
  onNavigateTab: (tab: TabType) => void;
}

export const HobbiesSection: React.FC<HobbiesSectionProps> = ({ onNavigateTab }) => {
  const [activeHobbyId, setActiveHobbyId] = useState<string>('sports');

  const getHobbyIcon = (id: string) => {
    switch (id) {
      case 'sports':
        return <Waves className="w-4 h-4 text-cyan-600" />;
      case 'reading':
        return <BookOpen className="w-4 h-4 text-purple-600" />;
      case 'gaming':
        return <Gamepad2 className="w-4 h-4 text-indigo-600" />;
      case 'travel':
        return <Compass className="w-4 h-4 text-amber-600" />;
      default:
        return <Heart className="w-4 h-4 text-rose-600" />;
    }
  };

  return (
    <section id="hobbies-section" className="py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-wider">
          <Heart className="w-3.5 h-3.5" />
          <span>02 / LIFE & HOBBIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">
          生活与兴趣：运动、阅读、游戏与旅行
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full mx-auto"></div>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          在工作与创造之外，保持身心充沛的活力与对广阔世界的好奇心。
        </p>
      </div>

      {/* 4 Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {HOBBIES_LIST.map((hobby) => {
          const isActive = activeHobbyId === hobby.id;

          return (
            <motion.div
              key={hobby.id}
              onClick={() => setActiveHobbyId(hobby.id)}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isActive ? 'border-purple-300 ring-1 ring-purple-200' : 'border-white/90'
              }`}
            >
              {/* Image banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                
                {/* Top category chip */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800 border border-white/80 shadow-2xs flex items-center gap-1.5">
                  {getHobbyIcon(hobby.id)}
                  <span>{hobby.category}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-gray-900">
                      {hobby.title}
                    </h3>
                  </div>

                  <p className="text-xs font-medium text-purple-600">
                    {hobby.subtitle}
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed pt-1 italic bg-gray-50/80 p-3 rounded-xl border border-gray-100/80">
                    “{hobby.quote}”
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {hobby.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA to Products or Contact */}
      <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-3xl p-6 sm:p-8 border border-white/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold text-gray-900">
            想体验我制作的独立工具，或者一起交流？
          </h4>
          <p className="text-xs text-gray-600">
            欢迎试用完形填空背诵记忆神器，或在留言板写下你的想法。
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigateTab('products')}
            className="px-5 py-2.5 rounded-full bg-[#1e293b] hover:bg-black text-white text-xs font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>探索独立作品</span>
            <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
          </button>
        </div>
      </div>

    </section>
  );
};
