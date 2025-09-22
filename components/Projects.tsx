import Carousel from "./ui/carousel";
export default function Projects() {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/project-1.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/project-2.jpg",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "/project-3.jpg",
    },
  ];
  return (
    <div className="w-full">
      <div className="mt-8">
        <h1 className="text-7xl font-bold text-center font-raleway">
          Check Our Work
        </h1>
        <p className="text-center mt-4">
          Take a look at some of our recent projects to see how we have helped{" "}
          <br /> businesses like yours succeed online
        </p>
      </div>
      <div className="mt-10">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
}
