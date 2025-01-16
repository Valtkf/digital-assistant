import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col justify-center items-center sm:items-start pt-10 gap-20">
        <Navbar />
        <div className="">Top-Tier Virtual</div>
      </main>
    </div>
  );
}
