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
    <main className="grid min-h-screen h-full grid-rows-6 bg-gray-900 gap-0">
      <Nav></Nav>
      {/* <ParticlesBackground /> */}
      <section id="#" className="row-span-1">
        <Home videoId="OCWj5xgu5Ng?si=k9wllEsAXltbkIgL"></Home>
      </section>
      <section id="about" className="row-span-2">
        <About></About>
      </section>
      <section id="works" className="row-span-2">
        <Works></Works>
      </section>
      <section id="services" className="row-span-2">
        <Services></Services>
      </section>
      <section id="contact" className="row-span-2">
        <Contact></Contact>
      </section>
      <section>
        <Footer></Footer>
      </section>
    </main>
  );
}
