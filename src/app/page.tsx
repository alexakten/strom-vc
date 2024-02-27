import Link from "next/link";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <main className="flex h-[100svh] items-center justify-center bg-gray-100">
      <Navbar />
      <div className="flex max-w-4xl flex-col items-center gap-4 text-black">
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <p className="text-sm">Launching soon</p>
        </div>
        <h1 className="text-center text-8xl tracking-tighter">
          Founders that accelerate founders.
        </h1>
        <p className="max-w-lg text-center text-lg opacity-50">
          Strōm is a community for founders by founders. Get access to talent
          and capital from startup founders just like you.
        </p>
        <Link href={""}>
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-black px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-green-400"></div>
            <p className="text-white">Join waitlist -&gt;</p>
          </button>
        </Link>
      </div>
    </main>
  );
}
