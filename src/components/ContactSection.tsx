import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Mail,
  Github,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Heart,
  Wand2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TabType } from '../types';

interface ContactSectionProps {
  onNavigateTab: (tab: TabType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigateTab }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'ai-idea',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', topic: 'ai-idea', message: '' });
    }, 800);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact-section" className="py-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>04 / CONNECT & MESSAGE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight">
          联系我与交流想法
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full mx-auto"></div>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          无论是关于 Vibe Coding 的技术探讨、AI 工具的落地构想，还是书籍与模拟经营策略的交流，随时欢迎邮件联系。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Connect Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/80 shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-gray-900 flex items-center gap-2">
                <span>小荷才露妙脆角 🍧</span>
              </h3>
              <p className="text-xs text-purple-600 font-medium mt-1">
                AI 独立创作者 · Vibe Coder
              </p>
              <p className="text-xs text-gray-600 leading-relaxed mt-3">
                “保持对真实问题的关注与好奇心。如果你有朴实而有价值的创意，欢迎一起交流探讨。”
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">电子邮箱</div>
                    <div className="text-[11px] text-gray-500 font-mono">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email)}
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-purple-100 text-purple-800 text-xs font-bold shadow-2xs border border-purple-200 transition-all flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-purple-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? '已复制' : '复制邮箱'}</span>
                </button>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-gray-50 hover:bg-gray-100/80 border border-gray-200/80 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">GitHub 开源</div>
                    <div className="text-[11px] text-gray-500 font-mono">@quinnverse</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-gray-500 group-hover:text-black">
                  访问仓库 →
                </span>
              </a>
            </div>

            <div className="pt-2 text-[11px] text-gray-400 text-center">
              ✦ 常用邮箱收件 · 收到后会尽快回复
            </div>
          </div>

          {/* Mini quote pill */}
          <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl p-4 border border-white/80 text-xs text-gray-600 flex items-center gap-3">
            <Heart className="w-4 h-4 text-purple-500 shrink-0" />
            <span>“在快节奏的浪潮里，动手做点朴素而有用的东西。”</span>
          </div>

        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-purple-600" />
                <span className="text-base font-extrabold text-gray-900">发送留言与交流</span>
              </div>
              <span className="text-xs text-purple-600 font-mono font-bold bg-purple-50 px-2 py-0.5 rounded-md">
                SEND MESSAGE
              </span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-3"
              >
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-gray-900">
                  留言已成功发送！🎉
                </h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  感谢你的来信！我会仔细阅读并尽快通过邮箱回复你。
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all cursor-pointer mt-2"
                >
                  继续发送其他留言
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">你的称呼 *</label>
                    <input
                      type="text"
                      required
                      placeholder="例如：朋友 / 开发者"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-xs focus:bg-white focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700">你的邮箱 *</label>
                    <input
                      type="email"
                      required
                      placeholder="your-email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-xs focus:bg-white focus:border-purple-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">交流主题</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'ai-idea', label: '💡 AI 与 Vibe Coding' },
                      { id: 'project-coop', label: '🤝 独立产品共创' },
                      { id: 'book-sharing', label: '📖 好书与阅读交流' }
                    ].map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, topic: topic.id })}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer text-center ${
                          formData.topic === topic.id
                            ? 'bg-[#1e293b] text-white border-[#1e293b] shadow-2xs'
                            : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700">留言内容 *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="分享你的想法、建议或想聊的话题..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50/80 border border-gray-200 text-xs focus:bg-white focus:border-purple-500 focus:outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#1e293b] hover:bg-black text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? '正在投递中...' : '发送留言'}</span>
                </button>
              </form>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
            <span>🍧 小荷才露妙脆角 · Vibe Coder</span>
            <span>Made with Taste & AI ✦ 2026</span>
          </div>
        </div>

      </div>

    </section>
  );
};
