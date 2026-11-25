"use client";

import { useLang } from "@/lib/i18n";

type Specialist = {
  photo?: string;
  name: string;
  role: string;
  experience: string[];
};

const SPECIALISTS: Specialist[] = [
  {
    photo: "/assets/lucy.jpg",
    name: "Dr. dr. Lucy Widasari, M.Si",
    role: "Penasihat Inovasi Strategis Layanan Kesehatan – Dewan Keunggulan Kesehatan Intramedika",
    experience: ["Peneliti, Dosen, Penulis, Dokter Medis"],
  },
  {
    name: "dr. Tommy P Sibuea, Sp. PD, FINASIM",
    role: "Penasihat Inovasi Strategis Layanan Kesehatan – Dewan Keunggulan Kesehatan Intramedika",
    experience: ["Dokter Medis"],
  },
  {
    name: "dr. Golda Naomi, Sp. KP",
    role: "Dewan Keunggulan Kesehatan Intramedika",
    experience: ["Spesialis Kedokteran Penerbangan", "Koordinator MCU", "Dokter Medis"],
  },
];

const initials = (name: string) =>
  name
    .replace(/^(Dr\.\s*)?(dr\.\s*)?/i, "")
    .split(/[\s,]+/)
    .filter((w) => /^[A-Z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function HealthcareSpecialists() {
  const { t } = useLang();
  return (
    <div id="jajaran-healthcare-specialists" className="pt-28 lg:pt-[8.5vw] pb-20 bg-gradient-to-b from-white via-white to-mint/40 min-h-screen">
      <section className="max-w-6xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-xs md:text-sm font-extrabold tracking-[.18em] px-5 py-1.5 rounded-full bg-green-100 text-g9 border border-g6/30">
            {t("PROFIL PERUSAHAAN")}
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-[#1d2b6b] tracking-tight">
            {t("Jajaran Healthcare Specialists")}
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600">
            {t("Para spesialis kesehatan kami yang mendukung transformasi layanan kesehatan digital Indonesia.")}
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-7">
          {SPECIALISTS.map((s, i) => {
            const lastOdd = i === SPECIALISTS.length - 1 && SPECIALISTS.length % 2 === 1;
            return (
              <article
                key={s.name}
                className={`card p-6 lg:p-7 flex gap-5 lg:gap-6 items-start${lastOdd ? " md:col-span-2 md:w-[calc(50%-.85rem)] md:mx-auto" : ""}`}
              >
                <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gradient-to-br from-[#1a3a5c] to-[#0B5D2E] grid place-items-center text-white text-2xl font-extrabold">
                  <span aria-hidden="true">{initials(s.name)}</span>
                  {s.photo && (
                    // eslint-disable-next-line @next/next/no-img-element -- foto kecil statis, static export tanpa optimasi gambar
                    <img src={s.photo} alt={`Foto ${s.name}`} className="absolute inset-0 w-full h-full object-cover" />
                  )}
                </div>
                <div className="min-w-0">
                  <h2 className="text-lg font-extrabold text-[#1d2b6b] leading-snug">{s.name}</h2>
                  <p className="mt-1 text-[15px] font-medium text-[#1f5fd0] leading-snug">{t(s.role)}</p>
                  <ul className="mt-3 space-y-1 text-[15px] text-slate-500 leading-relaxed">
                    {s.experience.map((x) => (
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
