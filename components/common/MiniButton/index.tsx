"use client";
import { returnCategory } from "@/components/Helpers";
import { MiniButtonProps } from "@/components/Types";
import { LeftPanelOptions } from "@/components/Types/enum";
import { useI18n } from "@/components/I18n";

const MiniButton: React.FC<MiniButtonProps> = ({
  buttonText,
  category,
  href,
  clickedCategory,
  setClicked,
  clicked
}) => {
  const { t } = useI18n();
  const glowStyle =
    "from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 rounded-lg";
  return (
    <div
      className={`flex items-center gap-3 mt-6 bg-gradient-to-r ${(clicked === buttonText) && glowStyle}`}
    >
      <a
        href={href ? href : `#${category}`}
        onClick={() => {
          setClicked(buttonText!);
          clickedCategory(buttonText!);
        }}
        className="shadow-md flex items-center text-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
      >
        {category ? returnCategory(category) : null}
        {buttonText ? t(buttonText) : ""}
      </a>
    </div>
  );
};

export default MiniButton;
