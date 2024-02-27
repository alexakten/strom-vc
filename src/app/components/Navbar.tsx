import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="absolute top-0 flex w-full justify-between px-8 py-6">
      <p className="text-4xl tracking-tight text-black">strōm</p>
      <Link href={""}>
        <button className="flex group items-center gap-2 rounded-full border border-gray-200 bg-black px-4 py-2">
          <div className="h-2 w-2 transform rounded-full bg-green-400 transition-all duration-300 ease-in-out  group-hover:scale-150"></div>
          <p className="text-sm text-white">Get in touch -&gt;</p>
        </button>
      </Link>
    </nav>
  );
}
