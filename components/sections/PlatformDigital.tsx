"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function PlatformDigital() {
  const { t } = useLang();
  const { openModal } = useModal();

  return (
    <section id="s9" className="bg-gradient-to-br from-white via-white to-mint/60">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[2fr_3fr] xl:grid-cols-[1fr_2.6fr] gap-8">
          <div className="lg:sticky lg:top-[7vw] self-start">
            <span className="inline-block text-sm font-extrabold tracking-wide px-5 py-2 rounded-full bg-green-100 text-g9">
              {t("SOLUSI PLATFORM DIGITAL")}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-extrabold text-navy leading-tight">
              {t("Satu Platform.")}
              <br />
              {t("Semua Pihak Terkait.")}
              <br />
              {t("Data Real-Time.")}
            </h2>
            <div className="mt-4 w-24 h-1.5 rounded-full bg-g6" />
            <p className="mt-4 text-slate-600">
              {t(
                "Platform digital Intramedika menyatukan seluruh ekosistem layanan kesehatan — dari pendaftaran pasien hingga pasien pulang — dalam satu tampilan terpadu.",
              )}
            </p>
            <p className="mt-6 text-sm font-extrabold text-g6 mb-3">{t("UNTUK SIAPA:")}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("RS (Rumah Sakit)")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("RS Tipe A, B, C, D")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("Klinik Pratama, Utama, Madya, Besar")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("Puskesmas")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("Posyandu")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("Klinik Spesialis")}</span>
              <span className="text-sm px-4 py-1.5 rounded-full bg-green-100 text-navy">{t("Lab Diagnostik")}</span>
            </div>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-lg font-bold text-white bg-gradient-to-r from-g9 to-g6 shadow-lg hover:shadow-xl transition"
            >
              {t("Lihat Produk")} <Icon name="arrow-right" className="w-5 h-5" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-28 bg-gradient-to-r from-mint via-mint/60 to-white flex items-center">
                <div className="relative z-10 flex items-center gap-3 pl-5 pr-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white shadow grid place-items-center text-g6 shrink-0">
                    <Icon name="hospital" className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-navy text-lg leading-tight">
                    {t("Platform Manajemen", "s9")}
                    <br />
                    {t("Rumah Sakit", "s9")}
                  </h3>
                </div>
                <div
                  className="relative self-stretch ml-auto flex-1 min-w-0 max-w-[155px] overflow-hidden hidden sm:block"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right,transparent,#000 22%)",
                    maskImage: "linear-gradient(to right,transparent,#000 22%)",
                  }}
                >
                  <div
                    className="absolute right-0 top-0 h-full"
                    style={{
                      aspectRatio: "213/154",
                      background: "url('/assets/platform-digital.webp') no-repeat",
                      backgroundSize: "832.86% auto",
                      backgroundPosition: "53.81% 6.28%",
                    }}
                    role="img"
                    aria-label=""
                  />
                </div>
              </div>
              <ul className="px-5 pt-4 space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("HIS & EMR terintegrasi end-to-end")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Manajemen OK (kamar operasi) per departemen")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Rekam pasien terpadu secara real-time")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("BPJS Kesehatan & asuransi terintegrasi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Manajemen sumber daya & penjadwalan cerdas")}</span>
                </li>
              </ul>
              <div className="mx-5 mt-4 py-3 border-t border-slate-200 text-right">
                <button
                  type="button"
                  onClick={() => openModal("m-hospital")}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-g6"
                >
                  {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-28 bg-gradient-to-r from-mint via-mint/60 to-white flex items-center">
                <div className="relative z-10 flex items-center gap-3 pl-5 pr-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white shadow grid place-items-center text-g6 shrink-0">
                    <Icon name="heart-handshake" className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-navy text-lg leading-tight">
                    {t("Platform Digital", "s9")}
                    <br />
                    {t("Klinik & Dokter", "s9")}
                  </h3>
                </div>
                <div
                  className="relative self-stretch ml-auto flex-1 min-w-0 max-w-[205px] overflow-hidden hidden sm:block"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right,transparent,#000 22%)",
                    maskImage: "linear-gradient(to right,transparent,#000 22%)",
                  }}
                >
                  <div
                    className="absolute right-0 top-0 h-full"
                    style={{
                      aspectRatio: "278/152",
                      background: "url('/assets/platform-digital.webp') no-repeat",
                      backgroundSize: "638.13% auto",
                      backgroundPosition: "96.93% 6.26%",
                    }}
                    role="img"
                    aria-label=""
                  />
                </div>
              </div>
              <ul className="px-5 pt-4 space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Manajemen janji temu & antrean digital")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("e-Resep & telekonsultasi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Portal pasien & aplikasi kesehatan mobile")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Manajemen penagihan & asuransi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Komunikasi dokter–pasien yang lancar")}</span>
                </li>
              </ul>
              <div className="mx-5 mt-4 py-3 border-t border-slate-200 text-right">
                <button
                  type="button"
                  onClick={() => openModal("m-intraclinic")}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-g6"
                >
                  {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-28 bg-gradient-to-r from-mint via-mint/60 to-white flex items-center">
                <div className="relative z-10 flex items-center gap-3 pl-5 pr-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white shadow grid place-items-center text-g6 shrink-0">
                    <Icon name="briefcase-medical" className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-navy text-lg leading-tight">
                    {t("IntraDoc –")}
                    <span className="block text-base">{t("Aplikasi Pasien & Dokter")}</span>
                  </h3>
                </div>
                <div
                  className="self-stretch ml-auto flex-1 min-w-0 max-w-[180px] hidden sm:block"
                  style={{
                    background: "url('/assets/intradoc-card.webp') center/cover no-repeat",
                    WebkitMaskImage: "linear-gradient(to right,transparent,#000 14%)",
                    maskImage: "linear-gradient(to right,transparent,#000 14%)",
                  }}
                  role="img"
                  aria-label=""
                />
              </div>
              <ul className="px-5 pt-4 space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Aplikasi mobile untuk pasien dan dokter")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Konsultasi online, rekam medis, dan e-resep")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Manajemen kesehatan pribadi yang terintegrasi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Terhubung dengan IntraHospital, IntraClinic, IntraPuskesmas")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Akses kapan pun dan di mana pun dalam satu aplikasi")}</span>
                </li>
              </ul>
              <div className="mx-5 mt-4 py-3 border-t border-slate-200 text-right">
                <button
                  type="button"
                  onClick={() => openModal("m-intradoc")}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-g6"
                >
                  {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="card overflow-hidden flex flex-col">
              <div className="relative h-28 bg-gradient-to-r from-mint via-mint/60 to-white flex items-center">
                <div className="relative z-10 flex items-center gap-3 pl-5 pr-3 shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white shadow grid place-items-center text-g6 shrink-0">
                    <Icon name="users" className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-navy text-lg leading-tight">
                    {t("Analitik Kohort &")}
                    <br />
                    {t("Riset Klinis AI")}
                  </h3>
                </div>
                <div
                  className="relative self-stretch ml-auto flex-1 min-w-0 max-w-[196px] overflow-hidden hidden sm:block"
                  style={{
                    WebkitMaskImage: "linear-gradient(to right,transparent,#000 22%)",
                    maskImage: "linear-gradient(to right,transparent,#000 22%)",
                  }}
                >
                  <div
                    className="absolute right-0 top-0 h-full"
                    style={{
                      aspectRatio: "238/136",
                      background: "url('/assets/platform-digital.webp') no-repeat",
                      backgroundSize: "745.38% auto",
                      backgroundPosition: "97.01% 59.12%",
                    }}
                    role="img"
                    aria-label=""
                  />
                </div>
              </div>
              <ul className="px-5 pt-4 space-y-2 text-sm text-slate-700 flex-1">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Membangun dan mengelola kohort pasien berbasis klinis")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Seleksi & pengelompokan data sesuai kriteria penelitian")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Analisis karakteristik, tren populasi, dan perjalanan klinis")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Mendukung riset klinis dan evaluasi luaran terapi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-g6 text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3" />
                  </span>
                  <span>{t("Data siap pakai untuk penelitian dan publikasi")}</span>
                </li>
              </ul>
              <div className="mx-5 mt-4 py-3 border-t border-slate-200 text-right">
                <button
                  type="button"
                  onClick={() => openModal("m-cohort")}
                  aria-haspopup="dialog"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-g6"
                >
                  {t("Lihat Detail")} <Icon name="arrow-right" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
