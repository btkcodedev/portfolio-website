"use client";

import { siteConfig as baseSiteConfig } from "@/config/site-config";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Language = "en" | "ml" | "zh" | "ja" | "hi";
type SiteConfig = typeof baseSiteConfig;

const translations: Record<Language, Record<string, string>> = {
  en: {},
  ml: {
    "Hi!": "ഹായ്!",
    "I am Bala": "ഞാൻ ബാലയാണ്",
    "Senior SWE - ELT, Web, OSS Dev": "സീനിയർ SWE - ELT, വെബ്, OSS ഡെവ്",
    "Remote, India": "റിമോട്ട്, ഇന്ത്യ",
    "Contact Me": "ബന്ധപ്പെടുക",
    "Before you go... Please reach out if you have any Research Software Engineer Positions available. Very much interested :)":
      "പോകുന്നതിന് മുൻപ്... Research Software Engineer ഒഴിവുകൾ ഉണ്ടെങ്കിൽ പറയണം. വളരെ താൽപ്പര്യം :)",
    "Portfolio website powered by Next.js, Tailwind CSS":
      "Next.js, Tailwind CSS ഉപയോഗിച്ച് നിർമ്മിച്ച പോർട്ട്ഫോളിയോ വെബ്‌സൈറ്റ്",
    Follow: "ഫോളോ",
    Subscribe: "സബ്സ്ക്രൈബ്",
    Join: "ചേരുക",
    "View profile": "പ്രൊഫൈൽ കാണുക",
    "See badges 🏅": "ബാഡ്ജുകൾ കാണുക 🏅",
    "Support me ☕": "സപ്പോർട്ട് ചെയ്യുക ☕",
    "See my profile": "പ്രൊഫൈൽ കാണുക",
    "See my posts": "പോസ്റ്റുകൾ കാണുക",
    "Open source contributions": "ഓപ്പൺ സോഴ്‌സ് സംഭാവനകൾ",
    "Things I Love": "എനിക്ക് ഇഷ്ടമുള്ള കാര്യങ്ങൾ",
    "Technical certificates": "ടെക്നിക്കൽ സർട്ടിഫിക്കറ്റുകൾ",
    "Community Workshops": "കമ്മ്യൂണിറ്റി വർക്ക്‌ഷോപ്പുകൾ",
    "Best Outgoing Student": "മികച്ച ഔട്ട്‌ഗോയിങ് വിദ്യാർത്ഥി",
    "Department Topper": "ഡിപ്പാർട്ട്മെന്റ് ടോപ്പർ",
    "Mathematics Topper": "മാത്തമാറ്റിക്സ് ടോപ്പർ",
    "Best Final Year Project": "മികച്ച ഫൈനൽ ഇയർ പ്രോജക്റ്റ്",
    "Nice to meet you": "കണ്ടതിൽ സന്തോഷം",
    About: "കുറിച്ച്",
    Experience: "പരിചയം",
    Achievements: "നേട്ടങ്ങൾ",
    Projects: "പ്രോജക്റ്റുകൾ",
  },
  zh: {
    "Hi!": "你好！",
    "I am Bala": "我是 Bala",
    "Senior SWE - ELT, Web, OSS Dev": "高级软件工程师 - ELT、Web、开源开发",
    "Remote, India": "远程，印度",
    "Contact Me": "联系我",
    "Before you go... Please reach out if you have any Research Software Engineer Positions available. Very much interested :)":
      "在你离开前... 如果有研究软件工程师职位，请联系我。我非常感兴趣 :)",
    "Portfolio website powered by Next.js, Tailwind CSS":
      "由 Next.js 和 Tailwind CSS 驱动的作品集网站",
    Follow: "关注",
    Subscribe: "订阅",
    Join: "加入",
    "View profile": "查看资料",
    "See badges 🏅": "查看徽章 🏅",
    "Support me ☕": "支持我 ☕",
    "See my profile": "查看我的资料",
    "See my posts": "查看我的文章",
    "Open source contributions": "开源贡献",
    "Things I Love": "我喜欢的事物",
    "Technical certificates": "技术证书",
    "Community Workshops": "社区工作坊",
    "Best Outgoing Student": "最佳毕业生",
    "Department Topper": "系级第一名",
    "Mathematics Topper": "数学第一名",
    "Best Final Year Project": "最佳毕业项目",
    "Nice to meet you": "很高兴认识你",
    About: "关于",
    Experience: "经历",
    Achievements: "成就",
    Projects: "项目",
  },
  ja: {
    "Hi!": "こんにちは！",
    "I am Bala": "Bala です",
    "Senior SWE - ELT, Web, OSS Dev": "シニアソフトウェアエンジニア - ELT、Web、OSS 開発",
    "Remote, India": "リモート、インド",
    "Contact Me": "連絡する",
    "Before you go... Please reach out if you have any Research Software Engineer Positions available. Very much interested :)":
      "行く前に... 研究ソフトウェアエンジニアの募集があればぜひ連絡してください。とても興味があります :)",
    "Portfolio website powered by Next.js, Tailwind CSS":
      "Next.js と Tailwind CSS で作られたポートフォリオサイト",
    Follow: "フォロー",
    Subscribe: "登録",
    Join: "参加",
    "View profile": "プロフィールを見る",
    "See badges 🏅": "バッジを見る 🏅",
    "Support me ☕": "支援する ☕",
    "See my profile": "プロフィールを見る",
    "See my posts": "投稿を見る",
    "Open source contributions": "オープンソース貢献",
    "Things I Love": "好きなもの",
    "Technical certificates": "技術証明書",
    "Community Workshops": "コミュニティワークショップ",
    "Best Outgoing Student": "最優秀卒業生",
    "Department Topper": "学科首席",
    "Mathematics Topper": "数学首席",
    "Best Final Year Project": "最優秀卒業制作",
    "Nice to meet you": "よろしくお願いします",
    About: "概要",
    Experience: "経験",
    Achievements: "実績",
    Projects: "プロジェクト",
  },
  hi: {
    "Hi!": "नमस्ते!",
    "I am Bala": "मैं बाला हूं",
    "Senior SWE - ELT, Web, OSS Dev": "सीनियर SWE - ELT, वेब, OSS डेवलपमेंट",
    "Remote, India": "रिमोट, भारत",
    "Contact Me": "संपर्क करें",
    "Before you go... Please reach out if you have any Research Software Engineer Positions available. Very much interested :)":
      "जाने से पहले... अगर कोई Research Software Engineer पद उपलब्ध हो तो कृपया संपर्क करें। बहुत रुचि है :)",
    "Portfolio website powered by Next.js, Tailwind CSS":
      "Next.js और Tailwind CSS से बना पोर्टफोलियो वेबसाइट",
    Follow: "फॉलो करें",
    Subscribe: "सब्सक्राइब",
    Join: "जुड़ें",
    "View profile": "प्रोफाइल देखें",
    "See badges 🏅": "बैज देखें 🏅",
    "Support me ☕": "सपोर्ट करें ☕",
    "See my profile": "मेरी प्रोफाइल देखें",
    "See my posts": "मेरी पोस्ट देखें",
    "Open source contributions": "ओपन सोर्स योगदान",
    "Things I Love": "मेरी पसंदीदा चीजें",
    "Technical certificates": "तकनीकी प्रमाणपत्र",
    "Community Workshops": "कम्युनिटी वर्कशॉप",
    "Best Outgoing Student": "सर्वश्रेष्ठ आउटगोइंग छात्र",
    "Department Topper": "विभाग टॉपर",
    "Mathematics Topper": "गणित टॉपर",
    "Best Final Year Project": "सर्वश्रेष्ठ अंतिम वर्ष प्रोजेक्ट",
    "Nice to meet you": "आपसे मिलकर खुशी हुई",
    About: "परिचय",
    Experience: "अनुभव",
    Achievements: "उपलब्धियां",
    Projects: "प्रोजेक्ट्स",
  },
};

const translateText = (value: string, language: Language) =>
  translations[language][value] ?? value;

const translateValue = (value: unknown, language: Language): unknown => {
  if (typeof value === "string") {
    return translations[language][value] ?? value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => translateValue(item, language));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, translateValue(entry, language)])
    );
  }

  return value;
};

const I18nContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (value: string) => string;
  siteConfig: SiteConfig;
} | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const siteConfig = useMemo(
    () => translateValue(baseSiteConfig, language) as SiteConfig,
    [language]
  );
  const t = (value: string) => translateText(value, language);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, siteConfig }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      language: "en" as Language,
      setLanguage: () => {},
      t: (value: string) => value,
      siteConfig: baseSiteConfig,
    };
  }

  return context;
};

export const LanguageToggle = () => {
  const { language, setLanguage } = useI18n();
  const languages: Language[] = ["en", "zh", "ja", "hi", "ml"];
  const nextLanguage = languages[(languages.indexOf(language) + 1) % languages.length];

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLanguage)}
      className="mt-1 flex cursor-pointer rounded-lg bg-white px-2 py-2 text-sm font-semibold shadow-md transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
      aria-label="Change language"
      title={`Change language to ${nextLanguage.toUpperCase()}`}
    >
      {language.toUpperCase()}
    </button>
  );
};
