"use client";

import { useLang } from "@/lib/i18n";

type Director = {
  /** Path foto di /public, mis. "/assets/direksi/rivelino.webp". Kosong = tampil inisial. */
  photo?: string;
  name: string;
  role: string;
  experience: string[];
};

const DIRECTORS: Director[] = [
  {
    photo: "/assets/direksi/rivelino.jpg",
    name: "Rivelino Hasugian",
    role: "Direktur Utama",
    experience: ["Eks-Direktur Oracle – Teknologi"],
  },
  {
    photo: "/assets/direksi/bambang.jpg",
    name: "Bambang H. Purnomo",
    role: "Kepala Pengembangan Bisnis Strategis",
    experience: [
      "Eks-Direktur Konsultasi Deloitte",
      "Eks-Direktur Layanan Advisory KPMG Indonesia",
      "Eks-Presiden Direktur Sigma Solusi Integrasi (Telkom Group)",
    ],
  },
  {
    photo: "/assets/direksi/tavri.jpg",
    name: "Tavri Deviyan",
    role: "Kepala Informatika Kesehatan",
    experience: [
      "Eks-CIO Rumah Sakit Pondok Indah",
      "Konsultan Berbagai Proyek Implementasi HIS",
    ],
  },
  {
    photo: "/assets/direksi/abiathar.jpg",
    name: "dr. Abiathar, M.Sc",
    role: "VP Strategi & Kemitraan Ekosistem Layanan Kesehatan",
    experience: ["Eks-Product Manager di Peralatan Kesehatan"],
  },
];

/** Inisial dari nama, tanpa gelar "Dr." / "dr." di depan. */
const initials = (name: string) =>
  name
    .replace(/^(Dr\.\s*)?(dr\.\s*)?/i, "")
    .split(/[\s,]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function Direksi() {
  const { t } = useLang();
  return (
    <div id="jajaran-direksi" className="pt-28 lg:pt-[8.5vw] pb-20 bg-gradient-to-b from-white via-white to-mint/40 min-h-screen">
      <section id="direksi" className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs md:text-sm font-extrabold tracking-[.18em] px-5 py-1.5 rounded-full bg-green-100 text-g9 border border-g6/30">
            {t("PROFIL PERUSAHAAN")}
          </span>{" "}
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1d2b6b] tracking-tight">{t("Jajaran Managemen")}</h1>
          <p className="mt-5 text-base md:text-lg text-slate-600">
            {t("Pemimpin berpengalaman yang mendorong transformasi digital kesehatan Indonesia.")}
          </p>
        </div>
        <div id="board" className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-7">
          {DIRECTORS.map((d, i) => {
            const lastOdd = i === DIRECTORS.length - 1 && DIRECTORS.length % 2 === 1;
            return (
              <article
                key={d.name}
                className={`card p-6 lg:p-7 flex gap-5 lg:gap-6 items-start${lastOdd ? " md:col-span-2 md:w-[calc(50%-.85rem)] md:mx-auto" : ""}`}
              >
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a3a5c] to-[#0B5D2E] grid place-items-center text-white text-2xl font-extrabold">
                  <span aria-hidden="true">{initials(d.name)}</span>
                  {d.photo && (
                    // eslint-disable-next-line @next/next/no-img-element -- foto kecil statis, static export tanpa optimasi gambar
                    <img src={d.photo} alt={`Foto ${d.name}`} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold text-[#1d2b6b] leading-snug">{d.name}</h2>
                  <p className="mt-1 text-[15px] font-medium text-[#1f5fd0] leading-snug">{t(d.role)}</p>
                  <ul className="mt-3 space-y-1 text-[15px] text-slate-500 leading-relaxed">
                    {d.experience.map((x) => (
                      <li key={x}>{t(x)}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
