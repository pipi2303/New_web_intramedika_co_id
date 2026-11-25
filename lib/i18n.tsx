"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { EN } from "./dictionary";

export type Lang = "id" | "en";

const STORAGE_KEY = "intramedika-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Terjemahkan teks sumber (Bahasa Indonesia). `scope` = id section bila kata diterjemahkan khusus di section itu. */
  t: (text: string, scope?: string) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

function readInitialLang(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q === "en" || q === "id") return q;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "id") return saved;
  } catch {
    /* localStorage bisa tidak tersedia (mode privat) */
  }
  return "id";
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Render awal selalu "id" agar sama dengan HTML hasil static export; bahasa tersimpan diterapkan setelah hydration.
  const [lang, setLangState] = useState<Lang>("id");
  const pathname = usePathname();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- membaca preferensi browser hanya bisa setelah hydration
    setLangState(readInitialLang());
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.classList.remove("i18n-pending");
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* abaikan */
    }
  }, [lang]);

  // Jaga parameter ?lang=en di URL, juga setelah pindah halaman (agar link yang dibagikan tetap berbahasa sama)
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
    } catch {
      /* abaikan */
    }
  }, [lang, pathname]);

  const t = useCallback(
    (text: string, scope?: string) => {
      if (lang === "id") return text;
      return (scope && EN[`${scope}|${text}`]) || EN[text] || text;
    },
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang: setLangState, t }), [lang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang harus dipakai di dalam <LangProvider>");
  return ctx;
}

/** Script kecil di <head>: sembunyikan halaman sesaat bila bahasa tersimpan = EN, agar tidak berkedip dari ID ke EN. */
export const LANG_BOOT_SCRIPT = `(function(){try{var q=new URLSearchParams(location.search).get('lang');var l=q||localStorage.getItem('${STORAGE_KEY}');if(l==='en'){var h=document.documentElement;h.lang='en';h.classList.add('i18n-pending');setTimeout(function(){h.classList.remove('i18n-pending')},1500)}}catch(e){}})();`;
