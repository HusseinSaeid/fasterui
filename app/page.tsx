import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Price from "@/components/Price";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <NavBar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section id="home" className="flex flex-col min-h-[calc(100vh-4rem)]">
          <div className="flex flex-1 justify-center items-center w-full px-4">
            <Hero />
          </div>
        </section>

        {/* About Section */}
        <section id="services" className="py-20 max-w-7xl mx-auto px-4">
          <About />
        </section>

        {/* Projects Section */}
        <section id="work" className="py-20 max-w-7xl mx-auto px-4">
          <Projects />
        </section>

        {/* Pricing Section */}
        <section id="price" className="py-20 max-w-7xl mx-auto px-4">
          <Price />
        </section>

        {/* Questions + Footer */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <Questions />
        </section>
        <Footer className="w-full bg-black text-white fixed bottom-0 left-0" />
      </div>
    </main>
  );
}
