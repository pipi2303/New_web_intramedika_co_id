"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function PuskesmasModal() {
  const { t } = useLang();
  const { closeModal } = useModal();

  return (
    <Modal
      id="m-puskesmas"
      aria-labelledby="m-puskesmas-t"
      className="modal p-0 m-auto w-[calc(100%-1.5rem)] max-w-6xl max-h-[92vh] rounded-3xl bg-white shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 py-8 md:px-12 md:py-10">
        <button
          type="button"
          onClick={closeModal}
          aria-label={t("Tutup")}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-green-100 text-g9 grid place-items-center hover:bg-[#16a316] hover:text-white transition outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          <Icon name="x" className="w-5 h-5" />
        </button>{" "}
        <span className="inline-block text-base md:text-lg font-extrabold tracking-wide px-6 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
          {t("INTRAPUSKESMAS")}
        </span>{" "}
        <h2 id="m-puskesmas-t" className="mt-5 text-3xl md:text-5xl font-extrabold leading-[1.15] tracking-[-0.02em]">
          <span className="text-navy">{t("Digitalisasi Puskesmas Indonesia.")}</span>
          <br />
          <span className="text-[#16a316]">{t("Terintegrasi. Standar. Mudah.")}</span>
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-[#1e2a3a]">
          {t(
            "IntraPuskesmas dirancang khusus untuk Pusat Kesehatan Masyarakat Indonesia — memenuhi standar Kemenkes, mendukung BPJS Kesehatan, dan terhubung ke SATUSEHAT secara real-time.",
          )}
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-x-6 gap-y-4">
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "150/130",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1091.33% auto",
                backgroundPosition: "7.67% 45.78%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"01"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("Pendaftaran & Antrian Digital")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("Pasien mendaftar melalui ponsel, dan antreannya dikelola otomatis secara real-time.")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "156/130",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1049.36% auto",
                backgroundPosition: "58.88% 45.78%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"02"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("Rekam Medis Elektronik")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("RME terintegrasi yang mengikuti standar nasional dan HL7 FHIR.")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "150/126",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1091.33% auto",
                backgroundPosition: "7.67% 68.35%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"03"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("P-Care BPJS Kesehatan Otomatis")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("Integrasi data P-Care langsung dari SIM, tanpa perlu input ganda.")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "156/126",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1049.36% auto",
                backgroundPosition: "58.88% 68.35%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"04"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("Program Nasional Terintegrasi")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("KIA, imunisasi, gizi, TB, malaria — semua dalam satu platform.")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "150/128",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1091.33% auto",
                backgroundPosition: "7.67% 90.87%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"05"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("Laporan Otomatis ke Dinkes")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("LP, IM-RK, dan laporan khusus dibuat otomatis dan akurat untuk Dinkes.")}
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 shadow-[0_4px_14px_rgba(11,93,46,.08)] p-4 md:p-5 flex items-center gap-4 md:gap-6">
            <span
              aria-hidden="true"
              className="block w-20 md:w-28 shrink-0 rounded-2xl"
              style={{
                aspectRatio: "156/128",
                background: "url('/assets/intrapuskesmas.webp') no-repeat",
                backgroundSize: "1049.36% auto",
                backgroundPosition: "58.88% 90.87%",
                mixBlendMode: "multiply",
              }}
            />
            <span className="self-stretch w-px bg-slate-300 shrink-0" />
            <div>
              <span className="inline-block text-sm md:text-base font-extrabold text-g9 bg-green-100 rounded-full px-3 py-0.5">{"06"}</span>
              <h3 className="mt-1.5 text-lg md:text-[1.35rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
                {t("Koneksi Posyandu AI")}
              </h3>
              <p className="mt-1.5 text-[15px] md:text-base leading-snug text-[#1e2a3a]">
                {t("Data Posyandu terintegrasi ke Puskesmas melalui aplikasi kader.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
