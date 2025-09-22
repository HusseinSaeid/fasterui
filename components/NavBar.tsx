import DarkModeToggle from "./DarkModeToggle";
import { Zap } from "lucide-react";
interface NavBarProps {
  className?: string;
}
export default function NavBar({ className }: NavBarProps) {
  return (
    <div className="w-full flex-row justify-between mt-8 px-24 hidden md:flex">
      <div className="flex flex-row gap-2 items-center">
        <div className="bg-black dark:bg-white flex items-center justify-center rounded-lg p-2">
          <Zap className="w-4 h-4 text-white dark:text-black" />
        </div>
        <h1 className="text-2xl font-bold ">FasterUI</h1>
      </div>
      <nav className=" bg-white/60 border border-white rounded-[20px] box-border px-8 gap-12 py-4  md:flex items-center justify-between hidden ">
        <h1 className=" ">Home</h1>
        <h1 className=" ">About</h1>
        <h1 className=" ">How It Works</h1>
        <h1 className=" ">Services</h1>
      </nav>
      <DarkModeToggle className="" />
    </div>
  );
}
