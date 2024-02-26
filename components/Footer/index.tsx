import { siteConfig } from "@/config/site-config";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full border-t border-neutral-100 dark:border-neutral-800 shadow-md rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white dark:bg-neutral-900 bg-opacity-10/80 border-opacity-50 p-4">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
          {siteConfig.footerText}
        </div>
      </div>
    </div>
  );
};

export default Footer;
