import { VibeToolItem, HobbyItem, MediaShelfItem } from '../types';
import avatarImg from '../assets/images/user_avatar_clean_1787497497692.jpg';
import swimmingImg from '../assets/images/hobby_swimming_1787497529652.jpg';
import readingImg from '../assets/images/hobby_reading_1787497545020.jpg';
import gamingImg from '../assets/images/hobby_gaming_1787497560723.jpg';
import travelImg from '../assets/images/hobby_travel_1787497514304.jpg';

export const PERSONAL_INFO = {
  name: '小荷才露妙脆角',
  nameEn: 'Crispy Lotus (@quinnverse)',
  avatar: avatarImg,
  title: 'AI 独立创作者 · Vibe Coder',
  tagline: '相信好奇心与执行力，用 AI 将实用的想法做成顺手的小工具。',
  currentStatus: {
    badge: 'NOW IN FLOW',
    focus: 'Vibe Coding & 极简独立工具开发',
    subtext: '热爱旅行与运动，探索大模型轻量工具落地',
    seeking: '欢迎交流实用的 AI 工具与有趣的想法'
  },
  tags: [
    '✨ Vibe Coding',
    '✈️ 热爱旅行 (欧洲与国内)',
    '🏊 运动与游泳',
    '🎮 模拟经营游戏',
    '📖 泛阅读与思考',
    '💡 极简实用小工具'
  ],
  email: 'zhangqiyun2000@163.com',
  github: 'https://github.com/quinnverse',
  mbti: 'ENTP (灵感开拓者)'
};

export const ABOUT_DATA = {
  tagline: '用直觉、好奇心与执行力，做点朴实好用的小工具',
  bioParagraphs: [
    '嗨，我是小荷才露妙脆角 🍧。一名专注于 Vibe Coding 的独立创作者。',
    '我喜欢用 AI 快速构建能够解决具体问题的小工具。对我而言，大模型拉平了从想法到产品之间的距离，只要有清晰的直觉与果断的行动力，一个人就可以把很多实用的想法迅速做成现实。',
    '工作之余，我热爱旅行，喜欢在欧洲与国内各地漫游走走停停；热爱游泳运动，在水下的规律呼吸中清空大脑；喜欢玩模拟经营与策略探索游戏，也喜欢静下心阅读科幻、传记与思维类好书。'
  ],
  interests: [
    {
      title: '热爱旅行 (欧洲与国内漫游)',
      desc: '喜欢走出熟悉的日常，漫步在欧洲古老街巷与国内不同城市的山水烟火中，感受多元的生活气息。'
    },
    {
      title: '运动与游泳',
      desc: '定期游泳锻炼，在水下的规律呼吸与划水节律中放松身心，保持充沛的精力和清晰专注的状态。'
    },
    {
      title: '模拟经营与策略游戏',
      desc: '偏爱沙盒经营与资源调配类游戏，享受从零梳理运转逻辑、搭建正向运转体系的乐趣。'
    },
    {
      title: '泛阅读与多元思考',
      desc: '翻阅硬核科幻、人物传记与思维心理类好书，在阅读中开阔视野，寻找独立小工具的创作灵感。'
    }
  ]
};

export const MEDIA_SHELF_LIST: MediaShelfItem[] = [
  {
    id: 'book-marshall',
    title: '乔治·马歇尔传记 / 战时统帅与战略决策',
    author: '人物传记 / 领导决策',
    category: '人物传记',
    tag: '传记好书',
    note: '极度克制、卓越的组织统筹与大局观，在复杂局势中保持清晰判断力的典范。'
  },
  {
    id: 'book-asimov',
    title: '《基地》与《银河帝国》系列',
    author: '阿西莫夫 (Isaac Asimov)',
    category: '科幻',
    tag: '硬核科幻',
    note: '心理史学的宏大推演，展现了跨越数万年文明兴衰与数学规律的终极魅力。'
  },
  {
    id: 'book-anai',
    title: '《大江东去》/《艰难的制造》',
    author: '阿耐',
    category: '人物传记',
    tag: '实业纪实',
    note: '扎实的商业逻辑与时代人物命运，文字朴实有力，透着真实的商业与生活智慧。'
  },
  {
    id: 'book-psycho-cybernetics',
    title: '《心理控制术》(Psycho-Cybernetics)',
    author: '麦克斯韦尔·马尔茨 (Maxwell Maltz)',
    category: '思维工具',
    tag: '心智模型',
    note: '通过自我意象心理学与目标引导机制，重构行动力与潜意识执行回路。'
  },
  {
    id: 'book-sophie',
    title: '《苏菲的世界》(Sophie’s World)',
    author: '乔斯坦·贾德 (Jostein Gaarder)',
    category: '哲学心理',
    tag: '哲学启蒙',
    note: '保持对世界最纯粹的惊奇感，在哲学脉络中厘清思考的源头。'
  }
];

export const VIBE_TOOLS_LIST: VibeToolItem[] = [
  {
    id: 'cloze-recitation',
    title: '完形填空极速背诵记忆神器',
    titleEn: 'Cloze Recitation & Active Recall Flow',
    category: 'Vibe Coding 独立作品',
    tagline: '基于认知心理学主动回忆理论，键盘流盲打的高效背诵工具',
    description: '厌倦了被动浏览的低效？这款工具支持一键导入学习材料，自动识别核心关键词精准挖空，支持全键盘盲打检验与即时正误反馈。已在 GitHub Pages 部署上线，随时可用。',
    tags: ['Vibe Coding', 'Active Recall', 'React', 'Tailwind', '极简无干扰', '独立上线'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80',
    badge: '已上线 · 欢迎体验',
    features: [
      '⚡ 自动化关键词挖空：精准提取核心考点，告别被动浏览',
      '⌨️ 全键盘盲打体验：Tab / Enter 顺畅切题，强化瞬间提取反射',
      '🎯 即时正误校验：色彩直观反馈，支持一键对比参考答案',
      '🌿 极简无广告：清爽排版，沉浸在纯粹的学习状态'
    ],
    demoUrl: 'https://quinnverse.github.io/vibe_coding_cloze_recitation/',
    insights: '学习的重点在提取（Retrieval）而非重复输入。用简洁的交互把实用的方法做成工具。'
  },
  {
    id: 'prompt-palette',
    title: 'AI 提示词微调与灵感生成器',
    titleEn: 'AI Vibe Prompt Studio',
    category: '效率小工具',
    tagline: '快速生成与调试清晰结构化的 AI 图像与文案提示词',
    description: '为内容创作者与开发者打造的轻量级 Prompt 辅助工具。预设多种画面构图、光影参数与情绪色彩，支持一键微调与复制。',
    tags: ['Prompt', 'AI 灵感', '效率工具', '极简设计'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
    badge: '实用小工具',
    features: [
      '🎨 多种构图与氛围预设：快速提取主体、材质与光影参数',
      '✨ 语法结构清晰：告别无序词堆，精准传递意图',
      '📋 一键复制与归档：随时保存测试有效的 Prompt 配方'
    ],
    insights: '好的 Prompt 就像精准的指令，清晰传达核心要素比冗长修饰更有效。'
  },
  {
    id: 'lofi-cyber-timer',
    title: '极简专注时钟 (Deep Focus Timer)',
    titleEn: 'Minimal Deep Focus Timer',
    category: '效率工具',
    tagline: '极简无干扰的番茄工作时钟，沉浸于纯粹的创造过程',
    description: '专为深度编码与阅读设计的极简计时器。具备清晰的倒计时显示与舒缓的环境白噪音，帮助保持专注。',
    tags: ['专注时钟', '白噪音', '极简', '效率'],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
    badge: '日常使用',
    features: [
      '⏱️ 经典 25 / 5 分钟工作休息节奏',
      '🌧️ 自定义白噪音伴奏：雨声与壁炉声独立调节',
      '🌙 极简柔和配色，长久注视不疲劳'
    ],
    insights: '工具越简单，干扰越少，越容易进入深度专注。'
  },
  {
    id: 'outer-wilds-journal',
    title: '星空与科幻笔记碎片',
    titleEn: 'Sci-Fi Notes & Ideas Log',
    category: '阅读与思考',
    tagline: '记录科幻阅读、系统推演与灵感碎片的轻量级交互卡片',
    description: '记录关于时间循环、系统推演与科技哲思的笔记卡片，分享有价值的书单与思考点滴。',
    tags: ['科幻', '书单', '思考卡片', '系统推演'],
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=800&auto=format&fit=crop&q=80',
    badge: '思考记录',
    features: [
      '📖 结构化卡片记录：提炼核心观点与思维模型',
      '🪐 科幻与历史推荐：分类整理好书与启发性内容',
      '💡 灵感随时检索与整理'
    ],
    insights: '有价值的思考值得被清晰记录与沉淀。'
  }
];

export const HOBBIES_LIST: HobbyItem[] = [
  {
    id: 'sports',
    title: '运动与游泳',
    subtitle: '水下的规律呼吸与身体节律，保持身心充沛活力',
    icon: 'Waves',
    category: '运动健康',
    image: swimmingImg,
    quote: '自由泳的规律换气让身体找到节律，在水下的专注中清空杂念，找回身体与思维的平衡。',
    details: [
      '定期游泳锻炼，感受水流的阻力与自由自在的划水节律',
      '通过有氧运动释放压力，保持头脑清醒与敏锐',
      '在动与静的平衡中，维持稳定而有韧性的创作状态'
    ]
  },
  {
    id: 'reading',
    title: '阅读与好书',
    subtitle: '翻阅硬核科幻、人物传记与思维心理类好书，拓展认知视野',
    icon: 'BookOpen',
    category: '经典阅读',
    image: readingImg,
    quote: '无论是阿西莫夫的科幻世界，还是人物传记与《心理控制术》，好书总能带来全新的启发与视角。',
    details: [
      '研读阿西莫夫《基地》等硬核科幻，体会宏大逻辑构建',
      '翻阅人物传记、商业纪实与心智思维类经典书籍',
      '把读书带来的结构化认知自然融入到独立工具的创作中'
    ]
  },
  {
    id: 'gaming',
    title: '模拟经营与策略游戏',
    subtitle: '在沙盒规则与资源调配中探索系统的正向运转',
    icon: 'Gamepad2',
    category: '游戏探索',
    image: gamingImg,
    quote: '模拟经营的精髓在于建立健康的闭环：合理的资源分配、预见性的瓶颈突破与运转正循环。',
    details: [
      '偏爱具有深度逻辑和经济闭环的经营建造与沙盒策略游戏',
      '享受从零规划、优化资源配置并搭建运转体系的成就感',
      '将系统闭环设计思维迁移到小工具的交互逻辑中'
    ]
  },
  {
    id: 'travel',
    title: '旅行漫游 (欧洲与国内)',
    subtitle: '漫步欧洲历史街巷与国内山水城市，用脚步感受世界',
    icon: 'Compass',
    category: '旅行漫游',
    image: travelImg,
    quote: '走出熟悉的日常，在欧洲老城的石板路与国内不同城市的烟火气中，感受生活的多样与鲜活。',
    details: [
      '热爱旅行探索，打卡欧洲老城、艺术街区与自然风光',
      '漫游国内各地特色城市，体验丰富多元的地域风土与生活节奏',
      '在旅途的新鲜感与松弛氛围中，捕捉不经意冒出的创作灵感'
    ]
  }
];
