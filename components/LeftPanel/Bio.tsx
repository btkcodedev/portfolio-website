"use client";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { ThemeToggle } from "@/components/Theme";
import RippleButton from "@/components/common/StyledLinkButton";

const Bio = () => {
  return (
    <div className="shadow-md rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white dark:bg-neutral-900 bg-opacity-10/80 border-opacity-50 p-6">
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
          href={`${siteConfig.locationLink}`}
        />
        <RippleButton
          element={<Mail size="14" />}
          buttonText={`Contact Me`}
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
