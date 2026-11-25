"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function IntraClinicModal() {
  const { t } = useLang();
  const { openContact, closeModal } = useModal();

  return (
    <Modal
      id="m-intraclinic"
      aria-label={t("IntraClinic")}
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
              {t("INTRACLINIC")}
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-[1.08] tracking-[-0.02em]">
              <span className="text-navy">{t("Sistem Informasi &")}</span>
              <br />
              <span className="text-[#16a316]">{t("Manajemen Klinik")}</span>
            </h2>
            <div className="mt-3 w-2/3 h-1 rounded-full bg-gradient-to-r from-[#16a316] to-green-200" />
            <p className="mt-4 text-lg leading-snug text-navy">
              {t(
                "IntraClinic menghadirkan solusi manajemen klinik yang mudah digunakan namun andal — mengintegrasikan pendaftaran pasien, rekam medis digital, billing, dan analitik bisnis dalam satu platform yang aman dan terintegrasi.",
              )}
            </p>
            <div className="mt-4">
              <ul className="space-y-2 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Dapat diandalkan dalam berbagai jenis layanan — tidak perlu kustomisasi IT besar.")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Dirancang untuk pengguna Indonesia, mudah digunakan oleh seluruh tim klinik.")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Diandalkan dan telah sesuai dengan regulasi layanan kesehatan.")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Integrasi penuh dengan BPJS Kesehatan dan sistem asuransi swasta.")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16a316] text-white grid place-items-center shrink-0 mt-px">
                    <Icon name="check" className="w-3 h-3 stroke-[3.5]" />
                  </span>
                  <span>{t("Keamanan data sesuai standar perlindungan data pasien.")}</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#0b5d2e] to-[#16a316] shadow-md hover:shadow-lg transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact("IntraClinic");
                }}
              >
                {t("Minta Demo")} <Icon name="arrow-right" className="w-4 h-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-[#0b5d2e] border-2 border-[#16a316] hover:bg-mint transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact("IntraClinic");
                }}
              >
                {t("Hubungi Tim Penjualan")}
              </a>
            </div>
          </div>
          <div role="img" aria-label={t("Dashboard IntraClinic di laptop")}>
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "877/400",
                background: "url('/assets/pop-intraclinic.webp') no-repeat",
                backgroundSize: "181.41% auto",
                backgroundPosition: "100.00% 5.09%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="mt-8 grid lg:grid-cols-[2fr_auto_0.9fr] gap-6 items-center">
          <div>
            <div className="flex items-center gap-3">
              <Icon name="hospital" className="w-9 h-9 text-[#16a316]" />
              <h3 className="text-2xl md:text-3xl font-extrabold text-navy tracking-[-0.02em]">
                {t("Cocok untuk")} <span className="text-[#16a316]">{t("Tipe Klinik")}</span>
              </h3>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "58/54",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2743.10% auto",
                    backgroundPosition: "5.74% 56.90%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Pratama")}</b>
                  <span className="text-sm text-slate-700">{t("Layanan kesehatan umum")}</span>
                </div>
              </div>
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "58/54",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2743.10% auto",
                    backgroundPosition: "29.35% 56.90%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Spesialis")}</b>
                  <span className="text-sm text-slate-700">{t("Pengobatan spesialisasi")}</span>
                </div>
              </div>
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "56/56",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2841.07% auto",
                    backgroundPosition: "51.47% 57.02%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Gigi")}</b>
                  <span className="text-sm text-slate-700">{t("Perawatan gigi lengkap")}</span>
                </div>
              </div>
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "62/48",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2566.13% auto",
                    backgroundPosition: "5.49% 64.40%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Kecantikan")}</b>
                  <span className="text-sm text-slate-700">{t("Perawatan kulit & estetika")}</span>
                </div>
              </div>
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "62/52",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2566.13% auto",
                    backgroundPosition: "29.43% 64.46%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Ibu & Anak")}</b>
                  <span className="text-sm text-slate-700">{t("Ibu, bayi, dan anak")}</span>
                </div>
              </div>
              <div className="card !rounded-xl px-4 py-3 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="block w-11 shrink-0"
                  style={{
                    aspectRatio: "56/52",
                    background: "url('/assets/pop-intraclinic.webp') no-repeat",
                    backgroundSize: "2841.07% auto",
                    backgroundPosition: "51.47% 64.46%",
                    mixBlendMode: "multiply",
                  }}
                />
                <div>
                  <b className="block font-extrabold text-navy leading-tight">{t("Klinik Rehabilitasi")}</b>
                  <span className="text-sm text-slate-700">{t("Pemulihan & terapi kesehatan")}</span>
                </div>
              </div>
            </div>
          </div>
          <span className="hidden lg:block w-0.5 self-stretch bg-[#16a316]/60" />
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#16a316] to-[#0b5d2e] text-white p-6">
            <span aria-hidden="true" className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="relative flex gap-4">
              <Icon name="rocket" className="w-12 h-12 shrink-0" />
              <div>
                <b className="block text-2xl font-extrabold leading-tight">{t("Mudah dimulai, cepat berkembang.")}</b>
                <p className="mt-2 text-white/90">
                  {t("Kelola klinik lebih efisien, layani pasien lebih baik, dan kembangkan layanan kesehatan Anda dengan IntraClinic.")}
                </p>
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
              {t("Fitur Lengkap")} <span className="text-[#16a316]">{t("IntraClinic")}</span>
            </h3>
            <span className="hidden md:block flex-1 h-0.5 bg-[#16a316]/70 min-w-[60px]" />
            <p className="text-slate-700">{t("Semua yang dibutuhkan klinik modern dalam satu platform.")}</p>
          </div>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card !rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Icon name="users" className="w-9 h-9 text-[#16a316] shrink-0" />
                <b className="text-lg font-extrabold text-navy leading-tight">{t("PASIEN & JANJI TEMU")}</b>
              </div>
              <ul className="space-y-1.5 mt-4 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Registrasi pasien online & offline")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen jadwal dokter")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Antrean & layanan terintegrasi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Notifikasi & pengingat otomatis")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Riwayat kunjungan pasien")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Icon name="calendar-plus" className="w-9 h-9 text-[#16a316] shrink-0" />
                <b className="text-lg font-extrabold text-navy leading-tight">{t("REKAM KLINIS")}</b>
              </div>
              <ul className="space-y-1.5 mt-4 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Rekam medis elektronik (RME)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Catatan SOAP yang terstandar")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Hasil pemeriksaan & penunjang")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Resep elektronik (e-Resep)")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Riwayat tindakan & diagnosis pasien")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Icon name="database" className="w-9 h-9 text-[#16a316] shrink-0" />
                <b className="text-lg font-extrabold text-navy leading-tight">{t("PENAGIHAN & KEUANGAN")}</b>
              </div>
              <ul className="space-y-1.5 mt-4 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Kasir & penagihan layanan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Integrasi BPJS Kesehatan & asuransi")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Manajemen pembayaran & piutang")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Laporan keuangan otomatis")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Kontrol transaksi harian dan bulanan")}</span>
                </li>
              </ul>
            </div>
            <div className="card !rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <Icon name="chart-column" className="w-9 h-9 text-[#16a316] shrink-0" />
                <b className="text-lg font-extrabold text-navy leading-tight">{t("WAWASAN BISNIS")}</b>
              </div>
              <ul className="space-y-1.5 mt-4 text-[15px] leading-snug text-navy">
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Dashboard performa klinik")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Laporan kunjungan & pendapatan")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Analisis tren layanan & pasien")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Pemantauan operasional klinik")}</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#16a316] shrink-0 mt-1.5" />
                  <span>{t("Dukungan pengambilan keputusan")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
