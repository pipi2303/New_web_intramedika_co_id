"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function ArsitekturSolusi() {
  const { t } = useLang();

  return (
    <section id="s6" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-5xl mx-auto">
          <span className="inline-block text-base md:text-xl font-extrabold tracking-wide px-6 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
            {t("ARSITEKTUR SOLUSI")}
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-[-0.02em] text-navy">
            {t("Solusi untuk", "s6")} <span className="text-[#16a316]">{t("setiap", "s6")}</span> {t("kebutuhan", "s6")}{" "}
            <span className="text-[#16a316]">
              {t("layanan", "s6")}
              <br className="hidden md:block" /> {t("kesehatan.", "s6")}
            </span>
          </h2>
          <p className="mt-5 text-lg text-[#1e2a3a]">
            {t(
              "Dari AI klinis hingga platform Puskesmas, dari grup rumah sakit skala enterprise hingga solusi pemerintah — Intramedika hadir dengan solusi yang tepat untuk setiap konteks dan skala fasilitas kesehatan di Indonesia.",
            )}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-5 mt-7 mb-10">
          <a
            href="#s6"
            className="px-8 py-3 rounded-full bg-green-100 text-[#0b4a26] text-lg md:text-xl font-bold tracking-[-0.02em] transition hover:bg-[#16a316] hover:text-white hover:-translate-y-0.5"
            style={{ fontFamily: "Georgia,'Times New Roman',serif" }}
          >
            {t("Solusi AI")}
          </a>
          <a
            href="#s7"
            className="px-8 py-3 rounded-full bg-green-100 text-[#0b4a26] text-lg md:text-xl font-bold tracking-[-0.02em] transition hover:bg-[#16a316] hover:text-white hover:-translate-y-0.5"
            style={{ fontFamily: "Georgia,'Times New Roman',serif" }}
          >
            {t("Solusi Jaringan Layanan Kesehatan")}
          </a>
          <a
            href="#s8"
            className="px-8 py-3 rounded-full bg-green-100 text-[#0b4a26] text-lg md:text-xl font-bold tracking-[-0.02em] transition hover:bg-[#16a316] hover:text-white hover:-translate-y-0.5"
            style={{ fontFamily: "Georgia,'Times New Roman',serif" }}
          >
            {t("Solusi Pemerintah")}
          </a>
          <a
            href="#s9"
            className="px-8 py-3 rounded-full bg-green-100 text-[#0b4a26] text-lg md:text-xl font-bold tracking-[-0.02em] transition hover:bg-[#16a316] hover:text-white hover:-translate-y-0.5"
            style={{ fontFamily: "Georgia,'Times New Roman',serif" }}
          >
            {t("Platform Digital")}
          </a>
        </div>
        <div className="grid lg:grid-cols-[0.82fr_auto_2.7fr] gap-8 lg:gap-6">
          <div>
            <span className="inline-block text-lg font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              {t("SOLUSI AI")}
            </span>
            <h3 className="mt-3 text-3xl lg:text-[1.6rem] xl:text-[1.85rem] font-extrabold text-[#0d3a22] leading-[1.15] tracking-[-0.025em]">
              {t("Kecerdasan Buatan untuk Layanan Kesehatan yang Lebih")}{" "}
              <span className="relative inline-block">
                {t("Cerdas")}
                <svg aria-hidden="true" viewBox="0 0 140 12" preserveAspectRatio="none" className="absolute left-0 -bottom-2 w-[115%] h-3">
                  <path d="M3 8 C40 3 95 2 137 6" stroke="#16a316" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h3>
            <p className="mt-5 text-base leading-snug text-[#1e2a3a]">
              {t(
                "Intramedika AI mengintegrasikan machine learning, NLP, computer vision, dan generative AI langsung ke dalam alur kerja klinis dan operasional.",
              )}
            </p>
            <p className="mt-5 text-lg font-extrabold text-[#16a316]">{t("UNTUK SIAPA")}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">
                {t("RS Pendidikan Universitas")}
              </span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">
                {t("RS Tipe A, B, C, D")}
              </span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">
                {t("RS Paripurna, Utama, Madya, Dasar")}
              </span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">{t("Puskesmas")}</span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">{t("Posyandu")}</span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">
                {t("Klinik Spesialis")}
              </span>
              <span className="text-[14px] px-3.5 py-1.5 rounded-full bg-green-100 text-navy tracking-[-0.01em]">
                {t("Lab Diagnostik")}
              </span>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-lg font-bold text-white bg-gradient-to-r from-[#0b5d2e] to-[#16a316] shadow-lg hover:shadow-xl transition"
            >
              {t("Pelajari Solusi AI")} <Icon name="arrow-right" className="w-5 h-5" />
            </a>
          </div>
          <div className="hidden lg:block w-0.5 bg-green-100 rounded-full mb-12" />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card !rounded-2xl p-4 pr-4 flex gap-3.5 items-start">
              <span
                aria-hidden="true"
                className="block w-[84px] xl:w-[104px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "136/130",
                  background: "url('/assets/ai-solutions.webp') no-repeat",
                  backgroundSize: "1166.18% auto",
                  backgroundPosition: "34.21% 45.48%",
                  mixBlendMode: "multiply",
                }}
              />
              <div>
                <h4 className="text-lg xl:text-[1.3rem] font-extrabold text-navy leading-[1.15] tracking-[-0.02em]">
                  {t("AI Klinis & Asisten Digital")}
                </h4>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-snug text-navy">
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Asisten klinis berbasis AI")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Dokumentasi otomatis & konversi suara ke catatan")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Triase klinis & otomatisasi alur kerja")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Ringkasan cerdas & insight pasien")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Perencanaan pulang & rekonsiliasi obat berbasis AI")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card !rounded-2xl p-4 pr-4 flex gap-3.5 items-start">
              <span
                aria-hidden="true"
                className="block w-[84px] xl:w-[104px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "138/124",
                  background: "url('/assets/ai-solutions.webp') no-repeat",
                  backgroundSize: "1149.28% auto",
                  backgroundPosition: "71.13% 45.16%",
                  mixBlendMode: "multiply",
                }}
              />
              <div>
                <h4 className="text-lg xl:text-[1.3rem] font-extrabold text-navy leading-[1.15] tracking-[-0.02em]">
                  {t("Analitik Prediktif & Pendukung Keputusan")}
                </h4>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-snug text-navy">
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Stratifikasi risiko & peringatan dini")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Prediksi perburukan kondisi & rawat inap ulang")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Prakiraan operasional & perencanaan kapasitas")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Pendukung keputusan berbasis bukti")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Prediksi sepsis & skoring ICU")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card !rounded-2xl p-4 pr-4 flex gap-3.5 items-start">
              <span
                aria-hidden="true"
                className="block w-[84px] xl:w-[104px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "138/122",
                  background: "url('/assets/ai-solutions.webp') no-repeat",
                  backgroundSize: "1149.28% auto",
                  backgroundPosition: "34.39% 76.32%",
                  mixBlendMode: "multiply",
                }}
              />
              <div>
                <h4 className="text-lg xl:text-[1.3rem] font-extrabold text-navy leading-[1.15] tracking-[-0.02em]">
                  {t("Pencitraan Medis AI (Intravision)")}
                </h4>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-snug text-navy">
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Pembacaan radiologi berbantuan AI")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Rontgen dada: deteksi TB, pneumonia, dan nodul")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Skrining retina untuk retinopati diabetik")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Interpretasi EKG berbasis AI")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Integrasi PACS dengan overlay AI")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card !rounded-2xl p-4 pr-4 flex gap-3.5 items-start">
              <span
                aria-hidden="true"
                className="block w-[84px] xl:w-[104px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "140/128",
                  background: "url('/assets/ai-solutions.webp') no-repeat",
                  backgroundSize: "1132.86% auto",
                  backgroundPosition: "71.23% 76.85%",
                  mixBlendMode: "multiply",
                }}
              />
              <div>
                <h4 className="text-lg xl:text-[1.3rem] font-extrabold text-navy leading-[1.15] tracking-[-0.02em]">
                  {t("GenAI & Kecerdasan Bahasa")}
                </h4>
                <ul className="mt-3 space-y-1.5 text-[14px] leading-snug text-navy">
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Ringkasan rekam medis dengan GenAI")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("NLP medis berbahasa Indonesia")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Pengodean ICD-9&10 otomatis")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Pencarian cerdas di seluruh rekam medis")}</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                      <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                    </span>
                    <span>{t("Materi edukasi pasien yang dibuat oleh AI")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
