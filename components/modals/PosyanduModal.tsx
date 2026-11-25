"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function PosyanduModal() {
  const { t } = useLang();
  const { closeModal } = useModal();

  return (
    <Modal
      id="m-posyandu"
      aria-label={t("Posyandu AI")}
      className="modal p-0 m-auto w-[calc(100%-1.5rem)] max-w-6xl max-h-[92vh] rounded-3xl bg-white shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 py-8 md:px-10 md:py-10">
        <button
          type="button"
          onClick={closeModal}
          aria-label={t("Tutup")}
          className="absolute z-20 top-4 right-4 md:top-5 md:right-5 w-11 h-11 rounded-full bg-green-100 text-g9 hover:bg-[#16a316] hover:text-white grid place-items-center transition outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          <Icon name="x" className="w-5 h-5" />
        </button>
        <div className="grid lg:grid-cols-[1.05fr_auto_1fr] gap-8 lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              {t("POSYANDU AI")}
            </span>
            <div className="mt-6 flex items-center gap-5 md:gap-7">
              <span
                aria-hidden="true"
                className="block w-24 md:w-36 shrink-0 rounded-3xl"
                style={{
                  aspectRatio: "168/176",
                  background: "url('/assets/pop-posyandu.webp') no-repeat",
                  backgroundSize: "974.40% auto",
                  backgroundPosition: "5.85% 20.41%",
                  mixBlendMode: "multiply",
                }}
              />
              <h2 className="text-4xl md:text-[3rem] font-extrabold text-navy leading-[1.05] tracking-[-0.03em]">
                {t("AI untuk Kader")}
                <br />{" "}
                <span className="relative inline-block">
                  {t("Posyandu")}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                    className="absolute left-0 -bottom-1.5 w-full h-2.5"
                  >
                    <path d="M2 7 C60 3 140 3 198 6" stroke="#16a316" strokeWidth="5" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>
            <p className="mt-8 text-lg md:text-xl leading-snug text-navy">
              {t(
                "Memberdayakan kader Posyandu dengan aplikasi mobile AI yang membantu deteksi stunting, pemantauan imunisasi, dan pemantauan tumbuh kembang balita — langsung terhubung ke Puskesmas.",
              )}
            </p>
            <ul className="mt-7 space-y-4 text-lg md:text-xl text-navy">
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0">
                  <Icon name="check" className="w-5 h-5 stroke-[3.5]" />
                </span>
                {t("Pengukuran antropometri dari foto berbantuan AI")}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0">
                  <Icon name="check" className="w-5 h-5 stroke-[3.5]" />
                </span>
                {t("Deteksi dini stunting & wasting otomatis")}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0">
                  <Icon name="check" className="w-5 h-5 stroke-[3.5]" />
                </span>
                {t("Jadwal imunisasi & pengingat otomatis")}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0">
                  <Icon name="check" className="w-5 h-5 stroke-[3.5]" />
                </span>
                {t("Laporan real-time ke Puskesmas & Dinkes")}
              </li>
              <li className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0">
                  <Icon name="check" className="w-5 h-5 stroke-[3.5]" />
                </span>
                {t("Bekerja offline di daerah minim sinyal")}
              </li>
            </ul>
          </div>
          <span className="hidden lg:block w-0.5 bg-[#4cc35a]" />
          <div className="space-y-5">
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 p-4 md:px-6 flex items-center gap-5 md:gap-6">
              <span
                aria-hidden="true"
                className="block w-24 md:w-28 shrink-0 rounded-2xl"
                style={{
                  aspectRatio: "144/122",
                  background: "url('/assets/pop-posyandu.webp') no-repeat",
                  backgroundSize: "1136.81% auto",
                  backgroundPosition: "64.03% 21.24%",
                  mixBlendMode: "multiply",
                }}
              />
              <span className="self-stretch w-px bg-slate-300" />
              <div>
                <b className="block text-4xl md:text-5xl font-extrabold text-[#16a316] tracking-[-0.02em]">{t("270M+")}</b>
                <span className="block mt-1 text-lg md:text-xl text-navy">{t("Penduduk Indonesia")}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 p-4 md:px-6 flex items-center gap-5 md:gap-6">
              <span
                aria-hidden="true"
                className="block w-24 md:w-28 shrink-0 rounded-2xl"
                style={{
                  aspectRatio: "144/122",
                  background: "url('/assets/pop-posyandu.webp') no-repeat",
                  backgroundSize: "1136.81% auto",
                  backgroundPosition: "64.03% 43.44%",
                  mixBlendMode: "multiply",
                }}
              />
              <span className="self-stretch w-px bg-slate-300" />
              <div>
                <b className="block text-4xl md:text-5xl font-extrabold text-[#16a316] tracking-[-0.02em]">{"10.000+"}</b>
                <span className="block mt-1 text-lg md:text-xl text-navy">{t("Puskesmas di Indonesia")}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 p-4 md:px-6 flex items-center gap-5 md:gap-6">
              <span
                aria-hidden="true"
                className="block w-24 md:w-28 shrink-0 rounded-2xl"
                style={{
                  aspectRatio: "144/120",
                  background: "url('/assets/pop-posyandu.webp') no-repeat",
                  backgroundSize: "1136.81% auto",
                  backgroundPosition: "64.03% 65.00%",
                  mixBlendMode: "multiply",
                }}
              />
              <span className="self-stretch w-px bg-slate-300" />
              <div>
                <b className="block text-4xl md:text-5xl font-extrabold text-[#16a316] tracking-[-0.02em]">{t("400K+")}</b>
                <span className="block mt-1 text-lg md:text-xl text-navy">{t("Posyandu aktif")}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-white to-mint/70 p-4 md:px-6 flex items-center gap-5 md:gap-6">
              <span
                aria-hidden="true"
                className="block w-24 md:w-28 shrink-0 rounded-2xl"
                style={{
                  aspectRatio: "144/120",
                  background: "url('/assets/pop-posyandu.webp') no-repeat",
                  backgroundSize: "1136.81% auto",
                  backgroundPosition: "64.03% 86.19%",
                  mixBlendMode: "multiply",
                }}
              />
              <span className="self-stretch w-px bg-slate-300" />
              <div>
                <b className="block text-4xl md:text-5xl font-extrabold text-[#16a316] tracking-[-0.02em]">{t("2.2M+")}</b>
                <span className="block mt-1 text-lg md:text-xl text-navy">{t("Kader Posyandu")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
