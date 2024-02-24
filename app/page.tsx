import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <MainPage />
    </main>
  );
}
