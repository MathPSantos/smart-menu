import { USER_PAGES } from "@core/routes";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export const Header = () => (
  <header className="px-6 h-[76px]">
    <div className="w-full h-full max-w-6xl mx-auto flex items-center justify-between">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="" width={68} height={30} />
      </Link>

      <nav className="flex items-center">
        <ul className="flex items-center gap-6">
          {["Como funciona?", "Planos"].map((item) => (
            <li key={item} className="text-[#4F4326] font-sm font-medium">
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
        <Link
          href={USER_PAGES.CREATE_ACCOUNT}
          className="ml-6 h-9 px-5 flex items-center justify-center rounded-[6px] text-white bg-[#FB8500] text-sm font-bold"
        >
          Crie sua conta
        </Link>
        <Link
          href="/"
          className="ml-3 h-9 px-1.5 flex items-center justify-center rounded-[6px] gap-2 text-sm font-bold text-[#023047]"
        >
          <UserCircleIcon className="w-5 h-5" />
          Entre
        </Link>
      </nav>
    </div>
  </header>
);
