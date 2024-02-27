import Link from "next/link";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex h-[100svh] items-center justify-center bg-gray-100 px-4">
      <Navbar />
      <div className="flex max-w-4xl flex-col items-center gap-4 text-black">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span>
          </span>
          <p className="text-sm opacity-50">Launching soon</p>
        </div>
        <h1 className="text-center text-[clamp(40px,7vw,96px)] leading-[1.05] tracking-tighter">
          Founders that <br /> accelerate founders
        </h1>
        <p className="max-w-lg text-center text-lg opacity-50">
          Strōm is a community for founders by founders. Get access to talent
          and capital from startup entrepreneurs worldwide.
        </p>
        <Link href={""}>
          <button className="group flex items-center gap-2 rounded-full border border-gray-200 bg-black px-6 py-3 transition duration-300 ease-in-out">
            <div className="h-2 w-2 transform rounded-full bg-green-400 transition-all duration-300 ease-in-out  group-hover:scale-150"></div>
            <p className="text-white">Join waitlist -&gt;</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
