"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function CohortModal() {
  const { t } = useLang();
  const { closeModal } = useModal();

  return (
    <Modal
      id="m-cohort"
      aria-label={t("Clinical Cohort Builder")}
      className="modal p-0 m-auto w-[calc(100%-1.5rem)] max-w-6xl max-h-[92vh] rounded-3xl bg-gradient-to-b from-[#05301f] via-[#032a1b] to-[#021f14] text-white shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 py-8 md:px-10 md:py-10">
        <button
          type="button"
          onClick={closeModal}
          aria-label={t("Tutup")}
          className="absolute z-20 top-4 right-4 md:top-5 md:right-5 w-11 h-11 rounded-full bg-[#6ef2b7] text-[#04281a] hover:bg-white grid place-items-center transition outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          <Icon name="x" className="w-5 h-5" />
        </button>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-10 w-96 h-96 rounded-full bg-[#2fe39b]/10 blur-3xl"
        />
        <div className="relative grid lg:grid-cols-[1fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-[#0f8f55] text-white">
              {t("PENGAYAAN TAMBAHAN")}
            </span>
            <h2 className="mt-4 text-4xl md:text-[3.2rem] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              {t("Clinical Cohort")} <span className="text-[#6ef2b7]">{t("Builder")}</span>
            </h2>
            <p className="mt-4 text-lg leading-snug text-white/90">
              {t(
                "Alat analitik berbasis AI yang memungkinkan peneliti, klinisi, dan tim manajemen rumah sakit membangun dan menganalisis kohort pasien secara dinamis — mengintegrasikan data registrasi, rekam medis, dan proses pengobatan berbasis standar.",
              )}
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center gap-4 text-white/95">
                <span className="w-11 h-11 rounded-lg bg-[#0f6b41] text-white grid place-items-center shrink-0">
                  <Icon name="users" className="w-6 h-6" />
                </span>
                {t("Seleksi kohort pasien secara cerdas berbasis LOINC, ICD-10, SNOMED CT")}
              </li>
              <li className="flex items-center gap-4 text-white/95">
                <span className="w-11 h-11 rounded-lg bg-[#0f6b41] text-white grid place-items-center shrink-0">
                  <Icon name="chart-column" className="w-6 h-6" />
                </span>
                {t("Analisis populasi real-time dari data EHR terintegrasi")}
              </li>
              <li className="flex items-center gap-4 text-white/95">
                <span className="w-11 h-11 rounded-lg bg-[#0f6b41] text-white grid place-items-center shrink-0">
                  <Icon name="settings" className="w-6 h-6" />
                </span>
                {t("Integrasi data standar OMOP CDM untuk riset & kolaborasi akademik")}
              </li>
              <li className="flex items-center gap-4 text-white/95">
                <span className="w-11 h-11 rounded-lg bg-[#0f6b41] text-white grid place-items-center shrink-0">
                  <Icon name="link" className="w-6 h-6" />
                </span>
                {t("Visualisasi analitik kurva survival, pemetaan komorbiditas, dan stratifikasi risiko")}
              </li>
              <li className="flex items-center gap-4 text-white/95">
                <span className="w-11 h-11 rounded-lg bg-[#0f6b41] text-white grid place-items-center shrink-0">
                  <Icon name="git-fork" className="w-6 h-6" />
                </span>
                {t("Mendukung pengembangan pembelajaran, riset klinis, dan publikasi ilmiah")}
              </li>
            </ul>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-[#04281a] bg-[#6ef2b7] hover:bg-white transition"
            >
              {t("Pelajari Lebih Lanjut")} <Icon name="arrow-right" className="w-5 h-5" />
            </a>
          </div>
          <div
            role="img"
            aria-label={t("Dashboard Clinical Cohort di laptop")}
            style={{
              WebkitMaskImage: "linear-gradient(to right,transparent,#000 14%)",
              maskImage: "linear-gradient(to right,transparent,#000 14%)",
            }}
          >
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "620/355",
                background: "url('/assets/pop-cohort-bersih.webp') no-repeat",
                backgroundSize: "186.45% auto",
                backgroundPosition: "96.08% 12.43%",
                mixBlendMode: "normal",
              }}
            />
          </div>
        </div>
        <div className="relative mt-8 rounded-2xl border border-[#3ddc97]/45 bg-[#063d27]/60 p-5 md:p-7">
          <h3 className="text-2xl font-extrabold text-white tracking-tight">{t("CLINICAL COHORT — ILUSTRASI ANALITIK")}</h3>
          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-white text-lg">
                <span>{t("Diabetes Tipe 2 + Hipertensi")}</span>
                <span>{t("3.453 Pasien")}</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3ddc97] to-[#6ef2b7] shadow-[0_0_12px_rgba(110,242,183,.55)]"
                  style={{ width: "66%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-white text-lg">
                <span>{t("Gagal Jantung Kongestif")}</span>
                <span>{t("1.203 Pasien")}</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3ddc97] to-[#6ef2b7] shadow-[0_0_12px_rgba(110,242,183,.55)]"
                  style={{ width: "44%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-white text-lg">
                <span>{t("CKD Stadium 3–5")}</span>
                <span>{t("847 Pasien")}</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3ddc97] to-[#6ef2b7] shadow-[0_0_12px_rgba(110,242,183,.55)]"
                  style={{ width: "36.5%" }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-white text-lg">
                <span>{t("TB Paru – Kontrol Lanjutan")}</span>
                <span>{t("623 Pasien")}</span>
              </div>
              <div className="mt-1.5 h-3 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#3ddc97] to-[#6ef2b7] shadow-[0_0_12px_rgba(110,242,183,.55)]"
                  style={{ width: "27%" }}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-3">
            <span className="text-center rounded-full border border-[#3ddc97]/60 bg-[#0a4a2f] text-white py-2.5 text-lg">
              {t("OMOP CDM")}
            </span>
            <span className="text-center rounded-full border border-[#3ddc97]/60 bg-[#0a4a2f] text-white py-2.5 text-lg">
              {t("ICD-10")}
            </span>
            <span className="text-center rounded-full border border-[#3ddc97]/60 bg-[#0a4a2f] text-white py-2.5 text-lg">
              {t("SNOMED-CT")}
            </span>
            <span className="text-center rounded-full border border-[#3ddc97]/60 bg-[#0a4a2f] text-white py-2.5 text-lg">{t("LOINC")}</span>
            <span className="text-center rounded-full border border-[#3ddc97]/60 bg-[#0a4a2f] text-white py-2.5 text-lg">
              {t("Pilih Ekspor")}
            </span>
          </div>
        </div>
        <div className="relative mt-5 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[#3ddc97]/45 bg-[#063d27]/60 p-5 flex gap-4 items-start min-h-[140px]">
            <span className="w-14 h-14 rounded-xl bg-[#0f6b41] text-white grid place-items-center shrink-0">
              <Icon name="chart-line" className="w-7 h-7" />
            </span>
            <div className="flex-1 flex flex-col">
              <b className="text-xl font-extrabold text-white leading-tight">{t("Kurva Survival")}</b>
              <div
                className="mt-2 w-[65%] self-end"
                role="img"
                aria-label={t("Ilustrasi Kurva Survival")}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  maskComposite: "intersect",
                }}
              >
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "360/80",
                    background: "url('/assets/pop-cohort-bersih.webp') no-repeat",
                    backgroundSize: "321.11% auto",
                    backgroundPosition: "20.73% 76.89%",
                    mixBlendMode: "normal",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#3ddc97]/45 bg-[#063d27]/60 p-5 flex gap-4 items-start min-h-[140px]">
            <span className="w-14 h-14 rounded-xl bg-[#0f6b41] text-white grid place-items-center shrink-0">
              <Icon name="network" className="w-7 h-7" />
            </span>
            <div className="flex-1 flex flex-col">
              <b className="text-xl font-extrabold text-white leading-tight">
                {t("Pemetaan", "m-cohort")}
                <br />
                {t("Komorbiditas", "m-cohort")}
              </b>
              <div
                className="mt-2 w-[32%] ml-auto"
                role="img"
                aria-label={t("Ilustrasi Pemetaan Komorbiditas")}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  maskComposite: "intersect",
                }}
              >
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "165/118",
                    background: "url('/assets/pop-cohort-bersih.webp') no-repeat",
                    backgroundSize: "700.61% auto",
                    backgroundPosition: "92.03% 76.03%",
                    mixBlendMode: "normal",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#3ddc97]/45 bg-[#063d27]/60 p-5 flex gap-4 items-start min-h-[140px]">
            <span className="w-14 h-14 rounded-xl bg-[#0f6b41] text-white grid place-items-center shrink-0">
              <Icon name="triangle" className="w-7 h-7" />
            </span>
            <div className="flex-1 flex flex-col">
              <b className="text-xl font-extrabold text-white leading-tight">{t("Stratifikasi Risiko")}</b>
              <div
                className="mt-2 w-[30%] ml-auto"
                role="img"
                aria-label={t("Ilustrasi Stratifikasi Risiko")}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  maskComposite: "intersect",
                }}
              >
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "155/108",
                    background: "url('/assets/pop-cohort-bersih.webp') no-repeat",
                    backgroundSize: "745.81% auto",
                    backgroundPosition: "36.46% 88.19%",
                    mixBlendMode: "normal",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#3ddc97]/45 bg-[#063d27]/60 p-5 flex gap-4 items-start min-h-[140px]">
            <span className="w-14 h-14 rounded-xl bg-[#0f6b41] text-white grid place-items-center shrink-0">
              <Icon name="chart-column" className="w-7 h-7" />
            </span>
            <div className="flex-1 flex flex-col">
              <b className="text-xl font-extrabold text-white leading-tight">{t("Tren Populasi")}</b>
              <div
                className="mt-2 w-[44%] ml-auto"
                role="img"
                aria-label={t("Ilustrasi Tren Populasi")}
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  WebkitMaskComposite: "source-in",
                  maskImage:
                    "linear-gradient(to right,transparent,#000 8%,#000 92%,transparent),linear-gradient(to bottom,transparent,#000 8%,#000 92%,transparent)",
                  maskComposite: "intersect",
                }}
              >
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "220/105",
                    background: "url('/assets/pop-cohort-bersih.webp') no-repeat",
                    backgroundSize: "525.45% auto",
                    backgroundPosition: "91.88% 88.22%",
                    mixBlendMode: "normal",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
