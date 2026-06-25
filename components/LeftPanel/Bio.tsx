"use client";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/Theme";
import RippleButton from "@/components/common/StyledLinkButton";
import { motion } from "framer-motion";
import { LanguageToggle, useI18n } from "@/components/I18n";

const Bio = ({ compact = false }: { compact?: boolean }) => {
  const { siteConfig, t } = useI18n();

  if (compact) {
    return (
      <div className="shadow-md rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-950/40 p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <Image
              priority
              loading="eager"
              alt="Avatar"
              placeholder="blur"
              src="/profile.jpg"
              width={132}
              height={132}
              blurDataURL="/profile.jpg"
              className="aspect-square h-auto w-full rounded-xl object-cover object-center shadow-lg"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-lg font-semibold leading-none bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              {siteConfig.title}
            </p>
            <h1 className="mt-3 text-3xl font-bold leading-tight">
              {siteConfig.creator}!
            </h1>
            <p className="mt-2 text-base font-light leading-snug text-neutral-500">
              {siteConfig.bio}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex items-center justify-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <motion.div
            className="mt-1 min-w-0 rounded-[15%] border border-blue-500/25 bg-blue-500/10 px-3 py-2 text-center text-sm font-medium shadow-[0_0_18px_rgba(59,130,246,0.12)]"
            animate={{
              opacity: [0.78, 1, 0.78],
              y: [0, -3, 0],
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 12px rgba(59, 130, 246, 0.12)",
                "0 0 26px rgba(168, 85, 247, 0.32)",
                "0 0 12px rgba(59, 130, 246, 0.12)",
              ],
            }}
            whileHover={{ rotate: -1, scale: 1.05 }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block min-w-0 animate-pulse truncate bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              {t("Nice to meet you")}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <RippleButton
            element={<MapPin size="14" />}
            buttonText={siteConfig.location}
            style={{
              backgroundImage: "linear-gradient(to right, #FFA07A, #FF4500)",
              transition: "background 0.5s ease",
            }}
            href={siteConfig.locationLink}
          />
          <RippleButton
            element={<Mail size="14" />}
            buttonText={siteConfig.contactLabel}
            style={{
              backgroundImage: "linear-gradient(to right, #87CEEB, #4682B4)",
              transition: "background 0.5s ease",
            }}
            href={`mailto:${siteConfig.email}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-md rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white dark:bg-neutral-900 bg-opacity-10/80 border-opacity-50 p-6">
      <div>
        <Image
          priority
          loading="eager"
          alt="Avatar"
          placeholder="blur"
          src="/profile.jpg"
          width={120}
          height={120}
          blurDataURL="/profile.jpg"
          style={{
            borderRadius: "15%",
            border: "0.1px solid transparent",
          }}
          className="h-32 w-32 rounded-xl object-cover object-center shadow-lg"
        />
      </div>

      <div className="mt-6">
        <div className="flex flex-row justify-start items-center gap-3">
          <div
            className="text-xl font-medium"
            style={{
              background: "-webkit-linear-gradient(45deg, #ffae00, #3366ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {siteConfig.title}
          </div>
          <ThemeToggle />
        </div>

        <h1 className="mt-2 text-3xl font-bold">{siteConfig.creator}</h1>
        <p className="text-xl font-light text-neutral-500">{siteConfig.bio}</p>
      </div>

      <div className="flex items-center gap-3 mt-6">
        <RippleButton
          element={<MapPin size="14" />}
          buttonText={siteConfig.location}
          style={{
            backgroundImage: "linear-gradient(to right, #FFA07A, #FF4500)",
            transition: "background 0.5s ease",
          }}
          href={siteConfig.locationLink}
        />
        <RippleButton
          element={<Mail size="14" />}
          buttonText={siteConfig.contactLabel}
          style={{
            backgroundImage: "linear-gradient(to right, #87CEEB, #4682B4)",
            transition: "background 0.5s ease",
          }}
          href={`mailto:${siteConfig.email}`}
        />
      </div>
    </div>
  );
};

export default Bio;
