const CONFIG = {
  // profile setting (required)
  profile: {
    name: "oh yuchan",
    image: "/apple-touch-icon.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend developer",
    bio: "Java와 Kotlin을 활용하여 백엔드를 구축합니다.",
    email: "oyuchan@gmail.com",
    linkedin: "https://www.linkedin.com/in/%EC%9C%A0%EC%B0%AC-%EC%98%A4-48bb2030a/",
    github: "ohyuchan123",
    instagram: "oyuchan50",
  },
  projects: [
    {
      name: `Go Socket`,
      href: "https://github.com/Go-Socket-Project/Go-Socket-BE",
    },
    {
      name: `Daeng Daeng Place`,
      href: "https://github.com/DaengPlace",
    }
  ],
  // blog setting (required)
  blog: {
    title: "yuchan-log",
    description: "welcome to yuchan-log!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://yuchan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
