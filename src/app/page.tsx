import Image from "next/image";
import Nav from "./components/navbar";
import Home from "./components/home";
import Works from "./components/works";
import ParticlesBackground from "./components/particles";

export default function Main() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav></Nav>
      {/* <ParticlesBackground /> */}
      <section id="#">
        <Home videoId="OCWj5xgu5Ng?si=k9wllEsAXltbkIgL"></Home>
      </section>
      <section id="works">
        <Works></Works>
      </section>
    </main>
  );
}
