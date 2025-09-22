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
      className={`p-2 bg-white hover:shadow-lg  hover:dark:shadow-none flex flex-col rounded-lg  ${
        className || ""
      }`}
    >
      <div className="flex flex-col flex-grow">
        {icon && (
          <div className="bg-[#F5F8FF] h-12 w-12 flex justify-center items-center rounded-lg mt-4">
            {icon}
          </div>
        )}
        <h2 className="text-xl font-bold font-raleway mt-2 ml-2 text-black  whitespace-nowrap">
          {title}
        </h2>

        <p className="text-gray-600 mt-auto ml-4">{content}</p>
      </div>

      {imgSrc && (
        <div className="mt-4">
          <Image
            src={imgSrc}
            alt={title}
            width={width || 720}
            height={height || 100}
            className=""
          />
        </div>
      )}
    </div>
  );
}
