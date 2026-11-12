import { siteConfig } from "@/config/site-config";
import { Sparkles } from "@/components/common/Icon/portfolio-icons";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full border-t border-neutral-100/50 dark:border-neutral-800 shadow-md rounded-xl backdrop-filter backdrop-blur-lg bg-white/20 dark:bg-neutral-900 p-4">
      <div className="container flex items-center justify-between">
        <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gray-200 bg-white/10 text-white/90 inset-shadow-sm">
          <Sparkles size={11} />
        </div>
        <div className="ml-2 text-xs dark:text-neutral-300 text-white-500">{siteConfig.footerText}</div>
      </div>
    </div>
  );
};

export default Footer;
