import Link from "next/link";

import { MARKETING_PAGES } from "@core/routes";

export default function CreateAccount() {
  return (
    <header className="px-6">
      <div className="w-full max-w-xl mx-auto flex items-center justify-start">
        <Link href={MARKETING_PAGES.ROOT}>Ir para página inicial</Link>
      </div>
    </header>
  );
}
