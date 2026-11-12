import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site-config";

const clarityProjectId = "zcjioqmao6";
const productionHosts = ["btkcodes.web.app", "btkcodes.vercel.app"];

const sfPRO = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display_thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sfpro",
});

export const metadata = {
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" lang="en" suppressHydrationWarning>
      {/* Browser extensions can add attributes to the body before hydration. */}
      <body className={sfPRO.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full">{children}</div>
        </ThemeProvider>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function (projectId, hosts) {
              if (!hosts.includes(window.location.hostname)) return;

              window.clarity = window.clarity || function () {
                (window.clarity.q = window.clarity.q || []).push(arguments);
              };

              const tag = document.createElement("script");
              tag.async = true;
              tag.src = "https://www.clarity.ms/tag/" + projectId;
              document.head.appendChild(tag);
            })(${JSON.stringify(clarityProjectId)}, ${JSON.stringify(productionHosts)});
          `}
        </Script>
      </body>
    </html>
  );
}
