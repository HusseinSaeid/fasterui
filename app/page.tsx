import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Price from "@/components/Price";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen  overflow-y-scroll overflow-x-hidden scroll-smooth ">
      {/* Section 1 */}
      <section className="w-full h-[100vh] flex flex-col ">
        <NavBar />
        <div className="flex flex-1 justify-center items-center w-full">
          <Hero />
        </div>
      </section>
      <section className="flex flex-col gap-40 ">
        <section id="services">
          <About />
        </section>
        <section id="work">
          <Projects />
        </section>
        <section id="price">
          <Price />
        </section>
        <Questions />
        <Footer />
      </section>
    </main>
  );
}
