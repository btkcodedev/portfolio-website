import { GridItemInterface } from "@/components/types";
import Link from "next/link";
import Icon from "@/components/common/Icon";

const Mentor = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link
      href={item.buttonLink ?? ""}
      className="flex items-center justify-between gap-4"
    >
      {item.icon && <Icon type={item.icon} color={item.color} />}
      <div className="w-full @lg:text-lg font-semibold">{item.title}</div>
      <div className="">
        {/* Top Container */}
        <div className="flex items-center justify-between w-max">
          <div className="text-xs text-neutral-500 pr-2">
            {item.intermediateText}
          </div>
          <div className="flex items-center gap-1">
            <div>{item.price}</div>
          </div>
        </div>
        {/* Bottom Container */}
        <div className="flex font-bold text-primary @lg:text-base text-sm justify-end">
          <div>{item.promotion}</div>
        </div>
      </div>
    </Link>
  );
};

export default Mentor;
