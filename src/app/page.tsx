import Image from "next/image";
import Nav from "./components/navbar";
import Home from "./components/home";
import Works from "./components/works";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ParticlesBackground from "./components/particles";

export default function Main() {
  return (
    <main className="min-h-screen h-full bg-gray-900">
      <section className="sticky z-10 top-0">
        <Nav></Nav>
      </section>
      {/* <ParticlesBackground /> */}
      <div className="grid lg:grid-rows-6">
        <section id="#" className="row-span-1">
          <Home></Home>
        </section>
        <section id="about" className="row-span-1">
          <About></About>
        </section>
        <section id="works" className="row-span-2">
          <Works></Works>
        </section>
        <section id="services" className="row-span-1">
          <Services></Services>
        </section>
        <section id="contact" className="row-span-1">
          <Contact></Contact>
        </section>
        <section>
          <Footer></Footer>
        </section>
      </div>
    </main>
  );
}
