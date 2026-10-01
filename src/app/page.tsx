import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe7] text-[#1c1917] px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[#c45c26]">Lumen</p>
      <h1 className="text-5xl mt-4 max-w-xl">One chair today. A shop when you need it.</h1>
      <p className="mt-4 max-w-lg text-[#6b6258]">Booking, walk-ins, and an embeddable widget. No client login.</p>
      <div className="mt-8 flex gap-3">
        <Link className="bg-[#1c1917] text-[#f4efe7] px-5 py-3 rounded-full" href="/desk">Open the desk</Link>
        <Link className="border border-[#1c1917] px-5 py-3 rounded-full" href="/book/ash-and-co">Book</Link>
      </div>
    </main>
  );
}
