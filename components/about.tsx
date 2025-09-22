import Card from "./Card";
import {
  SquareCode,
  MonitorSmartphone,
  TabletSmartphone,
  ShoppingCart,
  Settings2,
} from "lucide-react";

export default function About() {
  const contentText =
    "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.";
  return (
    <div className="flex flex-col justify-center items-center px-6 py-12 w-full">
      <h1 className="text-5xl md:text-7xl font-bold text-center leading-snug font-raleway">
        What We Do
      </h1>

      <div className="grid grid-cols-4 grid-rows-2 gap-10 mt-10 max-w-7xl p-8">
        <Card
          icon={<SquareCode size={32} className="text-black" />}
          title="Web Design"
          content={contentText}
        />
        <Card
          title="UI/UX Design"
          content={contentText}
          icon={<MonitorSmartphone size={32} className="text-black" />}
        />
        <Card
          title="Responsive Design"
          content={contentText}
          icon={<TabletSmartphone size={32} className="text-black" />}
        />

        {/* الكارت الرابع بالطول */}
        <Card
          title="E-commerce Solutions"
          content={contentText}
          imgSrc="/commerce.png"
          height={200}
          width={500}
          className="row-span-2"
          icon={<ShoppingCart size={32} className="text-black" />}
        />

        {/* الكارت الخامس بالعرض */}
        <Card
          title="Webflow"
          content={contentText}
          imgSrc="/webflow.png"
          className="col-span-2 flex flex-row"
          icon={
            <h1 className="font-raleway text-4xl font-bold text-black">W</h1>
          }
        />

        <Card
          title="Custom Development"
          content={contentText}
          icon={<Settings2 size={32} className="text-black" />}
        />
      </div>
    </div>
  );
}
