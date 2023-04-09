import Link from "next/link";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-marketing-gradient">
      <Header />
      <main className="px-6">
        <div className="w-full max-w-6xl mx-auto pt-32 pb-6 flex flex-col items-center justify-center">
          <span className="px-3 rounded-full h-[28px] flex items-center justify-center text-[12px] font-bold text-[#FB8500] bg-[#FB850026]">
            Cardápio digital
          </span>
          <h1 className="mt-2 text-center font-extrabold text-6xl text-[#431F04] max-w-[640px] leading-[72px]">
            Seu cardápio digital em poucos cliques
          </h1>
          <p className="mt-6 max-w-[520px] text-center text-[#4F4B48] leading-relaxed">
            Crie seu cardápio e disponibilize para todos os seus clientes, no
            presencial e no online.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/"
              className="h-[44px] flex items-center justify-center font-bold rounded-[8px] px-5 text-white bg-[#FB8500]"
            >
              Crie sua conta
            </Link>
            <Link
              href="/"
              className="h-[44px] flex items-center justify-center font-bold rounded-[8px] px-5 text-[#023047] bg-[#0230471A]"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
