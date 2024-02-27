import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="absolute flex justify-between top-0 w-full px-4 py-4">
      <p className="text-3xl text-black">strōm</p>
      <Link href={""}>
        <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-black px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-green-400"></div>
          <p className="text-white">Get in touch -&gt;</p>
        </button>
      </Link>
    </nav>
  );
}
