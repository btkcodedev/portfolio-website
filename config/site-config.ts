import { AchievementItemInterface, ExperienceItemInterface, GridItemInterface, ProjectItemInterface } from "@/components/Types";

const ProjItems: ProjectItemInterface[] = [
  {
    layout: "2x4",
    type: "certificate",
    title: "Open source contributions",
    image: "/background.jpg",
    link: "https://github.com/btkcodedev",
    languages: [
      {
        title: "Airbyte",
        link: "https://github.com/airbytehq/airbyte",
        languageImage: "/name.jpg"
      },
      {
        title: "MNE-Python",
        link: "https://github.com/btkcodedev/mne-python",
        languageImage: "/name.jpg"
      },
      {
        title: "MindsDB Benchmarks",
        link: "https://github.com/btkcodedev/benchmarks",
        languageImage: "/name.jpg"
      },
      {
        title: "Algorithms-Explanation ",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "ElevateYourSoul - Mental wellness platform",
    image: "/background.jpg",
    link: "https://elevateyoursoul.web.app/",
    languages: [
      {
        title: "Vite + React",
        languageImage: "/name.jpg"
      },
      {
        title: "Zustand",
        languageImage: "/name.jpg"
      },
      {
        title: "Tailwind + TSX",
        languageImage: "/name.jpg"
      },
      {
        title: "CI/CD",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Analysr - Review Analytics platform",
    image: "/background.jpg",
    link: "https://growwithanalysr.web.app/",
    languages: [
      {
        title: "Groq AI",
        languageImage: "/name.jpg"
      },
      {
        title: "Vite + React.TS + Tailwind CSS",
        languageImage: "/name.jpg"
      },
      {
        title: "MotherDuck",
        languageImage: "/name.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Jobify",
    image: "/background.jpg",
    link: "https://github.com/btkcodedev/jobify",
    languages: [
      {
        title: "Jobify-backend scrapes jobs",
        link: "https://github.com/btkcodedev/jobify-scraper",
        languageImage: "/name.jpg"
      },
      {
        title: "Jobify-frontend displays jobs",
        link: "https://github.com/btkcodedev/jobify-frontend/",
        languageImage: "/name.jpg"
      },
      {
        title: "Both are connected in github workflows",
        languageImage: "/name.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Niche App developer + ML developer... Does that count?",
    image: "/background.jpg",
    link: "https://github.com/btkcodedev",
    languages: [
      {
        title: "QR code generator App",
        link: "https://github.com/btkcodedev/qr-native",
        languageImage: "/javascript.jpg"
      },
      {
        title: "ML Projects IPY notebook",
        link: "https://github.com/btkcodedev/ml-projects",
        languageImage: "/python.jpg"
      },
      {
        title: "and a long way to go......",
        languageImage: "/nodejs.jpg"
      },
    ],
  },
]

const ExpItems: ExperienceItemInterface[] = [
  {
    layout: "2x4",
    type: "certificate",
    title: "Software Engineer @ QBurst",
    image: "/background.jpg",
    languages: [
      {
        title: "Managed client projects for top e-commerce giants under NDA—hush-hush!",
        languageImage: "/name.jpg"
      },
      {
        title: "Internal projects – Worklog tracking web app, Video chat web app",
        languageImage: "/name.jpg"
      },
      {
        title: "Component test suite development",
        languageImage: "/name.jpg"
      },
      {
        title: "Slides and Documentation development",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Part-time contributor @ Airbyte",
    image: "/background.jpg",
    languages: [
      {
        title: "'Hired' as a lovable contributor - Its mutual <3",
        languageImage: "/name.jpg"
      },
      {
        title: "Triple hackathon win",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "25+ new connector contributions to pipeline",
        languageImage: "/name.jpg"
      },
      {
        title: "40+ bugs fixed till now",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "JavaScript Mentor @ Tinkerhub",
    image: "/background.jpg",
    languages: [
      {
        title: "Golden & Silver badges along with completion of six month tenure",
        link: "https://badgr.com/public/assertions/t9jtgQhXTUuLGO4DZo2m8Q",
        languageImage: "/name.jpg"
      },
      {
        title: "LOR from CEO!!!",
        link: "https://drive.google.com/file/d/19ujGsrZMmv38R0JGPy1nGdZNb2AM68lc/view?usp=sharing",
        languageImage: "/name.jpg"
      },
      {
        title: "Technical writings and documentations",
        link: "https://paths.tinkerhub.org/react-native/",
        languageImage: "/name.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Cloud Computing Intern @ Indian Opensource Community",
    image: "/background.jpg",
    languages: [
      {
        title: "Hands on AWS & GCP",
        link: "https://www.cloudskillsboost.google/public_profiles/aee4fd0f-d8b1-402d-ad12-9bac68a25ee1",
        languageImage: "/javascript.jpg"
      },
      {
        title: "CLI access, cluster, load-balancer creation experience",
        languageImage: "/python.jpg"
      },
      {
        title: "Final assesment passed with A+ grade",
        link: "https://drive.google.com/file/d/1TaJ9VeyNAydu6K8mZ1QBrpQvrTZq4Ln_/view?usp=sharing",
        languageImage: "/nodejs.jpg"
      },
    ],
  },
]

const AchItems: AchievementItemInterface[] = [
  {
    layout: "2x4",
    type: "certificate",
    title: "Bachelors Degree College Achievements",
    image: "/background.jpg",
    languages: [
      {
        title: "Best Outgoing Student",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Department Topper",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Mathematics Topper",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Best Final Year Project",
        link: "#",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "JavaScript Mentor for Tinkerhub",
    image: "/background.jpg",
    languages: [
      {
        title: "Letter Of Recommendation From Tinkerhub CEO",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Golden Badge",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Silver Badge",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Six months tenure completion",
        link: "#",
        languageImage: "/name.jpg"
      }
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Airbyte Hackathon Winner - Hattrick win",
    image: "/background.jpg",
    languages: [
      {
        title: "PyAirbyte Hackathon | August 2024",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Hashnode x Airbyte | October 2023",
        link: "#",
        languageImage: "/name.jpg"
      },
      {
        title: "Connector Migration | August 2023",
        link: "#",
        languageImage: "/name.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Technical certificates",
    image: "/background.jpg",
    languages: [
      {
        title: "IBM Cybersecurity Analyst Professional",
        link: "#",
        languageImage: "/javascript.jpg"
      },
      {
        title: "Google IT Automation Professional",
        link: "#",
        languageImage: "/python.jpg"
      },
      {
        title: "Google IT Support Professional",
        link: "#",
        languageImage: "/nodejs.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Hackathon Participant",
    image: "/background.jpg",
    languages: [
      {
        title: "COCON 2020 Red Team CTF",
        link: "https://drive.google.com/file/d/1UMMq1xuG3zF5522B04neD_iO4GPW3dF4/view?usp=sharing",
        languageImage: "/javascript.jpg"
      },
      {
        title: "HackNagpur Community Hackathon",
        link: "https://drive.google.com/file/d/1Vs8hqT_bp0yF-QnTynRa8KyVFPSBV1DJ/view?usp=sharing",
        languageImage: "/python.jpg"
      },
      {
        title: "FoSS OpenHACK 20202 Participant",
        link: "https://drive.google.com/file/d/1BUCzPJ8nTYxLivpEDb2Pp6UtOtJ94H6W/view?usp=sharing",
        languageImage: "/nodejs.jpg"
      },
    ],
  },
  {
    layout: "2x4",
    type: "certificate",
    title: "Outside the box niches",
    image: "/background.jpg",
    languages: [
      {
        title: "Guiness World Record (Group) Participant",
        link: "https://drive.google.com/file/d/1PllY7KSb9JE-IDoImO7wU398Rq_me9vF/view?usp=sharing",
        languageImage: "/javascript.jpg"
      },
      {
        title: "Alison Machine Learining Diploma Holder",
        link: "https://drive.google.com/file/d/1m-zFWemwCaEdFwC9nE6OS5h60rd6PchC/view?usp=sharing",
        languageImage: "/python.jpg"
      },
      {
        title: "MLH Local Hack Day Participant",
        link: "https://drive.google.com/file/d/17VO2dv3nDzSQgS-ZKSIM0r_dSlzCjj9M/view?usp=sharing",
        languageImage: "/nodejs.jpg"
      },
    ],
  },  
]

const GridItems: GridItemInterface[] = [
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@btkcodedev",
    buttonTitle: "Follow",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/btkcodedev",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "@btkcodedev",
    buttonTitle: "Join",
    buttonLink: "https://discord.com/channels/@me",
    buttonSecondaryText: "",
    color: "#5865F2",
  },
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "@b-t-k",
    description:
      "Professional software developer, Freelance web developer & Data warehouse enthusiast",
    color: "#0a66c2",
    buttonTitle: "Follow",
    buttonLink: "https://www.linkedin.com/in/b-t-k/",
    buttonSecondaryText: "500+",
  },
  {
    layout: "2x4",
    type: "language",
    title: "Things I Love",
    image: "/background.jpg",
    languages: [
      {
        title: "Ty & Py",
        link: "#",
        languageImage: "/pyty.jpg"
      },
      {
        title: "Coffee",
        link: "#",
        languageImage: "/coffee.jpg"
      },
      {
        title: "Jackie Chan Movies",
        link: "#",
        languageImage: "/jackie.jpg"
      },
      {
        title: "Github",
        link: "#",
        languageImage: "/gh.jpg"
      },
    ],
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@ibala_tk",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/ibala_tk",
    buttonSecondaryText: "80",
    color: "#1DA1F2",
    description:
      "Probe looking for wonders around! Supporter for ELT & Web applications",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@btkcodes",
    description:
      "Music, ELT, Web development enthusiast",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@btkcodes",
    buttonSecondaryText: "",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Buy Me A Coffee",
    icon: "buymeacoffee",
    username: "btkcodedev",
    description:
      "If you love any of my works, please consider supporting by buying me a coffee",
    color: "#FFBB00",
    buttonTitle: "Coffee!!",
    buttonLink: "https://buymeacoffee.com/btkcodedev",
    buttonSecondaryText: "",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Paypal",
    icon: "paypal",
    username: "@btkcodedev",
    buttonTitle: "Pay for pal 💛",
    buttonSecondaryText: "",
    buttonLink: "https://paypal.me/btkcodedev",
    color: "#ffffff",
    buttonColor: "#1DA1F2"
  },
  {
    layout: "1x2",
    type: "social",
    title: "Google Cloud Profile",
    icon: "gcp",
    username: "@btkcodedev",
    buttonTitle: "See my badges",
    buttonSecondaryText: "",
    buttonLink: "https://www.cloudskillsboost.google/public_profiles/aee4fd0f-d8b1-402d-ad12-9bac68a25ee1",
    color: "#ffffff",
    buttonColor: "#1DA1F2"
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Medium",
    icon: "medium",
    promotion: "See my posts",
    reach: "100+",
    intermediateText: "Recent post views",
    buttonLink: "https://medium.com/@btkcodedev",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Hackerrank",
    icon: "hackerrank",
    promotion: "See my profile",
    reach: "Competent",
    intermediateText: "Level",
    buttonLink: "https://www.hackerrank.com/profile/ibala_tk",
  },
];

export const currentYear = new Date().getFullYear();

export const siteConfig = {
  metadata: {
    title: "BTK Portfolio",
    description: "Portfolio website powered by Next.js, Tailwind CSS",
  },
  creator: "Balasubramanian T K",
  title: "Software Developer",
  bio: "Web Developer & ELT Enthusiast, Competent with JavaScript and Python.",
  location: "Kerala, India",
  locationLink:
    "https://maps.app.goo.gl/HTiGU32uhqhmVuBZ8",
  email: "btk.codedev@gmail.com",
  footerText: `Built by @btkcodedev | ©${currentYear} btkcodedev. All Rights Reserved`,
  aboutItems: GridItems,
  achievementItems: AchItems,
  experienceItems: ExpItems,
  projectItems: ProjItems,
} as const;
