import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  content: string;
  className?: string;
  imgSrc?: string;
  width?: number;
  height?: number;
  icon?: ReactNode;
}

export default function Card({
  title,
  content,
  className,
  imgSrc,
  width,
  height,
  icon,
}: CardProps) {
  return (
    <div
      className={`p-2 bg-white dark:bg-black shadow-[var(--shadow-elevation)]  hover:scale-110 duration-200 ease-in-out flex flex-col rounded-lg  ${
        className || ""
      }`}
    >
      <div className="flex flex-col flex-grow">
        {icon && (
          <div className="bg-[#F5F8FF] dark:bg-[#111827] h-12 w-12 flex justify-center items-center rounded-lg mt-4">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-bold font-raleway mt-2 ml-2 text-black dark:text-white whitespace-nowrap">
          {title}
        </h2>

        <p className="text-[#8987A1] dark:text-[#C0BFE0] mt-auto ml-4">
          {content}
        </p>
      </div>

      {imgSrc && (
        <div className="mt-4">
          <Image
            src={imgSrc}
            alt={title}
            width={width || 820}
            height={height || 500}
            className=""
          />
        </div>
      )}
    </div>
  );
}
