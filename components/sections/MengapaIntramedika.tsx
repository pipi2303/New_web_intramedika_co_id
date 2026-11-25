"use client";

import { useLang } from "@/lib/i18n";

export default function MengapaIntramedika() {
  const { t } = useLang();

  return (
    <section id="s13" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block text-sm md:text-base font-extrabold tracking-wide px-6 py-2 rounded-full bg-green-100 text-g9 border border-g6/40">
            {t("MENGAPA INTRAMEDIKA")}
          </span>
          <h2 className="mt-5 text-4xl md:text-[3.2rem] font-extrabold leading-[1.15]">
            <span className="text-navy">{t("Mengapa Organisasi Kesehatan")}</span>
            <br />
            <span className="text-g9">{t("Memilih Intramedika")}</span>
          </h2>
          <div className="mx-auto mt-5 w-24 h-1.5 rounded-full bg-g9" />
          <p className="mt-6 text-lg text-[#24406b]">
            {t(
              "Komitmen kami menghadirkan solusi kesehatan digital yang terintegrasi, aman, cerdas, dan siap berkembang bersama kebutuhan layanan kesehatan di Indonesia.",
            )}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "4.19% 47.10%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"01"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Dibangun untuk Indonesia")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Dirancang sesuai konteks layanan kesehatan, regulasi, alur kerja, dan kebutuhan organisasi di Indonesia — bukan sekadar adaptasi sistem asing.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "38.07% 47.10%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"02"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Terintegrasi Sejak Awal")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Menghubungkan layanan klinis, operasional, administratif, finansial, dan keterlibatan pasien dalam satu ekosistem digital yang benar-benar terpadu.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "72.14% 47.10%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"03"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Kecerdasan Siap AI")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Mengubah data operasional menjadi insight yang dapat ditindaklanjuti — dari pendukung keputusan klinis hingga analitik prediktif dan dashboard eksekutif.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "4.19% 77.40%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"04"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Aman & Patuh Regulasi")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Keamanan kelas enterprise, privasi sejak desain, akses berbasis peran, audit trail, dan tata kelola sebagai bagian dari fondasi platform — bukan tambahan.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "38.07% 77.40%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"05"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Siap Berkembang untuk Masa Depan")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Cloud-native, modular, dan fleksibel — dari klinik pratama hingga jaringan rumah sakit nasional. Berkembang bersama organisasi Anda.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl relative overflow-hidden p-5 pb-9 grid grid-cols-[68px_1fr] gap-x-4">
            <span aria-hidden="true" className="absolute -bottom-12 -left-8 w-44 h-24 rounded-[50%] bg-green-100/70" />
            <div className="relative">
              <span
                aria-hidden="true"
                className="block w-[68px] h-[68px] shrink-0 rounded-2xl"
                style={{
                  background: "url('/assets/mengapa-intramedika.webp') no-repeat",
                  backgroundSize: "1741.67% auto",
                  backgroundPosition: "72.14% 77.40%",
                  mixBlendMode: "multiply",
                }}
              />
            </div>
            <div className="relative self-start border-l-2 border-g6/70 pl-5 py-0.5">
              <span className="block text-xl font-extrabold text-g9">{"06"}</span>
              <h3 className="mt-1 text-lg xl:text-xl font-extrabold text-navy leading-snug">{t("Mitra Transformasi Jangka Panjang")}</h3>
            </div>
            <p className="relative col-start-2 mt-3 pl-[22px] text-sm xl:text-[15px] leading-relaxed text-[#24406b]">
              {t(
                "Kami bukan sekadar vendor perangkat lunak. Tim implementasi dan dukungan kami mendampingi transformasi digital fasilitas kesehatan Anda dari awal hingga berkembang.",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
