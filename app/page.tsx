import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen overflow-y-scroll overflow-x-hidden scroll-smooth ">
      {/* Section 1 */}
      <section className="w-full h-screen flex flex-col ">
        <NavBar />
        <div className="flex flex-1 justify-center items-center w-full">
          <Hero />
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-full h-screen flex flex-col ">
        <About />
      </section>
      {/* Section 3 */}
      <section className="w-full h-screen flex flex-col ">
        <Projects />
      </section>
    </main>
  );
}
