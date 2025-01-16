import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center sm:items-start pt-10 gap-20">
        <Navbar />
        <HeroSection />
      </main>
    </div>
  );
}
