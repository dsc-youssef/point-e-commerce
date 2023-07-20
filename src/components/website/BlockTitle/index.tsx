import { FC } from "react";

// Interface Props
import { WebsiteBlockTitleProps } from "@/interfaces/website/components/BlockTitle";

const BlockTitle: FC<WebsiteBlockTitleProps> = ({ title, angles }) => {
  return (
    <>
      {
        angles ? (
          <div className="inline-flex justify-between items-center">
            <h1 className="pt-5 pb-[10px] px-0 font-bold text-h3 border-b w-fit mb-5">{title}</h1>
            <div className="inline-flex items-center gap-[10px]">
              <i className="far fa-angle-left text-2xl text-web-gray-700 cursor-pointer min-w-[36px]" />
              <i className="far fa-angle-right text-2xl text-web-gray-700 cursor-pointer min-w-[36px]" />
            </div>
          </div>
        ) : (
          <h1 className="pt-5 pb-[10px] px-0 font-bold text-h3 border-b w-fit mb-5">{title}</h1>
        )
      }
    </>
  )
}

export default BlockTitle;
