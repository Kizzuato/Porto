import dynamic from "next/dynamic";
import Nav from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

// Lazy load heavy components that are below the fold
const Works = dynamic(() => import("./components/works"), {
  ssr: true,
});

const Services = dynamic(() => import("./components/services"), {
  ssr: true,
});

export default function Main() {
  return (
    <main className="min-h-screen h-full bg-gray-900 selection:bg-green-500 selection:text-black">
      <section className="sticky z-10 top-0">
        <Nav />
      </section>
      <div className="grid lg:grid-rows-6">
        <section id="#" className="row-span-1">
          <Home />
        </section>
        <section id="about" className="row-span-1">
          <About />
        </section>
        <section id="works" className="row-span-2">
          <Works />
        </section>
        <section id="services" className="row-span-1">
          <Services />
        </section>
        <section id="contact" className="row-span-1">
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
