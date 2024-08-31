import Image from "next/image";
import Nav from "./components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav></Nav>
    </main>
  );
}
