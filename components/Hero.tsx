export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center text-center min-h-[calc(100vh-4rem)] pt-16 px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug font-raleway">
        Awesome UI <br /> Dark Template for <br /> Webflow Agency
      </h1>
      <button className="mt-6 h-12 w-48 bg-blue-700 shadow-[var(--shadow-elevation)] hover:bg-blue-800 transition text-white cursor-pointer rounded-[20px]">
        Get Started
      </button>
    </div>
  );
}
