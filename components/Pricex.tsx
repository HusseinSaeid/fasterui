import { Star } from "lucide-react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
export default function Price() {
  const people = [
    { id: 1, name: "Ali", icon: "A", designation: "Software Engineer" },
    { id: 2, name: "Hussein", icon: "H", designation: "Front-End Developer" },
    { id: 3, name: "Mohamed", icon: "M", designation: "Full Stack Developer" },
    { id: 4, name: "Gamal", icon: "G", designation: "UX/UI Designer" },
    { id: 5, name: "Mazen", icon: "M", designation: "Front-End Developer" },
  ];

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex justify-center items-center mt-20 bg-white h-20 max-w-[600px] px-4 shadow-[var(--shadow-elevation)] rounded-xl">
        <AnimatedTooltip items={people} />
        <div className="ml-8 text-sm text-gray-700">
          <p>
            <span className="font-bold mr-1">5.0</span> Based on
            <span className="font-bold ml-1">145</span> Reviews
          </p>
          <div className="flex flex-row">
            <Star fill="yellow" strokeWidth={0} size={16} />
            <Star fill="yellow" strokeWidth={0} size={16} />
            <Star fill="yellow" strokeWidth={0} size={16} />
            <Star fill="yellow" strokeWidth={0} size={16} />
            <Star fill="yellow" strokeWidth={0} size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
