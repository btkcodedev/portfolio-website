"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/Theme";

const Bio = () => {
  return (
    <>
      <div>
        <Image
          priority
          loading="eager"
          alt="Avatar"
          placeholder="blur"
          src="/profile.png"
          width={120}
          height={120}
          blurDataURL="/profile.png"
          style={{
            borderRadius: "50%",
            border: "0.1px solid transparent",
          }}
        />
      </div>

      {/* Text Container */}
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

        <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
        <p className="text-2xl font-light text-neutral-500">{siteConfig.bio}</p>
      </div>
      {/* Buttons Container */}
      <div className="flex items-center gap-3 mt-6">
        <a
          href={`${siteConfig.locationLink}`}
          className="shadow-md flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
        >
          <MapPin size="14" />
          {siteConfig.location}
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="shadow-md flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
        >
          <Mail size="14" />
          Contact Me
        </a>
      </div>
    </>
  );
};

export default Bio;
