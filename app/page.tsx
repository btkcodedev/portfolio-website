import MainPage from "@/components/MainPage";
import { siteConfig } from "@/config/site-config";

export const metadata = {
  title: siteConfig.metadata.title,
};

export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-very-small" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-page-wash" />
      <MainPage />
    </main>
  );
}
