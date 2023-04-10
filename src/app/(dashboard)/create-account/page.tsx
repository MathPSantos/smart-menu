import Link from "next/link";
import { FormHeader } from "./components";

export default function CreateAccount() {
  return (
    <main className="px-6">
      <div className="w-full max-w-xl mx-auto flex flex-col gap-4">
        <FormHeader />
        <div>
          <div className="columns-4">
            {['Dados Gerais', 'Negócio', 'Segurança', 'Confirmação'].map(step => (
              <div key={step} className="flex flex-col gap-2">
                <strong className="text-[#FB8500] text-sm font-bold">{step}</strong>
                <div className="w-full h-1 rounded-full bg-[#FB8500]" />
              </div>
            ))}
          </div>

          <h1 className="mt-10 text-4xl font-extrabold text-[#2E1503]">Fale sobre você</h1>
          <p className="mt-2 text-[#4F4B48] leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <form className="flex flex-col gap-11">
            <div className="flex flex-col gap-4">
                
            </div>

            <div className="flex items-center justify-between">
              <Link href="/" className="h-11 flex items-center justify-center px-5 rounded-[8px] font-bold text-white bg-[#FB8500]">Já possuo login</Link>

              <div className="flex gap-4">
                <button type='button' className="h-11 flex items-center justify-center px-5 rounded-[8px] font-bold text-[#023047] bg-[#0230471A]">Voltar</button>
                <button type='button' className="h-11 flex items-center justify-center px-5 rounded-[8px] font-bold text-white bg-[#FB8500]">Próximo passo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
