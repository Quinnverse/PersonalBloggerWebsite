import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ExternalLink,
  Wand2,
  Play,
  RotateCcw,
  CheckCircle2,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Keyboard,
  ArrowUpRight,
  Compass,
  BookOpen,
  Waves
} from 'lucide-react';
import { VIBE_TOOLS_LIST } from '../data/portfolioData';
import { TabType } from '../types';

interface ProductsSectionProps {
  onNavigateTab: (tab: TabType) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onNavigateTab }) => {
  // Interactive Sandbox state for Cloze Recitation
  const [clozeAnswers, setClozeAnswers] = useState<{ [key: number]: string }>({});
  const [clozeChecked, setClozeChecked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Sample cloze text
  const clozeData = {
    title: '认知心理学与主动回忆 (Active Recall)',
    segments: [
      { text: '学习的本质不是被动的反复输入，而是主动的 ' },
      { blank: '提取', id: 0, hint: '两字动词，回忆检索' },
      { text: ' (Retrieval)。通过自动在文本中制造 ' },
      { blank: '完形填空', id: 1, hint: '四字，题型名称' },
      { text: '，强迫大脑在神经突触中进行 ' },
      { blank: '主动回忆', id: 2, hint: '四字，Active Recall' },
      { text: '，能够将长期记忆巩固效率提升 300% 以上。' }
    ]
  };

  const handleClozeInputChange = (id: number, val: string) => {
    setClozeAnswers(prev => ({ ...prev, [id]: val }));
    setClozeChecked(false);
  };

  const handleCheckCloze = () => {
    setClozeChecked(true);
  };

  const handleResetCloze = () => {
    setClozeAnswers({});
    setClozeChecked(false);
    setShowAnswer(false);
  };

  // Interactive Prompt Palette State
  const [selectedMood, setSelectedMood] = useState<'travel' | 'cyber' | 'minimal'>('travel');
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const promptPresets = {
    travel: {
      title: '⛵ 欧洲沿海小镇漫步 (European Coastal Wander)',
      prompt: 'Cinematic sunny morning on European cobblestone cafe terrace, overlooking Mediterranean blue sea and pastel village houses, soft warm golden hour light, relaxed aesthetic, 8k photography --ar 16:9',
      colors: ['#2A9D8F', '#E76F51', '#F4A261', '#264653']
    },
    cyber: {
      title: '🌧️ 雨夜极简写作者 (Midnight Vibe Coder)',
      prompt: 'Aesthetic cozy cyber workspace at 2am, soft neon lavender ambient glow on mechanical keyboard, raindrops running down glass window, bokeh city lights, lo-fi aesthetic, peaceful solitary focus, cinematic lighting --ar 16:9 --v 6.0',
      colors: ['#1A162B', '#6D5DF6', '#F379A2', '#F9FAFB']
    },
    minimal: {
      title: '☕ 阳光木质书桌与晨读 (Cozy Morning Desk)',
      prompt: 'Minimalist wooden workspace bathed in morning sun rays, an open book with neat typography, ceramic coffee mug, small green plant, peaceful Scandinavian interior, hyper-realistic, 8k --ar 16:9',
      colors: ['#D4A373', '#CCD5AE', '#E9EDC9', '#FAEDCD']
    }
  };

  // Interactive Timer state
  const [timerSeconds, setTimerSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section id="products-section" className="py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-wider">
          <Wand2 className="w-3.5 h-3.5" />
          <span>03 / VIBE CODING & INDEPENDENT PRODUCTS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">
          Vibe Coding 独立产品与工具实践
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full mx-auto"></div>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          用简洁朴素的代码解决真实的问题。将对认知心理学、记忆模型与效率工具的思考，快速落地为可随时交互的轻量应用。
        </p>
      </div>

      {/* FEATURE 1: Cloze Recitation Tool (Hero Banner + Live Interactive Sandbox) */}
      <div className="mb-12 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/90 shadow-sm relative overflow-hidden">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>主推独立产品 · 已上线</span>
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold font-mono">
              ACTIVE RECALL
            </span>
          </div>

          <a
            href="https://quinnverse.github.io/vibe_coding_cloze_recitation/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1e293b] hover:bg-black text-white text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer group"
          >
            <span>打开网页线上完整版</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              ⚡ 完形填空极速背诵记忆神器
            </h3>
            <p className="text-xs font-mono text-purple-600 font-bold">
              Cloze Recitation & Active Recall Flow
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              基于认知心理学主动回忆理论打造。支持一键导入教材或笔记，智能算法自动识别核心术语精准挖空，配合全键盘流盲打校验，让背诵不再枯燥，记忆巩固效率提升 300%。
            </p>

            {/* Features */}
            <div className="space-y-2 pt-1">
              {[
                '⚡ 自动化关键词挖空：精准识别术语核心考点，告别被动浏览',
                '⌨️ 全键盘盲打体验：Tab / Enter 丝滑切题，契合大脑瞬间提取反射',
                '🎯 即时正误校验：色彩高亮即时反馈，支持一键查看对比',
                '🌿 极简无广告：清爽呼吸感排版，沉浸于纯粹的心流状态'
              ].map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Live Link Button Bar */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href="https://quinnverse.github.io/vibe_coding_cloze_recitation/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>🚀 立即访问 GitHub Pages 完整版</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-gray-400">
                或在右侧沙盒中直接试玩 ↘
              </span>
            </div>
          </div>

          {/* Interactive Mini Sandbox on the Right */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-tr from-purple-50/80 via-pink-50/50 to-indigo-50/80 rounded-2xl p-5 sm:p-6 border border-purple-100/80 shadow-inner">
              
              <div className="flex items-center justify-between mb-3 border-b border-purple-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-bold text-gray-800">内置试玩沙盒 (Mini Sandbox)</span>
                </div>
                <span className="text-[10px] text-purple-600 bg-white/80 px-2 py-0.5 rounded-md font-bold">
                  体验主动回忆盲打
                </span>
              </div>

              {/* Cloze test area */}
              <div className="bg-white/95 rounded-xl p-4 sm:p-5 border border-purple-100/60 shadow-xs mb-4">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                  {clozeData.title}
                </div>

                <div className="text-sm leading-relaxed text-gray-800">
                  {clozeData.segments.map((seg, idx) => {
                    if (seg.text) {
                      return <span key={idx}>{seg.text}</span>;
                    }
                    if (seg.blank !== undefined && seg.id !== undefined) {
                      const userVal = clozeAnswers[seg.id] || '';
                      const isCorrect = userVal.trim() === seg.blank;

                      return (
                        <span key={idx} className="inline-block mx-1">
                          <input
                            type="text"
                            placeholder={showAnswer ? seg.blank : `[${seg.hint}]`}
                            value={userVal}
                            onChange={(e) => handleClozeInputChange(seg.id!, e.target.value)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all text-center min-w-[70px] max-w-[100px] outline-none ${
                              clozeChecked
                                ? isCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                                  : 'bg-rose-50 border-rose-400 text-rose-700'
                                : 'bg-gray-50/90 border-purple-200 focus:border-purple-500 focus:bg-white text-purple-900'
                            }`}
                          />
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Feedback note */}
                {clozeChecked && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 p-2.5 rounded-lg bg-purple-50 text-xs text-purple-900 flex items-center justify-between"
                  >
                    <span>
                      {Object.keys(clozeAnswers).length === 3 &&
                      clozeAnswers[0]?.trim() === '提取' &&
                      clozeAnswers[1]?.trim() === '完形填空' &&
                      clozeAnswers[2]?.trim() === '主动回忆'
                        ? '🎉 全部命中！你的大脑已经建立了深度神经提取链接！'
                        : '💡 答案提示：① 提取 ② 完形填空 ③ 主动回忆'}
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Action buttons inside Sandbox */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCheckCloze}
                    className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold shadow-xs transition-all cursor-pointer"
                  >
                    校验答案
                  </button>
                  <button
                    onClick={() => setShowAnswer(!showAnswer)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200 transition-all cursor-pointer"
                  >
                    {showAnswer ? '隐藏答案' : '显示答案'}
                  </button>
                  <button
                    onClick={handleResetCloze}
                    className="p-1.5 rounded-xl bg-white hover:bg-gray-100 text-gray-500 hover:text-gray-800 border border-gray-200 transition-all cursor-pointer"
                    title="重置"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <a
                  href="https://quinnverse.github.io/vibe_coding_cloze_recitation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-purple-700 hover:text-purple-900 transition-colors flex items-center gap-1"
                >
                  <span>体验海量题库</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Grid of Other Playful Vibe Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tool 2: AI Prompt Palette */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 text-[10px] font-bold">
                灵感调色盘
              </span>
              <span className="text-[10px] text-gray-400 font-mono">PROMPT PALETTE</span>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-gray-900">
                💭 图像与视觉 Prompt 配方
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                将旅行风景、赛博雨夜与工作空间转化为高质感生图 Prompt 与色彩搭配。
              </p>
            </div>

            {/* Mood selector buttons */}
            <div className="flex gap-1.5 p-1 bg-gray-100/70 rounded-xl">
              {(['travel', 'cyber', 'minimal'] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setSelectedMood(m);
                    setCopiedPrompt(false);
                  }}
                  className={`flex-1 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer ${
                    selectedMood === m
                      ? 'bg-white text-gray-900 shadow-xs'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {m === 'travel' && '⛵ 欧洲沿海'}
                  {m === 'cyber' && '🌧️ 赛博雨夜'}
                  {m === 'minimal' && '☕ 阳光晨读'}
                </button>
              ))}
            </div>

            {/* Preset Box */}
            <div className="p-3.5 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-gray-800">
                <span>{promptPresets[selectedMood].title}</span>
                {/* Palette color dots */}
                <div className="flex gap-1">
                  {promptPresets[selectedMood].colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full border border-black/10 shadow-2xs"
                      style={{ backgroundColor: c }}
                      title={c}
                    />
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-gray-600 font-mono leading-relaxed line-clamp-3 bg-white p-2 rounded-lg border border-gray-200/60">
                {promptPresets[selectedMood].prompt}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              navigator.clipboard?.writeText(promptPresets[selectedMood].prompt);
              setCopiedPrompt(true);
              setTimeout(() => setCopiedPrompt(false), 2000);
            }}
            className="mt-5 w-full py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedPrompt ? '已复制 Prompt！' : '一键复制 Prompt 配方'}</span>
          </button>
        </div>

        {/* Tool 3: Minimal Focus Flow Timer */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-bold">
                极简专注钟
              </span>
              <span className="text-[10px] text-gray-400 font-mono">FLOW STATE</span>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-gray-900">
                ⏱️ 极简心流专注时钟
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                去除干扰，25 分钟全神贯注完成代码构思、阅读推演或方案微调。
              </p>
            </div>

            {/* Timer Visual Display */}
            <div className="p-4 bg-gradient-to-tr from-purple-50/60 via-indigo-50/40 to-pink-50/60 rounded-2xl border border-purple-100 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#1e293b] tracking-wider">
                {formatTime(timerSeconds)}
              </div>
              <div className="text-[11px] text-gray-500 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{isTimerRunning ? '深度心流进行中...' : '准备好开始一次专注了吗？'}</span>
              </div>
            </div>

            {/* Timer controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="flex-1 py-2 rounded-xl bg-[#1e293b] hover:bg-black text-white text-xs font-bold shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isTimerRunning ? '暂停' : <><Play className="w-3 h-3 fill-current" /> 开启专注</>}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(25 * 60);
                }}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                title="重置"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setSoundOn(!soundOn)}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  soundOn ? 'bg-purple-50 border-purple-200 text-purple-700' : 'bg-gray-100 border-gray-200 text-gray-400'
                }`}
                title={soundOn ? '提示音开启' : '静音'}
              >
                {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 text-[11px] text-gray-400 text-center">
            ✦ 25min 专注冲刺 + 5min 放空调整
          </div>
        </div>

        {/* Tool 4: Media & Worldview */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 border border-white/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                好书与记录
              </span>
              <span className="text-[10px] text-gray-400 font-mono">MEDIA SHELF</span>
            </div>

            <div>
              <h4 className="text-lg font-extrabold text-gray-900">
                📖 书单与阅读记录
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                硬核科幻、人物传记、思维心智与哲学经典个人自选书影单。
              </p>
            </div>

            <div className="p-3.5 bg-gradient-to-tr from-slate-900 to-indigo-950 rounded-2xl text-white space-y-2 shadow-inner">
              <div className="text-[10px] text-purple-300 font-mono">ASIMOV & CLASSICS</div>
              <p className="text-xs text-gray-200 leading-relaxed">
                “无论是在浩瀚的科幻宇宙中，还是在日常的深度阅读里，好书总能带来思维的启迪。”
              </p>
              <div className="flex items-center justify-between pt-1 text-[10px] text-gray-400">
                <span>基地系列 ✦ 心理控制术 ✦ 苏菲的世界</span>
                <span className="text-purple-300 font-bold">CURATED</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigateTab('about')}
            className="mt-5 w-full py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>前往书单与关于我</span>
          </button>
        </div>

      </div>

    </section>
  );
};
