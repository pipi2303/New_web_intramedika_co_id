"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useLang, type Lang } from "@/lib/i18n";
import { useModal } from "./ModalProvider";

/** Menu navbar dan section yang "dimiliki" tiap menu (untuk garis aktif saat scroll). */
const MENU = [
  { key: "beranda", href: "/", label: "Beranda", sections: ["beranda", "s2"] },
  { key: "solusi", href: "/#s3", label: "Solusi", sections: ["s3", "s4"] },
  { key: "ekosistem", href: "/#s5", label: "Ekosistem", sections: ["s5"] },
  { key: "ai", href: "/#s6", label: "AI Kesehatan", sections: ["s6"] },
  { key: "produk", href: "/#s10", label: "Produk", sections: ["s7", "s8", "s9", "s10"] },
  { key: "tentang", href: "/#s13", label: "Tentang Kami", sections: ["s11", "s12", "s13"] },
  { key: "faq", href: "/#faq", label: "F.A.Q", sections: ["faq"] },
] as const;

const DIREKSI = "/jajaran-direksi/";
const SPECIALISTS = "/jajaran-healthcare-specialists/";

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const { openContact } = useModal();
  const pathname = usePathname();
  const path = pathname.replace(/\/$/, "") || "/";
  const isHome = path === "/";
  const isDireksi = path === "/jajaran-direksi";
  const isSpecialists = path === "/jajaran-healthcare-specialists";

  const [active, setActive] = useState<string | null>("beranda");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  // Garis bawah menu: geser ke link yang aktif
  const moveLine = useCallback(() => {
    const nav = navRef.current,
      line = lineRef.current;
    if (!nav || !line) return;
    const a = nav.querySelector<HTMLElement>("a.active:not(.ddi)");
    if (!a || !a.offsetWidth) {
      line.style.opacity = "0";
      return;
    }
    const r = a.getBoundingClientRect(),
      n = nav.getBoundingClientRect();
    line.style.width = `${r.width}px`;
    line.style.transform = `translateX(${r.left - n.left}px)`;
    line.style.opacity = "1";
  }, []);

  // Scrollspy (hanya di halaman utama) + latar navbar saat di-scroll
  useEffect(() => {
    const isProfilPage = isDireksi || isSpecialists;
    const currentActive = isProfilPage ? "profil" : isHome ? "beranda" : null;
    if (!isHome) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- sinkron dengan rute aktif
      setActive(currentActive);
      setScrolled(isProfilPage || window.scrollY > 10);
      if (isProfilPage) return;
    }
    let tick = false;
    const update = () => {
      tick = false;
      setScrolled(isProfilPage || window.scrollY > 10);
      if (!isHome) return;
      const bar = document.getElementById("topbar");
      const y = window.scrollY + (bar?.offsetHeight ?? 0) + window.innerHeight * 0.25;
      let act: string = "beranda";
      let last: { key: string; el: HTMLElement } | null = null;
      for (const m of MENU) {
        for (const id of m.sections) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top + window.scrollY <= y) act = m.key;
          if (!last || el.offsetTop > last.el.offsetTop) last = { key: m.key, el };
        }
      }
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom && last && last.el.getBoundingClientRect().bottom <= window.innerHeight + 2) act = last.key;
      setActive(act);
    };
    const onScroll = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, isDireksi, isSpecialists]);

  useEffect(() => {
    moveLine();
  }, [active, lang, moveLine]);

  useEffect(() => {
    window.addEventListener("resize", moveLine);
    window.addEventListener("load", moveLine);
    document.fonts?.ready.then(moveLine);
    return () => {
      window.removeEventListener("resize", moveLine);
      window.removeEventListener("load", moveLine);
    };
  }, [moveLine]);

  // Klik Beranda/logo saat sudah di halaman utama: scroll halus ke atas
  const toTop = (e: React.MouseEvent) => {
    if (!isHome) return;
    e.preventDefault();
    if (window.location.hash) window.history.pushState(window.history.state, "", window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const langButton = (code: Lang, label: string) => (
    <button
      type="button"
      className="langbtn"
      aria-pressed={lang === code}
      title={lang === code ? "" : t("Ganti bahasa")}
      onClick={() => setLang(code)}
    >
      {label}
    </button>
  );

  return (
    <header id="topbar" className={`fixed top-0 inset-x-0 z-40${scrolled ? " scrolled" : ""}`}>
      <div className="relative px-5 lg:px-[7vw] pt-7 pb-4 lg:pt-[1.7vw] lg:pb-[1.5vw] flex items-center justify-between gap-4">
        <Link href="/" onClick={toTop} aria-label="INTRAMEDIKA">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.png"
            alt="INTRAMEDIKA"
            className="h-16 lg:h-[5vw] w-auto"
          />
        </Link>

        <nav
          ref={navRef}
          id="mainnav"
          className="hidden lg:flex relative ml-auto mr-[3vw] gap-[1.5vw] text-[clamp(13px,1.07vw,18px)] font-medium text-[#1d2b4f]"
        >
          <span ref={lineRef} id="navline" aria-hidden="true" />
          {MENU.slice(0, 1).map((m) => (
            <Link key={m.key} href={m.href} onClick={toTop} className={active === m.key ? "active" : undefined}>
              {t(m.label)}
            </Link>
          ))}
          <div className="navdd">
            <Link
              href={DIREKSI}
              className={`ddtop${active === "profil" ? " active" : ""}`}
              aria-haspopup="true"
              aria-current={isDireksi ? "page" : undefined}
            >
              {t("Profil")}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <div className="ddmenu">
              <Link href={DIREKSI} className={`ddi${isDireksi ? " active" : ""}`}>
                {t("Jajaran Managemen")}
              </Link>
              <Link href={SPECIALISTS} className={`ddi${isSpecialists ? " active" : ""}`}>
                {t("Jajaran Healthcare Specialists")}
              </Link>
            </div>
          </div>
          {MENU.slice(1).map((m) => (
            <Link key={m.key} href={m.href} className={active === m.key ? "active" : undefined}>
              {t(m.label)}
            </Link>
          ))}
          <a
            href="#kontak"
            onClick={(e) => {
              e.preventDefault();
              openContact();
            }}
          >
            {t("Kontak")}
          </a>
        </nav>

        <div
          id="langsw"
          role="group"
          aria-label={t("Bahasa")}
          className="text-sm lg:text-[clamp(13px,1.1vw,18px)] font-semibold text-navy flex items-center gap-[0.5vw] lg:mr-[0.4vw]"
        >
          <span aria-hidden="true" className="inline-block w-6 h-4 lg:w-[1.45vw] lg:h-[0.95vw] rounded-[2px] overflow-hidden shadow-sm">
            <span className="block h-1/2 bg-red-600" />
            <span className="block h-1/2 bg-white" />
          </span>
          {langButton("id", "ID")}
          <span aria-hidden="true" className="text-slate-300">
            |
          </span>
          {langButton("en", "EN")}
        </div>
      </div>
    </header>
  );
}
