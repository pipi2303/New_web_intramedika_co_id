"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function Interoperabilitas() {
  const { t } = useLang();

  return (
    <section id="s4" className="bg-[#014122] text-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block text-base md:text-lg font-extrabold tracking-wide px-8 py-2 rounded-full bg-[#e3f7dc] text-[#0b4a26]">
            {t("INTEROPERABILITAS")}
          </span>
          <h2 className="mt-5 text-3xl md:text-[2.6rem] font-extrabold leading-[1.2]">
            {t("Mendukung ekspektasi interoperabilitas")}
            <br />
            <span className="text-[#d4f26b]">{t("tanpa mengekspos kompleksitas teknis.")}</span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/95">
            {t(
              "INTRAMEDIKA mengembangkan lapisan orkestrasi untuk menyatukan berbagai sistem layanan kesehatan, memastikan aliran data yang aman, standar, dan siap digunakan di seluruh ekosistem layanan.",
            )}
          </p>
        </div>
        <div className="hidden md:block relative mx-auto mt-10 max-w-[1100px] [container-type:inline-size]">
          <div className="relative" style={{ aspectRatio: "1185/322" }}>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "0.4%", width: "27.4%", top: "0.93%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "64/46",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2476.56% auto",
                    backgroundPosition: "16.04% 30.87%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Telemedisin")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "0.4%", width: "27.4%", top: "25.47%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "64/54",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2476.56% auto",
                    backgroundPosition: "15.91% 39.23%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("AI & Analitik")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "0.4%", width: "27.4%", top: "50.31%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "58/54",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2732.76% auto",
                    backgroundPosition: "16.11% 47.76%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Pencatatan")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "0.4%", width: "27.4%", top: "75.16%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "52/56",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "3048.08% auto",
                    backgroundPosition: "16.31% 56.41%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Perangkat Wearable")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "72.2%", width: "27.4%", top: "0.93%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "56/54",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2830.36% auto",
                    backgroundPosition: "71.48% 30.92%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Laboratorium")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "72.2%", width: "27.4%", top: "25.47%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "54/54",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2935.19% auto",
                    backgroundPosition: "71.39% 39.23%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Data Klinis")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "72.2%", width: "27.4%", top: "50.31%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "56/54",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2830.36% auto",
                    backgroundPosition: "71.48% 47.76%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">{t("Laporan Pasien")}</b>
            </div>
            <div
              className="absolute bg-white rounded-full flex items-center shadow-[0_4px_14px_rgba(0,0,0,.25)]"
              style={{ left: "72.2%", width: "27.4%", top: "75.16%", height: "21.4%" }}
            >
              <span className="w-[33%] grid place-items-center">
                <span
                  aria-hidden="true"
                  className="block h-[3.5cqw]"
                  style={{
                    aspectRatio: "68/52",
                    background: "url('/assets/interoperabilitas.webp') no-repeat",
                    backgroundSize: "2330.88% auto",
                    backgroundPosition: "71.92% 56.38%",
                  }}
                />
              </span>
              <b className="flex-1 text-center pr-[6%] text-[1.85cqw] leading-[1.1] font-extrabold text-navy">
                {t("Pemantauan", "s4")}
                <br />
                {t("Jarak Jauh", "s4")}
              </b>
            </div>
            <span className="absolute z-10" style={{ left: "27.17%", width: "45.65%", top: "0" }}>
              <span className="sr-only">{t("Kesiapan Interoperabilitas")}</span>
              <span
                aria-hidden="true"
                className="block w-full"
                style={{
                  aspectRatio: "541/322",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "292.98% auto",
                  backgroundPosition: "50.00% 41.79%",
                }}
              />
            </span>
          </div>
        </div>
        <div className="md:hidden mt-8">
          <div className="max-w-[260px] mx-auto">
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "300/315",
                background: "url('/assets/interoperabilitas.webp') no-repeat",
                backgroundSize: "528.33% auto",
                backgroundPosition: "49.81% 42.10%",
              }}
            />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "64/46",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2476.56% auto",
                  backgroundPosition: "16.04% 30.87%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Telemedisin")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "64/54",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2476.56% auto",
                  backgroundPosition: "15.91% 39.23%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("AI & Analitik")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "58/54",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2732.76% auto",
                  backgroundPosition: "16.11% 47.76%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Pencatatan")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "52/56",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "3048.08% auto",
                  backgroundPosition: "16.31% 56.41%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Perangkat Wearable")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "56/54",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2830.36% auto",
                  backgroundPosition: "71.48% 30.92%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Laboratorium")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "54/54",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2935.19% auto",
                  backgroundPosition: "71.39% 39.23%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Data Klinis")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "56/54",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2830.36% auto",
                  backgroundPosition: "71.48% 47.76%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Laporan Pasien")}</b>
            </div>
            <div className="bg-white rounded-full flex items-center gap-2 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="block h-7 shrink-0"
                style={{
                  aspectRatio: "68/52",
                  background: "url('/assets/interoperabilitas.webp') no-repeat",
                  backgroundSize: "2330.88% auto",
                  backgroundPosition: "71.92% 56.38%",
                }}
              />
              <b className="text-sm font-extrabold text-navy leading-tight">{t("Pemantauan Jarak Jauh")}</b>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-6">
          <span className="hidden md:block flex-1 h-0.5 bg-[#c6f135]" />
          <h3 className="text-center text-2xl md:text-[2rem] font-extrabold tracking-tight">
            {t("Kesiapan Interoperabilitas untuk Ekosistem Layanan Kesehatan Indonesia")}
          </h3>
          <span className="hidden md:block flex-1 h-0.5 bg-[#c6f135]" />
        </div>
        <p className="mt-3 text-center text-lg text-white/90">
          {t("Terhubung ke seluruh sistem nasional dan internasional yang dibutuhkan.")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 [&>*]:w-[calc(50%-0.5rem)] md:[&>*]:w-[calc(33.33%-0.67rem)] lg:[&>*]:w-[calc(25%-0.75rem)]">
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="settings" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("BPJS Kesehatan")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Klaim & Rujukan")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="refresh-cw" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("SATUSEHAT")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Pertukaran Data")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="smartphone" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("Mobile JKN")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Akses Pasien")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="image" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("PACS")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Penyimpanan Medis")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="flask-conical" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("LIS")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Hasil Lab")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <Icon name="scan-line" className="w-7 h-7 shrink-0" />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("DICOM")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Data Pencitraan Medis")}</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-white/80 px-3.5 py-4 flex items-start gap-2.5 hover:bg-white/10 transition">
            <span
              aria-hidden="true"
              className="block h-7 shrink-0"
              style={{
                aspectRatio: "54/50",
                background: "url('/assets/interoperabilitas.webp') no-repeat",
                backgroundSize: "2935.19% auto",
                backgroundPosition: "85.04% 79.41%",
              }}
            />
            <div className="leading-tight">
              <b className="block text-base xl:text-[1.05rem] font-extrabold whitespace-nowrap">{t("HL7 FHIR R4")}</b>
              <span className="block mt-1.5 text-sm text-white/90">{t("Standar Global")}</span>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg font-bold">
          <span className="flex items-center gap-3">
            <Icon name="refresh-cw" className="w-7 h-7 text-[#c6f135]" />
            {t("Sinkronisasi real-time")}
          </span>
          <span className="hidden md:block w-0.5 h-10 bg-white/70" />
          <span className="flex items-center gap-3">
            <Icon name="lock-keyhole" className="w-7 h-7 text-[#c6f135]" />
            {t("Enkripsi end-to-end")}
          </span>
          <span className="hidden md:block w-0.5 h-10 bg-white/70" />
          <span className="flex items-center gap-3 rounded-full border-2 border-white/90 px-7 py-3">
            <Icon name="link" className="w-6 h-6 text-[#c6f135]" />
            {t("SEMUA SISTEM TERHUBUNG")}
          </span>
        </div>
      </div>
    </section>
  );
}
