"use client";

import { useState } from "react";

export function FormHeader() {
  const [state, setState] = useState(0);

  return (
    <header className="px-6">
      <div className="w-full max-w-xl mx-auto flex items-center justify-start">
        <button type="button" onClick={() => setState((prev) => prev + 1)}>
          Ir para página inicial
        </button>
        {state}
      </div>
    </header>
  );
}
