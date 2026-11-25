"use client";

import { useLang } from "@/lib/i18n";

export default function PortofolioProduk() {
  const { t } = useLang();

  return (
    <section id="s10" className="bg-gradient-to-b from-white to-mint/40">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block text-sm md:text-base font-extrabold tracking-wide px-6 py-1.5 rounded-full bg-green-100 text-g9 border-2 border-g6/60">
            {t("PORTOFOLIO PRODUK")}
          </span>
          <h2 className="mt-4 text-3xl md:text-[2.6rem] font-extrabold leading-tight">
            <span className="text-navy">{t("Tiga lini produk yang saling terhubung")}</span>
            <br />
            <span className="text-g9">{t("untuk berbagai model layanan kesehatan.")}</span>
          </h2>
          <p className="mt-4 text-slate-700">
            {t(
              "INTRAMEDIKA menghadirkan solusi digital terintegrasi yang beradaptasi dengan cara pelayanan kesehatan diberikan — di rumah sakit, klinik, maupun perawatan personal.",
            )}
          </p>
        </div>
        <div className="grid lg:grid-cols-[1fr_auto_2.3fr] gap-8 lg:gap-10 items-start">
          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="shrink-0 rounded-2xl overflow-hidden leading-[0]">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0"
                  style={{
                    height: "80px",
                    aspectRatio: "118/110",
                    background: "url('/assets/portofolio-produk.webp') no-repeat",
                    backgroundSize: "1503.39% auto",
                    backgroundPosition: "4.23% 30.89%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <div className="border-l-4 border-g6 pl-4">
                <b className="block text-lg font-extrabold text-g9 leading-snug">
                  {t("Platform berbasis cloud untuk transformasi kesehatan.")}
                </b>
                <p className="text-sm text-slate-700 mt-1">
                  {t(
                    "Infrastruktur terstandar platform software-as-a-service (SaaS) berbasis cloud yang memastikan aksesibilitas, keamanan, dan skalabilitas tinggi di berbagai model layanan.",
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="shrink-0 rounded-2xl overflow-hidden leading-[0]">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0"
                  style={{
                    height: "80px",
                    aspectRatio: "118/110",
                    background: "url('/assets/portofolio-produk.webp') no-repeat",
                    backgroundSize: "1503.39% auto",
                    backgroundPosition: "4.23% 52.51%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <div className="border-l-4 border-g6 pl-4">
                <b className="block text-lg font-extrabold text-g9 leading-snug">
                  {t("Dibangun dari awal dengan arsitektur modern dan AI.")}
                </b>
                <p className="text-sm text-slate-700 mt-1">
                  {t(
                    "Dirancang di atas arsitektur cloud-native, multi-tenant, dan didukung AI agar lebih adaptif, efisien, serta siap untuk kebutuhan layanan kesehatan masa depan.",
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="shrink-0 rounded-2xl overflow-hidden leading-[0]">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0"
                  style={{
                    height: "80px",
                    aspectRatio: "118/110",
                    background: "url('/assets/portofolio-produk.webp') no-repeat",
                    backgroundSize: "1503.39% auto",
                    backgroundPosition: "4.23% 75.93%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <div className="border-l-4 border-g6 pl-4">
                <b className="block text-lg font-extrabold text-g9 leading-snug">{t("Menggantikan sistem lama yang tidak efisien.")}</b>
                <p className="text-sm text-slate-700 mt-1">
                  {t(
                    "Menawarkan interoperabilitas, otomatisasi layanan, dan efisiensi operasional yang nyata, baik untuk faskes maupun organisasi kesehatan.",
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block w-0.5 self-stretch bg-g6/70 rounded-full" />
          <div className="grid md:grid-cols-2 gap-4 lg:self-stretch">
            <div className="flex flex-col gap-4">
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "114/76",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1556.14% auto",
                      backgroundPosition: "39.04% 29.35%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("RUMAH SAKIT / KLINIK")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "96/80",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1847.92% auto",
                      backgroundPosition: "39.33% 40.64%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Dokter", "s10")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "98/78",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1810.20% auto",
                      backgroundPosition: "39.50% 51.92%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Cybersher BPJS Kesehatan")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "102/76",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1739.22% auto",
                      backgroundPosition: "39.35% 63.63%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Keuangan & Akuntansi")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "120/72",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1478.33% auto",
                      backgroundPosition: "39.42% 74.11%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Pemantauan Pasien Jarak Jauh")}</b>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "112/68",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1583.93% auto",
                      backgroundPosition: "73.41% 29.30%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Sumber Daya Manusia")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "106/70",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1673.58% auto",
                      backgroundPosition: "73.44% 40.64%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Dashboard Manajemen IES & PMS")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "116/66",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1529.31% auto",
                      backgroundPosition: "73.70% 51.89%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Platform Analitik Penelitian")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "64/78",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "2771.88% auto",
                      backgroundPosition: "72.98% 63.29%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <span className="block text-xs font-extrabold text-g6">{t("Intramedika")}</span>
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Aplikasi Mobile")}</b>
                </div>
              </div>
              <div className="rounded-full bg-white border border-slate-100 shadow-[0_6px_18px_rgba(15,23,42,.08)] hover:shadow-[0_10px_26px_rgba(11,93,46,.16)] hover:-translate-y-0.5 transition flex items-center gap-4 sm:gap-5 pl-5 sm:pl-8 pr-5 py-3 min-h-[84px] lg:flex-1">
                <span className="w-[88px] shrink-0 grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0"
                    style={{
                      height: "56px",
                      aspectRatio: "126/70",
                      background: "url('/assets/portofolio-produk.webp') no-repeat",
                      backgroundSize: "1407.94% auto",
                      backgroundPosition: "74.15% 74.17%",
                      mixBlendMode: "multiply",
                    }}
                  />
                </span>
                <div className="leading-tight">
                  <b className="block text-base sm:text-lg font-extrabold text-navy">{t("Telekonsultasi")}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 lg:grid-cols-[auto_repeat(5,1fr)] items-center gap-y-6">
          <div className="sm:col-span-3 lg:col-span-1 justify-self-center lg:justify-self-start lg:mr-6 rounded-full overflow-hidden shadow-lg leading-[0]">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "96px",
                aspectRatio: "378/102",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "469.31% auto",
                backgroundPosition: "5.16% 95.29%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="sr-only">{t("Lini AI Intramedika")}</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:border-l-2 border-g6/60 px-2">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "56px",
                aspectRatio: "72/62",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "2463.89% auto",
                backgroundPosition: "33.25% 89.70%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-lg font-extrabold text-navy">{t("Aplikasi AI")}</b>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:border-l-2 border-g6/60 px-2">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "56px",
                aspectRatio: "72/64",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "2463.89% auto",
                backgroundPosition: "46.77% 89.91%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-lg font-extrabold text-navy">{t("Layanan AI")}</b>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:border-l-2 border-g6/60 px-2">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "56px",
                aspectRatio: "74/66",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "2397.30% auto",
                backgroundPosition: "60.47% 89.89%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-lg font-extrabold text-navy">{t("Model AI")}</b>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:border-l-2 border-g6/60 px-2">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "56px",
                aspectRatio: "68/66",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "2608.82% auto",
                backgroundPosition: "74.44% 89.89%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-lg font-extrabold text-navy">{t("Data AI")}</b>
          </div>
          <div className="flex flex-col items-center gap-2 text-center lg:border-l-2 border-g6/60 px-2">
            <span
              aria-hidden="true"
              className="inline-block shrink-0"
              style={{
                height: "56px",
                aspectRatio: "94/70",
                background: "url('/assets/portofolio-produk.webp') no-repeat",
                backgroundSize: "1887.23% auto",
                backgroundPosition: "91.07% 90.33%",
                mixBlendMode: "multiply",
              }}
            />
            <b className="text-lg font-extrabold text-navy">{t("Infrastruktur AI")}</b>
          </div>
        </div>
      </div>
    </section>
  );
}
