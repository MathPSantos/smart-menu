"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft as ArrowLeftIcon } from "@phosphor-icons/react";

const FormHeader = () => {
  const router = useRouter();

  return (
    <header className="py-2">
      <div className="flex items-center justify-start">
        <button
          type="button"
          onClick={router.back}
          className="h-9 px-1.5 flex items-center justify-center gap-2 text-sm font-medium text-[#2E1503] hover:bg-[#2E15030D] focus:bg-[#2E15030D] transition rounded-[6px]"
        >
          <ArrowLeftIcon className="w-3 h-3" />
          Ir para página anterior
        </button>
      </div>
    </header>
  );
};

export default FormHeader;
