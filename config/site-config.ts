import { GridItemInterface } from "@/components/types";

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
    layout: "2x4",
    type: "language",
    title: "Coding preferences",
    image: "/background.jpg",
    languages: [
      {
        title: "Javascript",
        link: "#",
        languageImage: "/javascript.jpg"
      },
      {
        title: "Python",
        link: "#",
        languageImage: "/python.jpg"
      },
      {
        title: "Node.js",
        link: "#",
        languageImage: "/nodejs.jpg"
      },
      {
        title: "Django",
        link: "#",
        languageImage: "/django.jpg"
      },
      {
        title: "YAML",
        link: "#",
        languageImage: "/yaml.jpg"
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
    buttonSecondaryText: "40",
    color: "#1DA1F2",
    description:
      "Probe looking for wonders around! Supporter for ELT & Web applications",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@btkcodedev",
    description:
      "ELT, Web development enthusiast, JavaScript & Python lover",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@btkcodedev",
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
    price: "100+",
    intermediateText: "Recent post views",
    buttonLink: "https://medium.com/@btkcodedev",
  },
  {
    layout: "2x1",
    type: "mentor",
    title: "Hackerrank",
    icon: "hackerrank",
    promotion: "See my profile",
    price: "Competent",
    intermediateText: "Level",
    buttonLink: "https://www.hackerrank.com/profile/ibala_tk",
  },
];

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
  footerText: "Built by @btkcodedev | ©2024 btkcodedev. All Rights Reserved",
  items: GridItems,
} as const;
