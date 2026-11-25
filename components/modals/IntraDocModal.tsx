"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function IntraDocModal() {
  const { t } = useLang();
  const { openContact, closeModal } = useModal();

  return (
    <Modal
      id="m-intradoc"
      aria-label={t("IntraDoc")}
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
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              <Icon name="file-plus-2" className="w-5 h-5" />
              {t("INTRADOC")}
            </span>
            <h2 className="mt-4 text-3xl md:text-[2.8rem] font-extrabold leading-[1.1] tracking-[-0.02em]">
              <span className="text-navy">{t("Dokter Personal Anda,")}</span>
              <br />
              <span className="relative inline-block text-[#0b5d2e]">
                {t("Selalu Terhubung.")}
                <span className="absolute left-0 -bottom-2 w-2/5 h-1 rounded-full bg-[#16a316]" />
              </span>
            </h2>
            <p className="mt-6 text-lg leading-snug text-navy">
              {t(
                "IntraDoc adalah aplikasi mobile yang menjembatani pasien dan dokter secara langsung — menghadirkan kemudahan konsultasi online, manajemen kesehatan pribadi, dan akses rekam medis kapan pun, di mana pun.",
              )}
            </p>
            <div className="mt-4">
              <ul className="space-y-2 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Tersedia untuk iOS & Android")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Data kesehatan terenkripsi end-to-end")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Terhubung dengan IntraHospital, IntraClinic, IntraPuskesmas, IntraPosyandu")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("HL7 FHIR R4 — portabilitas data penuh")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Siap SATUSEHAT — rekam medis terverifikasi")}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#0b5d2e] to-[#16a316] shadow-md hover:shadow-lg transition"
              >
                {t("Pelajari IntraDoc")} <Icon name="arrow-right" className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[#0b5d2e] border-2 border-[#16a316] hover:bg-mint transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact("IntraDoc");
                }}
              >
                {t("Minta Demo")} <Icon name="arrow-right" className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden" role="img" aria-label={t("Dokter dan pasien melihat aplikasi IntraDoc di tablet")}>
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "655/425",
                background: "url('/assets/pop-intradoc.webp') no-repeat",
                backgroundSize: "185.50% auto",
                backgroundPosition: "100.00% 0.00%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="inline-flex items-center gap-3 rounded-t-3xl bg-gradient-to-r from-[#0b5d2e] to-[#16a316] text-white pl-6 pr-14 py-3 text-xl md:text-2xl font-extrabold">
            <Icon name="file-plus-2" className="w-7 h-7" />
            {t("IntraDoc — Tampilan Pasien")}
          </div>
          <div className="rounded-3xl rounded-tl-none border-2 border-green-200 p-5 md:p-7 grid lg:grid-cols-[1.3fr_auto_1fr] gap-6 items-center">
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              role="img"
              aria-label={t(
                "Tampilan aplikasi pasien: janji temu, konsultasi, resep, lab, riwayat, laporan, SpO2 98%, detak jantung 72 bpm",
              )}
            >
              <span
                aria-hidden="true"
                className="block w-full"
                style={{
                  aspectRatio: "572/292",
                  background: "url('/assets/pop-intradoc.webp') no-repeat",
                  backgroundSize: "212.41% auto",
                  backgroundPosition: "15.55% 49.35%",
                  mixBlendMode: "normal",
                }}
              />
            </div>
            <span className="hidden lg:block w-0.5 self-stretch bg-[#16a316]/70" />
            <div className="divide-y divide-slate-200">
              <div className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                <span className="w-20 h-20 rounded-full bg-green-100 text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="user-round-plus" className="w-10 h-10" />
                </span>
                <div>
                  <b className="block text-3xl font-extrabold text-[#0b5d2e]">{t("Dokter")}</b>
                  <p className="mt-1 text-lg leading-snug text-navy">
                    {t("Kelola jadwal, catat SOAP, kirim e-resep — semua dari satu aplikasi.")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 py-5 first:pt-0 last:pb-0">
                <span className="w-20 h-20 rounded-full bg-green-100 text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="users" className="w-10 h-10" />
                </span>
                <div>
                  <b className="block text-3xl font-extrabold text-[#0b5d2e]">{t("Pasien")}</b>
                  <p className="mt-1 text-lg leading-snug text-navy">
                    {t("Booking janji temu, telemedisin, akses rekam medis, pantau kesehatan harian.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="w-11 h-11 rounded-full bg-green-100 grid place-items-center text-[#16a316] shrink-0">
              <Icon name="layers" className="w-6 h-6" />
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy tracking-[-0.02em]">
              {t("Fitur Lengkap")} <span className="text-[#16a316]">{t("IntraDoc")}</span>
            </h3>
            <span className="hidden md:block flex-1 h-0.5 bg-[#16a316]/70 min-w-[60px]" />
            <p className="text-slate-700">{t("Dua sisi, satu platform — untuk pasien dan dokter.")}</p>
          </div>
          <div className="mt-5 grid md:grid-cols-2 gap-5">
            <div className="card !rounded-2xl relative overflow-hidden p-5 pl-6">
              <span
                aria-hidden="true"
                className="absolute -top-10 right-0 w-1/2 h-40 rounded-bl-[100%] bg-gradient-to-bl from-green-100 to-transparent"
              />
              <div className="relative flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                  <Icon name="user" className="w-7 h-7" />
                </span>
                <b className="text-xl font-extrabold text-navy tracking-[-0.01em]">{t("PENGALAMAN PASIEN")}</b>
              </div>
              <ul className="space-y-1.5 relative mt-3 pl-[4.5rem] text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Booking Janji Temu via Mobile")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Konsultasi Dokter Online")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Telemedisin Video HD")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Registrasi & Check-in Digital")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pengingat Tindak Lanjut via Notifikasi")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl relative overflow-hidden p-5 pl-6">
              <span
                aria-hidden="true"
                className="absolute -top-10 right-0 w-1/2 h-40 rounded-bl-[100%] bg-gradient-to-bl from-green-100 to-transparent"
              />
              <div className="relative flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                  <Icon name="heart-pulse" className="w-7 h-7" />
                </span>
                <b className="text-xl font-extrabold text-navy tracking-[-0.01em]">{t("PEMANTAUAN KESEHATAN")}</b>
              </div>
              <ul className="space-y-1.5 relative mt-3 pl-[4.5rem] text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Akses Rekam Kesehatan Pribadi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pencatatan Tanda Vital & Kebugaran")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pengingat & Kepatuhan Minum Obat")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Lihat Hasil Lab & Radiologi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pemantauan Penyakit Kronis")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl relative overflow-hidden p-5 pl-6">
              <span
                aria-hidden="true"
                className="absolute -top-10 right-0 w-1/2 h-40 rounded-bl-[100%] bg-gradient-to-bl from-green-100 to-transparent"
              />
              <div className="relative flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                  <Icon name="stethoscope" className="w-7 h-7" />
                </span>
                <b className="text-xl font-extrabold text-navy tracking-[-0.01em]">{t("FITUR DOKTER")}</b>
              </div>
              <ul className="space-y-1.5 relative mt-3 pl-[4.5rem] text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Daftar Pasien & Manajemen Jadwal")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Catatan Konsultasi & Suara ke Catatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pembuatan e-Resep")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Otomatisasi Surat Rujukan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pesan Aman dengan Pasien")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl relative overflow-hidden p-5 pl-6">
              <span
                aria-hidden="true"
                className="absolute -top-10 right-0 w-1/2 h-40 rounded-bl-[100%] bg-gradient-to-bl from-green-100 to-transparent"
              />
              <div className="relative flex items-center gap-4">
                <span className="w-14 h-14 rounded-full bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                  <Icon name="settings" className="w-7 h-7" />
                </span>
                <b className="text-xl font-extrabold text-navy tracking-[-0.01em]">{t("INTEGRASI")}</b>
              </div>
              <ul className="space-y-1.5 relative mt-3 pl-[4.5rem] text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Sinkronisasi dengan IntraHospital & IntraClinic")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pertukaran Data Pasien SATUSEHAT")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Verifikasi Asuransi & BPJS Kesehatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Terhubung dengan Lab, Farmasi & Jaringan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Standar Data HL7 FHIR R4")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
