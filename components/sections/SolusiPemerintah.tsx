"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function SolusiPemerintah() {
  const { t } = useLang();
  const { openModal } = useModal();

  return (
    <section id="s8" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-6xl mx-auto">
          <span className="inline-block text-lg md:text-xl font-extrabold tracking-wide px-6 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
            {t("SOLUSI PEMERINTAH")}
          </span>
          <h2 className="mt-4 text-3xl md:text-[2.3rem] xl:text-[2.6rem] font-extrabold text-navy leading-tight tracking-[-0.02em]">
            {t("Mendukung Transformasi Digital Kesehatan")}{" "}
            <span className="relative inline-block text-[#16a316]">
              {t("Nasional")}
              <svg aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" className="absolute left-0 -bottom-1.5 w-full h-2.5">
                <path d="M2 7 C60 3 140 3 198 6" stroke="#16a316" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-lg text-[#24406b]">
            {t(
              "Intramedika bermitra dengan Kementerian Kesehatan, Dinas Kesehatan, Puskesmas, dan fasilitas pemerintah dalam mewujudkan ekosistem data kesehatan nasional yang terintegrasi.",
            )}
          </p>
        </div>
        <div className="mt-7 mb-10 flex flex-wrap justify-center items-center gap-2.5">
          <span className="text-lg font-extrabold text-[#16a316] pr-3 mr-1 border-r-2 border-slate-300">{t("UNTUK SIAPA")}</span>
          <span className="text-[15px] font-medium px-4 py-2 rounded-full bg-green-100 text-navy">{t("Puskesmas & FKTP")}</span>
          <span className="text-[15px] font-medium px-4 py-2 rounded-full bg-green-100 text-navy">{t("Dinas Kesehatan Kab/Kota")}</span>
          <span className="text-[15px] font-medium px-4 py-2 rounded-full bg-green-100 text-navy">{t("Dinas Kesehatan Provinsi")}</span>
          <span className="text-[15px] font-medium px-4 py-2 rounded-full bg-green-100 text-navy">{t("Kementerian Kesehatan RI")}</span>
          <span className="text-[15px] font-medium px-4 py-2 rounded-full bg-green-100 text-navy">{t("RSUD & RSUP Pemerintah")}</span>
        </div>
        <div className="grid lg:grid-cols-[1fr_2.1fr] gap-5">
          <div className="card !rounded-2xl p-6 flex flex-col lg:row-span-2">
            <div className="flex items-center gap-5">
              <span
                aria-hidden="true"
                className="block w-[74px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "86/82",
                  background: "url('/assets/government.webp') no-repeat",
                  backgroundSize: "1944.19% auto",
                  backgroundPosition: "4.67% 39.35%",
                  mixBlendMode: "multiply",
                }}
              />
              <h3 className="text-xl xl:text-2xl font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("IntraPuskesmas —")}
                <br />
                {t("FKTP Digital")}
              </h3>
            </div>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5 text-[17px]">
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Sistem informasi Puskesmas terintegrasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Integrasi P-Care BPJS Kesehatan otomatis")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Program kesehatan nasional: imunisasi, KIA, gizi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Laporan otomatis (LB1-LB4) ke Dinkes")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Integrasi Posyandu AI untuk kader kesehatan")}</span>
              </li>
            </ul>
            <div className="mt-auto pt-6" role="img" aria-label={t("Gedung Puskesmas")}>
              <span
                aria-hidden="true"
                className="block w-full rounded-b-xl"
                style={{
                  aspectRatio: "466/158",
                  background: "url('/assets/government.webp') no-repeat",
                  backgroundSize: "358.80% auto",
                  backgroundPosition: "4.64% 84.55%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="mt-3 text-right">
              <button
                type="button"
                onClick={() => openModal("m-puskesmas")}
                aria-haspopup="dialog"
                className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0b5d2e] text-white font-semibold hover:bg-dk transition"
              >
                {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="card !rounded-2xl p-6 grid md:grid-cols-[1fr_auto_1fr] gap-6">
            <div>
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="block w-[74px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "90/82",
                    background: "url('/assets/government.webp') no-repeat",
                    backgroundSize: "1857.78% auto",
                    backgroundPosition: "36.66% 39.35%",
                    mixBlendMode: "multiply",
                  }}
                />
                <h3 className="text-xl xl:text-2xl font-extrabold text-navy leading-tight tracking-[-0.01em]">
                  {t("Posyandu AI — Kader Digital")}
                </h3>
              </div>
              <div className="mt-3 max-w-[440px] ml-auto" role="img" aria-label={t("Gedung Posyandu")}>
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "422/128",
                    background: "url('/assets/government.webp') no-repeat",
                    backgroundSize: "396.21% auto",
                    backgroundPosition: "52.80% 48.46%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            <span className="hidden md:block w-px bg-slate-200 my-2" />
            <div className="flex flex-col">
              <ul className="space-y-2.5 text-[15px] leading-snug text-navy text-[16px]">
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Aplikasi mobile untuk kader Posyandu")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Skrining antropometri & pertumbuhan berbantuan AI")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Deteksi stunting & wasting otomatis")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Pemantauan vaksinasi & imunisasi secara real-time")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Terintegrasi langsung dengan sistem Puskesmas")}</span>
                </li>
              </ul>
              <div className="mt-auto pt-5 text-right">
                <button
                  type="button"
                  onClick={() => openModal("m-posyandu")}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0b5d2e] text-white font-semibold hover:bg-dk transition"
                >
                  {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card !rounded-2xl p-6">
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="block w-[74px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "82/72",
                    background: "url('/assets/government.webp') no-repeat",
                    backgroundSize: "2039.02% auto",
                    backgroundPosition: "36.48% 68.24%",
                    mixBlendMode: "multiply",
                  }}
                />
                <h3 className="text-xl xl:text-2xl font-extrabold text-navy leading-tight tracking-[-0.01em]">
                  {t("Dashboard Dinas Kesehatan")}
                </h3>
              </div>
              <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5 text-[16px]">
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Surveilans penyakit & wabah secara real-time")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Pemantauan program kesehatan masyarakat")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Pelaporan otomatis ke Kemenkes & SATUSEHAT")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Agregasi data dari seluruh fasilitas kesehatan")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Sistem peringatan dini penyakit menular")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-6">
              <div className="flex items-center gap-5">
                <span
                  aria-hidden="true"
                  className="block w-[74px] shrink-0 rounded-xl"
                  style={{
                    aspectRatio: "82/72",
                    background: "url('/assets/government.webp') no-repeat",
                    backgroundSize: "2039.02% auto",
                    backgroundPosition: "70.94% 68.24%",
                    mixBlendMode: "multiply",
                  }}
                />
                <h3 className="text-xl xl:text-2xl font-extrabold text-navy leading-tight tracking-[-0.01em]">
                  {t("SATUSEHAT & Regulasi")}
                </h3>
              </div>
              <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5 text-[16px]">
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Integrasi penuh Platform SATUSEHAT")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Kepatuhan Permenkes No. 24/2022")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Otomatisasi klaim INA-CBG’s & BPJS Kesehatan")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Dukungan Mobile JKN & kartu JKN digital")}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                  <span>{t("Registri penyakit nasional & umpan surveilans")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
