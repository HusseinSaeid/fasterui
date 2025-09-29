import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/about";
import Projects from "@/components/Projects";
import Price from "@/components/Price";
import Questions from "@/components/Questions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="flex flex-col min-h-[calc(100vh-4rem)]">
        <NavBar />
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
      <Footer />
    </main>
  );
}
