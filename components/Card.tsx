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
      className={`p-2 bg-white dark:bg-black shadow-[var(--shadow-elevation)]  hover:scale-110 duration-200 ease-in-out flex flex-col  rounded-lg  ${
        className || ""
      }`}
    >
      <div className="flex flex-col gap-4 px-4">
        <div className="flex flex-row md:flex-col justify-between items-center md:justify-start md:items-start md:gap-2">
          <div className="bg-[#F5F8FF] dark:bg-[#111827] h-12 w-12 justify-center items-center rounded-lg  mt-4 flex ">
            {icon}
          </div>
          <h2 className="text-xl font-bold font-raleway mt-2  text-black text-center md:text-left dark:text-white ">
            {title}
          </h2>
        </div>
        <p className="text-black dark:text-[#C0BFE0] mt-auto ">{content}</p>
      </div>

      {imgSrc && (
        <div className=" hidden xl:block relative w-full h-64 mt-auto">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
