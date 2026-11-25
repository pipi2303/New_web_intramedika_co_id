"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function HospitalModal() {
  const { t } = useLang();
  const { openContact, closeModal } = useModal();

  return (
    <Modal
      id="m-hospital"
      aria-label={t("Platform Manajemen Rumah Sakit")}
      className="modal p-0 m-auto w-[calc(100%-1.5rem)] max-w-7xl max-h-[92vh] rounded-3xl bg-white shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
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
        <div className="grid lg:grid-cols-[0.95fr_1.45fr] gap-8 items-start">
          <div>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              <Icon name="hospital" className="w-5 h-5" />
              {t("PLATFORM RUMAH SAKIT")}
            </span>
            <h2 className="mt-4 text-3xl md:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.02em]">
              <span className="text-navy">{t("Visibilitas eksekutif atas")}</span>
              <br />
              <span className="text-[#16a316]">{t("operasional rumah sakit")}</span>
              <br />
              <span className="text-navy">{t("dan kinerjanya.")}</span>
            </h2>
            <p className="mt-4 text-[15px] text-slate-700">
              {t(
                "KPI real-time, data terpadu, dan insight strategis yang memungkinkan eksekutif memantau operasional harian, memperkuat layanan klinis, dan mendorong perbaikan berkelanjutan. Platform ini menghimpun informasi utama dari unit klinis, administrasi, keuangan, dan operasional seperti BOR, pendapatan, kamar operasi, dan layanan pasien menjadi ringkasan yang jelas, terstruktur, dan siap untuk pengambilan keputusan.",
              )}
            </p>
            <p className="mt-3 text-[15px] text-slate-700">
              {t(
                "Dirancang untuk mendukung manajemen rumah sakit yang strategis dan berbasis data, platform ini membantu tim eksekutif dan pimpinan rumah sakit menilai kinerja dengan cepat, mengidentifikasi masalah, dan menetapkan prioritas yang tepat demi kualitas layanan yang lebih tinggi, efisiensi operasional, dan pertumbuhan berkelanjutan.",
              )}
            </p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-2 text-center">
                <Icon name="boxes" className="w-7 h-7 mx-auto text-[#16a316]" />
                <span className="block mt-1 text-[11px] font-bold leading-tight text-navy">{t("Manajemen Sumber Daya")}</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-2 text-center">
                <Icon name="settings" className="w-7 h-7 mx-auto text-[#16a316]" />
                <span className="block mt-1 text-[11px] font-bold leading-tight text-navy">{t("Layanan Klinis")}</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-2 text-center">
                <Icon name="users" className="w-7 h-7 mx-auto text-[#16a316]" />
                <span className="block mt-1 text-[11px] font-bold leading-tight text-navy">{t("Koordinasi Unit")}</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white shadow-sm p-2 text-center">
                <Icon name="database" className="w-7 h-7 mx-auto text-[#16a316]" />
                <span className="block mt-1 text-[11px] font-bold leading-tight text-navy">{t("Informasi Terintegrasi")}</span>
              </div>
            </div>
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            role="img"
            aria-label={t(
              "Dashboard KPI Departemen Rumah Sakit: kunjungan rawat inap, BOR, status operasional, kepatuhan layanan, dan indikator lainnya",
            )}
          >
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "711/375",
                background: "url('/assets/pop-hospital.webp') no-repeat",
                backgroundSize: "305.49% auto",
                backgroundPosition: "24.16% 5.73%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="card !rounded-2xl p-4 flex gap-4 items-start">
            <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16a316] to-[#0b5d2e] text-white grid place-items-center shrink-0">
              <Icon name="network" className="w-7 h-7" />
            </span>
            <div>
              <b className="block text-lg font-extrabold text-navy leading-tight">{t("Integrasi Departemen dan Sistem")}</b>
              <p className="mt-1 text-sm text-slate-700">
                {t(
                  "Menyatukan data dari berbagai departemen seperti layanan klinis, administrasi, keuangan, dan operasional dalam satu dasbor terpusat.",
                )}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl p-4 flex gap-4 items-start">
            <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16a316] to-[#0b5d2e] text-white grid place-items-center shrink-0">
              <Icon name="chart-column" className="w-7 h-7" />
            </span>
            <div>
              <b className="block text-lg font-extrabold text-navy leading-tight">{t("Pemantauan Kinerja Terkini dan Historis")}</b>
              <p className="mt-1 text-sm text-slate-700">
                {t(
                  "Memantau indikator operasional dan kinerja layanan secara real-time serta melihat tren historis untuk evaluasi berkelanjutan.",
                )}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl p-4 flex gap-4 items-start">
            <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16a316] to-[#0b5d2e] text-white grid place-items-center shrink-0">
              <Icon name="cloud-upload" className="w-7 h-7" />
            </span>
            <div>
              <b className="block text-lg font-extrabold text-navy leading-tight">{t("Pengambilan Keputusan Strategis")}</b>
              <p className="mt-1 text-sm text-slate-700">
                {t(
                  "Menyediakan insight yang akurat, ringkas, dan mudah dipahami untuk mendukung keputusan cepat, tepat, dan berbasis data.",
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-2 gap-6 items-center">
          <div
            className="card !rounded-2xl p-3"
            role="img"
            aria-label={t(
              "Rekam Pasien Terpadu: status pasien, riwayat medis, rencana perawatan, alergi, pemeriksaan, obat-obatan, billing, dan rujukan",
            )}
          >
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "570/198",
                background: "url('/assets/pop-hospital.webp') no-repeat",
                backgroundSize: "381.05% auto",
                backgroundPosition: "1.69% 93.92%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
          <div className="space-y-2.5">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-lg bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                <Icon name="user" className="w-6 h-6" />
              </span>
              <div>
                <b className="block font-extrabold text-[#0b5d2e]">{t("Satu Pasien")}</b>
                <p className="text-sm text-slate-700 leading-snug">
                  {t("Satu data pasien, terhubung lintas semua layanan di rumah sakit.")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-lg bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                <Icon name="clipboard-list" className="w-6 h-6" />
              </span>
              <div>
                <b className="block font-extrabold text-[#0b5d2e]">{t("Satu Rekam Medis")}</b>
                <p className="text-sm text-slate-700 leading-snug">
                  {t("Riwayat medis, tindakan, hasil pemeriksaan, dan rencana perawatan dalam satu rekam yang terintegrasi.")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-lg bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                <Icon name="users" className="w-6 h-6" />
              </span>
              <div>
                <b className="block font-extrabold text-[#0b5d2e]">{t("Banyak Kunjungan")}</b>
                <p className="text-sm text-slate-700 leading-snug">
                  {t("Mencatat seluruh episode layanan pasien, baik rawat jalan, rawat inap, IGD, maupun tindakan lainnya.")}
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 flex items-center gap-4">
              <span className="w-11 h-11 rounded-lg bg-green-100 text-[#16a316] grid place-items-center shrink-0">
                <Icon name="heart-handshake" className="w-6 h-6" />
              </span>
              <div>
                <b className="block font-extrabold text-[#0b5d2e]">{t("Kesinambungan Perawatan")}</b>
                <p className="text-sm text-slate-700 leading-snug">
                  {t("Memastikan layanan yang konsisten, aman, dan berkesinambungan di setiap tahap perawatan pasien.")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 border-t-2 border-dashed border-green-200" />
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-8 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              {t("INTRAHOSPITAL")}
            </span>
            <h2 className="mt-4 text-3xl md:text-[2.4rem] font-extrabold leading-[1.12] tracking-[-0.02em]">
              <span className="text-navy">{t("Sistem Informasi &")}</span>
              <br />
              <span className="text-[#0b5d2e]">{t("Manajemen Rumah Sakit")}</span>
            </h2>
            <p className="mt-4 text-[15px] text-slate-800">
              <b>{t("IntraHospital")}</b>{" "}
              {t(
                "adalah solusi kelas enterprise yang mengintegrasikan seluruh proses klinis, operasional, dan administrasi rumah sakit dalam satu platform cerdas berbasis Oracle Cloud. Dirancang memenuhi standar nasional SATUSEHAT, BPJS Kesehatan, dan HL7 FHIR R4.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#0b5d2e] to-[#16a316] shadow-md hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact("IntraHospital");
                }}
              >
                {t("Minta Demo")} <Icon name="arrow-right" className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[#0b5d2e] border-2 border-[#16a316] hover:bg-mint transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact("IntraHospital");
                }}
              >
                {t("Hubungi Tim Penjualan")}
              </a>
            </div>
          </div>
          <div role="img" aria-label={t("Dashboard IntraHospital di laptop")}>
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "620/255",
                background: "url('/assets/pop-hospital.webp') no-repeat",
                backgroundSize: "350.32% auto",
                backgroundPosition: "100.00% 2.35%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card !rounded-2xl px-4 py-3 flex items-center gap-4">
            <Icon name="layers" className="w-9 h-9 text-[#16a316] shrink-0" />
            <div>
              <b className="block text-xl font-extrabold text-navy leading-tight">{"60+"}</b>
              <span className="text-sm text-slate-700">{t("Modul Terintegrasi")}</span>
            </div>
          </div>
          <div className="card !rounded-2xl px-4 py-3 flex items-center gap-4">
            <Icon name="chart-column" className="w-9 h-9 text-[#16a316] shrink-0" />
            <div>
              <b className="block text-xl font-extrabold text-navy leading-tight">{t("Real-time")}</b>
              <span className="text-sm text-slate-700">{t("Dashboard KPI")}</span>
            </div>
          </div>
          <div className="card !rounded-2xl px-4 py-3 flex items-center gap-4">
            <Icon name="shield-check" className="w-9 h-9 text-[#16a316] shrink-0" />
            <div>
              <b className="block text-xl font-extrabold text-navy leading-tight">{"100%"}</b>
              <span className="text-sm text-slate-700">{t("Siap SATUSEHAT")}</span>
            </div>
          </div>
          <div className="card !rounded-2xl px-4 py-3 flex items-center gap-4">
            <Icon name="database" className="w-9 h-9 text-[#16a316] shrink-0" />
            <div>
              <b className="block text-xl font-extrabold text-navy leading-tight">{t("HL7 FHIR R4")}</b>
              <span className="text-sm text-slate-700">{t("Interoperabilitas")}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 grid lg:grid-cols-[1.75fr_1fr] gap-5">
          <div className="rounded-2xl bg-gradient-to-r from-[#0b5d2e] to-[#127a33] text-white p-5 grid sm:grid-cols-[auto_auto_1fr] gap-5 items-center">
            <div className="text-center">
              <b className="block text-2xl font-extrabold">{t("Cocok untuk")}</b>
              <div className="mt-2 w-28 mx-auto rounded-lg overflow-hidden">
                <span
                  aria-hidden="true"
                  className="block w-full"
                  style={{
                    aspectRatio: "120/72",
                    background: "url('/assets/pop-hospital.webp') no-repeat",
                    backgroundSize: "1810.00% auto",
                    backgroundPosition: "56.04% 56.75%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            <span className="hidden sm:block w-px self-stretch bg-white/40" />
            <ul className="space-y-2 text-[14px]">
              <li className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                </span>
                {t("Rumah Sakit Umum Daerah (RSUD) Tipe A, B, C, D")}
              </li>
              <li className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                </span>
                {t("Rumah Sakit Swasta — kelas menengah hingga premium")}
              </li>
              <li className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                </span>
                {t("Rumah Sakit Khusus (Ibu & Anak, Jantung, Orthopedi, dll.)")}
              </li>
              <li className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                </span>
                {t("Klinik dengan fasilitas rawat inap (Pratama/Utama)")}
              </li>
              <li className="flex gap-2.5">
                <span className="w-5 h-5 rounded-full bg-white text-[#0b5d2e] grid place-items-center shrink-0">
                  <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                </span>
                {t("Jaringan rumah sakit multinasional")}
              </li>
            </ul>
          </div>
          <div className="card !rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <Icon name="shield-check" className="w-8 h-8 text-[#16a316]" />
              <b className="text-xl font-extrabold text-navy">{t("Kepatuhan & Standar")}</b>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("Permenkes 24/2022")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("SATUSEHAT")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("BPJS Kesehatan")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("HL7 FHIR R4")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("XDS-I")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("SNOMED CT")}</span>
              <span className="px-3.5 py-1.5 rounded-full bg-green-100 text-sm font-semibold text-navy">{t("Oracle Cloud")}</span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="w-11 h-11 rounded-full bg-green-100 grid place-items-center text-[#16a316] shrink-0">
              <Icon name="layers" className="w-6 h-6" />
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy tracking-[-0.02em]">
              {t("Modul Lengkap")} <span className="text-[#16a316]">{t("IntraHospital")}</span>
            </h3>
            <span className="hidden md:block flex-1 h-0.5 bg-[#16a316]/70 min-w-[60px]" />
            <p className="text-slate-700">{t("Lebih dari 10 modul terintegrasi mencakup seluruh siklus operasional rumah sakit.")}</p>
          </div>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="card !rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Icon name="users" className="w-7 h-7 text-[#16a316] shrink-0" />
                <b className="font-extrabold text-navy leading-tight">{t("MANAJEMEN PASIEN")}</b>
              </div>
              <ul className="space-y-1.5 mt-3 text-[13px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Registrasi Pasien & Indeks Induk (PMI)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Rawat Jalan (OPD) & Rawat Inap (IPD)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Alur Kerja Instalasi Gawat Darurat (ED/IGD)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Rujukan & Koordinasi Perawatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Penjadwalan Pasien & Optimasi Antrean")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Icon name="building-2" className="w-7 h-7 text-[#16a316] shrink-0" />
                <b className="font-extrabold text-navy leading-tight">{t("SISTEM KLINIS")}</b>
              </div>
              <ul className="space-y-1.5 mt-3 text-[13px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Rekam Medis Elektronik (EMR/EHR)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Order Dokter & Perawat (CPOE)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pendukung Keputusan Klinis (CDS)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Kamar Operasi (OT)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Modul ICU & High Dependency Unit (HDU)")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Icon name="flask-conical" className="w-7 h-7 text-[#16a316] shrink-0" />
                <b className="font-extrabold text-navy leading-tight">{t("DIAGNOSTIK & FARMASI")}</b>
              </div>
              <ul className="space-y-1.5 mt-3 text-[13px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Integrasi Sistem Informasi Laboratorium (LIS)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Integrasi Radiologi & PACS")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Farmasi & Dispensing")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Bank Darah & Pelacakan Inventaris")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("e-Resep & Pemeriksaan Keamanan Obat")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Icon name="database" className="w-7 h-7 text-[#16a316] shrink-0" />
                <b className="font-extrabold text-navy leading-tight">{t("KEUANGAN & ADMINISTRASI")}</b>
              </div>
              <ul className="space-y-1.5 mt-3 text-[13px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Penagihan, Klaim & Siklus Pendapatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Integrasi Klaim BPJS Kesehatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Modul Buku Besar & Akuntansi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen SDM & Penggajian")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen Aset & Pengadaan")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-4">
              <div className="flex items-center gap-3">
                <Icon name="chart-column" className="w-7 h-7 text-[#16a316] shrink-0" />
                <b className="font-extrabold text-navy leading-tight">{t("ANALITIK & KEPATUHAN")}</b>
              </div>
              <ul className="space-y-1.5 mt-3 text-[13px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Dashboard KPI Eksekutif Real-time")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pengiriman Data SATUSEHAT")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pelaporan Regulasi & Audit Trail")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Indikator Mutu Klinis (CQI)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Business Intelligence & Laporan Kustom")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
