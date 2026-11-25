"use client";

import { useLang } from "@/lib/i18n";

export default function Faq() {
  const { t } = useLang();

  return (
    <section id="faq" className="bg-gradient-to-b from-white via-mint/30 to-white">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block text-sm md:text-base font-extrabold tracking-wide px-6 py-1.5 rounded-full bg-green-100 text-g9 border border-g6/30">
            {t("F.A.Q")}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-[#1d2b6b] tracking-tight">{t("Pertanyaan yang Sering Diajukan")}</h2>
        </div>
        <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Berapa lama proses implementasi?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Tergantung skala dan kompleksitas — IntraClinic dapat berjalan dalam 1–2 minggu, IntraHospital umumnya 3–6 bulan dengan onboarding penuh.",
              )}
            </p>
          </article>
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Apakah Intramedika mendukung BPJS Kesehatan?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Ya, seluruh produk kami terintegrasi dengan sistem BPJS Kesehatan — dari verifikasi eligibilitas, manajemen rujukan, hingga pengajuan klaim otomatis.",
              )}
            </p>
          </article>
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Apakah data pasien aman?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Keamanan data adalah prioritas utama kami. Semua data dienkripsi AES-256, disimpan di Oracle Cloud region Indonesia, dengan audit trail lengkap.",
              )}
            </p>
          </article>
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Apakah ada biaya per pengguna?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Model harga kami fleksibel — ada opsi berlangganan, lisensi permanen, dan model per modul. Tim kami akan menyusun proposal yang sesuai anggaran Anda.",
              )}
            </p>
          </article>
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Apakah bisa disesuaikan dengan kebutuhan kami?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Tentu. Platform Intramedika dibangun modular — kami dapat menyesuaikan alur kerja, integrasi, dan fitur khusus sesuai kebutuhan unik fasilitas Anda.",
              )}
            </p>
          </article>
          <article className="card p-6 md:p-7">
            <h3 className="font-extrabold text-navy text-[17px] leading-snug">{t("Bagaimana proses migrasi data dari sistem lama?")}</h3>
            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed">
              {t(
                "Tim implementasi kami berpengalaman dalam migrasi data dari berbagai sistem lama. Kami menyediakan perangkat dan dukungan penuh untuk memastikan data tidak hilang.",
              )}
            </p>
          </article>
        </div>
        <p className="mt-10 text-center text-slate-500">
          {t("Punya pertanyaan lain?")}{" "}
          <a
            href="mailto:inquiry@intramedika.co.id?subject=Pertanyaan%20tentang%20Intramedika"
            className="font-bold text-[#1f5fd0] hover:underline"
          >
            {t("Email kami langsung →")}
          </a>
        </p>
      </div>
    </section>
  );
}
