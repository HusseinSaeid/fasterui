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

      <div className=" grid lg:grid-cols-4 lg:grid-rows-2 gap-10 mt-10 max-w-7xl p-8">
        <Card
          icon={<SquareCode className="text-black dark:text-white" />}
          title="Web Design"
          content={contentText}
        />
        <Card
          title="UI/UX Design"
          content={contentText}
          icon={<MonitorSmartphone className="text-black dark:text-white" />}
        />
        <Card
          title="Responsive Design"
          content={contentText}
          icon={<TabletSmartphone className="text-black dark:text-white" />}
        />

        {/* الكارت الرابع بالطول */}
        <Card
          title="E-commerce Solutions"
          content={contentText}
          imgSrc="/commerce.png"
          height={200}
          width={500}
          className="lg:row-span-2"
          icon={
            <ShoppingCart className="text-black dark:text-white text-4xl" />
          }
        />

        {/* الكارت الخامس بالعرض */}
        <Card
          title="Webflow"
          content={contentText}
          imgSrc="/webflow.png"
          className="lg:col-span-2 flex flex-row"
          icon={
            <h1 className="font-raleway text-2xl font-bold text-black dark:text-white">
              W
            </h1>
          }
        />

        <Card
          title="Custom Development"
          content={contentText}
          icon={<Settings2 className="text-black dark:text-white " />}
        />
      </div>
    </div>
  );
}
