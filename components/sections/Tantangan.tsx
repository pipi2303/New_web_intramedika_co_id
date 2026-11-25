"use client";

import { useLang } from "@/lib/i18n";

export default function Tantangan() {
  const { t } = useLang();

  return (
    <section id="s2" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.02fr_auto_1.2fr] gap-10 lg:gap-7 items-start">
          <div>
            <span className="inline-block text-sm font-extrabold tracking-wide px-5 py-2 rounded-full bg-green-100 text-g9 shadow-[0_4px_12px_rgba(22,163,74,.15)]">
              {t("TANTANGAN DUNIA KESEHATAN")}
            </span>
            <h2 className="mt-6 text-3xl md:text-[2.1rem] lg:text-[1.6rem] xl:text-[1.9rem] font-extrabold text-[#0d3a22] leading-[1.3] tracking-[-0.03em]">
              {t("Masalahnya bukan kurangnya data.")}
              <br className="hidden md:block" /> {t("Melainkan")} <span className="text-[#3fb51c]">{t("fragmentasi")}</span>{" "}
              {t("antar sistem.")}
            </h2>
            <div className="mt-5 w-32 h-1.5 rounded-full bg-[#3fb51c]" />
            <p className="mt-6 text-lg leading-snug text-[#1e2a3a]">
              {t(
                "Fasilitas kesehatan mengelola data dalam jumlah besar setiap hari, namun sering tersebar di sistem-sistem yang tidak terhubung. Ini menciptakan silo, memperlambat pengambilan keputusan, dan menghambat pelayanan pasien yang optimal.",
              )}
            </p>
            <div className="mt-4 max-w-[600px]">
              <span
                aria-hidden="true"
                className="block w-full"
                style={{
                  aspectRatio: "600/257",
                  background: "url('/assets/tantangan.webp') no-repeat",
                  backgroundSize: "264.17% auto",
                  backgroundPosition: "8.93% 61.22%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          </div>
          <div className="hidden lg:block w-px self-stretch bg-slate-300 mb-16" />
          <div>
            <h3 className="text-2xl md:text-[2rem] font-extrabold text-[#0d3a22] tracking-tight">{t("DAMPAK FRAGMENTASI")}</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <div className="card !rounded-2xl p-5 flex gap-4 items-start">
                <span
                  aria-hidden="true"
                  className="block w-[64px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "96/94",
                    background: "url('/assets/tantangan.webp') no-repeat",
                    backgroundSize: "1651.04% auto",
                    backgroundPosition: "49.90% 22.94%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block text-lg xl:text-xl font-extrabold text-navy">{t("Data Terpisah")}</b>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1e2a3a]">
                    {t("Informasi klinis, operasional, dan keuangan berada di berbagai sistem yang tidak terhubung.")}
                  </p>
                </div>
              </div>
              <div className="card !rounded-2xl p-5 flex gap-4 items-start">
                <span
                  aria-hidden="true"
                  className="block w-[64px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "96/94",
                    background: "url('/assets/tantangan.webp') no-repeat",
                    backgroundSize: "1651.04% auto",
                    backgroundPosition: "78.11% 22.94%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block text-lg xl:text-xl font-extrabold text-navy">{t("Proses Manual")}</b>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1e2a3a]">
                    {t("Proses manual dan verifikasi berulang meningkatkan beban administratif dan risiko kesalahan.")}
                  </p>
                </div>
              </div>
              <div className="card !rounded-2xl p-5 flex gap-4 items-start">
                <span
                  aria-hidden="true"
                  className="block w-[64px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "96/94",
                    background: "url('/assets/tantangan.webp') no-repeat",
                    backgroundSize: "1651.04% auto",
                    backgroundPosition: "49.90% 48.00%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block text-lg xl:text-xl font-extrabold text-navy">{t("Visibilitas Terbatas")}</b>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1e2a3a]">
                    {t("Gambaran kinerja dan insight real-time untuk memantau kinerja dan membuat keputusan strategis.")}
                  </p>
                </div>
              </div>
              <div className="card !rounded-2xl p-5 flex gap-4 items-start">
                <span
                  aria-hidden="true"
                  className="block w-[64px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "96/94",
                    background: "url('/assets/tantangan.webp') no-repeat",
                    backgroundSize: "1651.04% auto",
                    backgroundPosition: "78.11% 48.00%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block text-lg xl:text-xl font-extrabold text-navy">{t("Tantangan Integrasi")}</b>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#1e2a3a]">
                    {t("Banyak vendor, standar yang berbeda, dan struktur data yang beragam memperumit integrasi dan inovasi.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200" />
        <div className="card !rounded-3xl mt-10 px-6 py-6 md:px-10 grid lg:grid-cols-[auto_auto_1fr] gap-6 lg:gap-10 items-center">
          <div className="flex items-center gap-6">
            <span
              aria-hidden="true"
              className="block w-[76px] shrink-0 rounded-full"
              style={{
                aspectRatio: "84/84",
                background: "url('/assets/tantangan.webp') no-repeat",
                backgroundSize: "1886.90% auto",
                backgroundPosition: "4.93% 88.77%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-2xl md:text-3xl font-extrabold text-navy leading-tight">
              {t("Lapisan", "s2")}
              <br />
              {t("Integrasi", "s2")}
              <br />
              {t("Intramedika", "s2")}
            </b>
          </div>
          <div className="hidden lg:block w-px self-stretch bg-slate-300 my-1" />
          <div className="grid sm:grid-cols-2 xl:grid-cols-[1fr_1.15fr_1.05fr] gap-x-8 gap-y-5 text-lg text-[#1e2a3a]">
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Rekam Medis Terpadu")}
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Hasil Perawatan Pasien Lebih Baik")}
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Alur Kerja Lebih Cerdas")}
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Insight Berbasis AI")}
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Pertukaran Data Real-time")}
            </div>
            <div className="flex items-center gap-4">
              <span className="w-3.5 h-3.5 rounded-full bg-[#16a316] shrink-0" />
              {t("Keandalan Operasional")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
