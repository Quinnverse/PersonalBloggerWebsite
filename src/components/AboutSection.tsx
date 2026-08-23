import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, BookOpen, ArrowRight, Wand2, Compass, Bookmark, Plane, Gamepad2, Waves } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO, MEDIA_SHELF_LIST } from '../data/portfolioData';
import { TabType, MediaShelfItem } from '../types';

interface AboutSectionProps {
  onNavigateTab: (tab: TabType) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [userCustomList, setUserCustomList] = useState<MediaShelfItem[]>([]);
  const [isAddingCustom, setIsAddingCustom] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState<'科幻' | '人物传记' | '思维工具' | '哲学心理'>('人物传记');
  const [newNote, setNewNote] = useState('');

  const allBooks = [...MEDIA_SHELF_LIST, ...userCustomList];
  const filteredBooks = selectedCategory === 'all'
    ? allBooks
    : allBooks.filter(b => b.category === selectedCategory);

  const handleAddCustomBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    const newItem: MediaShelfItem = {
      id: `custom-${Date.now()}`,
      title: newTitle.trim(),
      author: newAuthor.trim() || '自选推荐',
      category: newCategory,
      tag: '我的收藏',
      note: newNote.trim() || '暂无个人评注'
    };
    setUserCustomList(prev => [newItem, ...prev]);
    setNewTitle('');
    setNewAuthor('');
    setNewNote('');
    setIsAddingCustom(false);
  };

  return (
    <section id="about-section" className="py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>01 / ABOUT & MEDIA SHELF</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">
          关于我：审美、好奇心与独立创造
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full mx-auto"></div>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          {ABOUT_DATA.tagline}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Intro & Key Traits */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              {/* Header inside Card */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative shrink-0">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border border-gray-200 shadow-xs"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    {PERSONAL_INFO.name}
                    <span className="text-xs font-semibold text-purple-500 font-mono">
                      🍧
                    </span>
                  </h3>
                  <p className="text-xs font-medium text-purple-600">
                    {PERSONAL_INFO.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-semibold">
                      {PERSONAL_INFO.mbti}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[10px] font-semibold">
                      Vibe Coder
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {ABOUT_DATA.bioParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Key Interests Summary */}
            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="text-xs font-bold text-gray-800 mb-3 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 text-purple-600" />
                <span>生活方式与常态关注</span>
              </div>
              <div className="space-y-2.5">
                {ABOUT_DATA.interests.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-gray-50/80 border border-gray-100 text-xs space-y-1"
                  >
                    <div className="font-bold text-gray-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>{item.title}</span>
                    </div>
                    <div className="text-gray-600 text-[11px] leading-relaxed pl-3">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quick Nav Banner */}
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-2xl p-5 border border-white/80 shadow-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-gray-800">探索我开发的独立工具？</div>
              <div className="text-[11px] text-gray-500">体验完形填空背诵神器与极简专注时钟</div>
            </div>
            <button
              onClick={() => onNavigateTab('products')}
              className="px-3.5 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold hover:bg-gray-50 shadow-xs border border-gray-200 transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>查看作品</span>
              <ArrowRight className="w-3 h-3 text-purple-600" />
            </button>
          </div>
        </div>

        {/* Right Column: Custom Book & Media Shelf */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm space-y-5">
            
            {/* Media Shelf Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>我的书影单与阅读记录 (Media Shelf)</span>
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  偏好科幻、传记、心理与工具书，支持自行增添与管理
                </p>
              </div>

              <button
                onClick={() => setIsAddingCustom(!isAddingCustom)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1e293b] hover:bg-black text-white text-xs font-bold shadow-xs transition-all cursor-pointer self-start sm:self-auto shrink-0"
              >
                <Bookmark className="w-3.5 h-3.5 text-purple-300" />
                <span>{isAddingCustom ? '收起添加' : '+ 添加自选书目'}</span>
              </button>
            </div>

            {/* Custom Addition Form */}
            {isAddingCustom && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                onSubmit={handleAddCustomBook}
                className="bg-purple-50/60 rounded-2xl p-4 border border-purple-100 space-y-3"
              >
                <div className="text-xs font-bold text-purple-900">
                  📖 记录并添加一本你喜爱的书籍 / 影音
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <input
                    type="text"
                    placeholder="书名 / 作品名称 *"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                    className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-500"
                  />
                  <input
                    type="text"
                    placeholder="作者 / 出处"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-500"
                  />
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="px-3 py-1.5 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-500 text-gray-700"
                  >
                    <option value="人物传记">人物传记</option>
                    <option value="科幻">科幻</option>
                    <option value="思维工具">思维工具</option>
                    <option value="哲学心理">哲学心理</option>
                  </select>
                </div>
                <textarea
                  placeholder="一句话评注或推荐理由..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-1.5 rounded-xl bg-white border border-purple-200 outline-none focus:border-purple-500 text-xs"
                ></textarea>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddingCustom(false)}
                    className="px-3 py-1 text-xs text-gray-500 hover:text-gray-800"
                  >
                    取消
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700 shadow-2xs"
                  >
                    确认加入书单
                  </button>
                </div>
              </motion.form>
            )}

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: '全部书目' },
                { id: '科幻', label: '硬核科幻 (阿西莫夫等)' },
                { id: '人物传记', label: '人物传记 (时代与实业)' },
                { id: '思维工具', label: '思维工具 (心理控制术)' },
                { id: '哲学心理', label: '哲学启蒙 (苏菲的世界)' },
              ].map((chip) => (
                <button
                  key={chip.id}
                  onClick={() => setSelectedCategory(chip.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === chip.id
                      ? 'bg-[#1e293b] text-white shadow-2xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200/70 hover:text-black'
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Books Card List */}
            <div className="space-y-3">
              {filteredBooks.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-white border border-gray-200/70 hover:border-purple-200 shadow-2xs hover:shadow-xs transition-all duration-200 group flex flex-col sm:flex-row sm:items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-600">
                        {item.tag}
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 font-medium">
                      作者 / 维度：{item.author}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pt-1">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer summary inside media shelf */}
            <div className="pt-2 text-[11px] text-gray-400 flex items-center justify-between">
              <span>✦ 开卷有益，好书带来多元视角与思考乐趣</span>
              <span className="font-mono text-purple-500 font-bold">{filteredBooks.length} ITEMS</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
