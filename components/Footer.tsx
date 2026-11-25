"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function Footer() {
  const { t } = useLang();
  const { openModal, openContact } = useModal();

  return (
    <footer id="footer" className="bg-[#053121] text-white/75">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {" "}
        <div className="relative -top-px pt-14">
          <div className="rounded-3xl bg-gradient-to-r from-[#0b5d2e] via-[#0e6b36] to-[#16a34a] px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-6 shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)] ring-1 ring-white/10">
            <div className="flex-1">
              <p className="text-xs font-extrabold tracking-[.18em] text-[#b9f5d4]">{t("MULAI TRANSFORMASI DIGITAL")}</p>
              <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                {t("Siap membawa pelayanan kesehatan ke level berikutnya?")}
              </h2>
              <p className="mt-2 text-white/80">
                {t("Jadwalkan demo gratis dan lihat bagaimana Intramedika menghubungkan seluruh layanan kesehatan Anda.")}
              </p>
            </div>
            <Link
              href="/#kontak"
              onClick={(e) => {
                e.preventDefault();
                openContact();
              }}
              className="self-start md:self-auto inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#0b5d2e] font-bold shadow-lg hover:bg-[#eaf7ee] transition whitespace-nowrap"
            >
              {t("Jadwalkan Demo")} <Icon name="arrow-right" className="w-5 h-5" />
            </Link>
          </div>
        </div>{" "}
        <div className="pt-14 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="INTRAMEDIKA"
              className="relative inline-block font-black italic text-3xl leading-none tracking-tight text-white pr-1"
            >
              INTRAMEDIKA
              <span className="absolute -top-[0.75em] left-[77%] w-[0.62em] h-[0.62em] rounded-[3px] rotate-12 bg-red-600 grid place-items-center not-italic">
                <svg
                  viewBox="0 0 24 24"
                  className="w-[75%] h-[75%]"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h4l3-7 4 14 3-7h4" />
                </svg>
              </span>
            </Link>{" "}
            <p className="mt-3 text-lg font-bold italic text-[#6ef2b7]">{t('"Innovating Health."')}</p>
            <p className="mt-3 text-[15px] leading-relaxed max-w-sm">
              {t(
                "Platform ekosistem digital kesehatan terintegrasi — menghubungkan rumah sakit, klinik, Puskesmas, Posyandu, dokter, dan pasien melalui satu platform cerdas.",
              )}
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              <li className="flex items-center gap-3">
                <Icon name="mail" className="w-4 h-4 text-[#6ef2b7] shrink-0" />
                <a href="mailto:inquiry@intramedika.co.id" className="hover:text-white transition">
                  {t("inquiry@intramedika.co.id")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="mail" className="w-4 h-4 text-[#6ef2b7] shrink-0" />
                <a href="mailto:sales@intramedika.co.id" className="hover:text-white transition">
                  {t("sales@intramedika.co.id")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="globe" className="w-4 h-4 text-[#6ef2b7] shrink-0" />
                <a href="https://www.intramedika.co.id" target="_blank" rel="noopener" className="hover:text-white transition">
                  {t("www.intramedika.co.id")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="map-pin" className="w-4 h-4 text-[#6ef2b7] shrink-0" />
                <span>{t("Jakarta · Bogor, Indonesia")}</span>
              </li>
            </ul>
          </div>
          <nav aria-label={t("Produk")}>
            <h3 className="text-sm font-extrabold tracking-[.16em] text-white">{t("PRODUK")}</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <button type="button" onClick={() => openModal("m-hospital")} className="fl">
                  {t("IntraHospital")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal("m-intraclinic")} className="fl">
                  {t("IntraClinic")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal("m-intradoc")} className="fl">
                  {t("IntraDoc")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal("m-puskesmas")} className="fl">
                  {t("IntraPuskesmas")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal("m-posyandu")} className="fl">
                  {t("Posyandu AI")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal("m-cohort")} className="fl">
                  {t("Clinical Cohort Builder")}
                </button>
              </li>
            </ul>
          </nav>
          <nav aria-label={t("Solusi")}>
            <h3 className="text-sm font-extrabold tracking-[.16em] text-white">{t("SOLUSI")}</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="/#s6" className="fl">
                  {t("Solusi AI")}
                </Link>
              </li>
              <li>
                <Link href="/#s7" className="fl">
                  {t("Jaringan Layanan Kesehatan")}
                </Link>
              </li>
              <li>
                <Link href="/#s8" className="fl">
                  {t("Solusi Pemerintah")}
                </Link>
              </li>
              <li>
                <Link href="/#s9" className="fl">
                  {t("Platform Digital")}
                </Link>
              </li>
              <li>
                <Link href="/#s4" className="fl">
                  {t("Interoperabilitas")}
                </Link>
              </li>
            </ul>
          </nav>
          <nav aria-label={t("Perusahaan")}>
            <h3 className="text-sm font-extrabold tracking-[.16em] text-white">{t("PERUSAHAAN")}</h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link href="/jajaran-direksi/" className="fl">
                  {t("Jajaran Direksi")}
                </Link>
              </li>
              <li>
                <Link href="/#s13" className="fl">
                  {t("Mengapa Intramedika")}
                </Link>
              </li>
              <li>
                <Link href="/#s5" className="fl">
                  {t("Ekosistem Digital")}
                </Link>
              </li>
              <li>
                <Link href="/#s11" className="fl">
                  {t("Pengalaman Pasien")}
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="fl">
                  {t("F.A.Q")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#kontak"
                  onClick={(e) => {
                    e.preventDefault();
                    openContact();
                  }}
                  className="fl"
                >
                  {t("Kontak")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>{" "}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-xs font-extrabold tracking-[.16em] text-white/60 shrink-0">{t("TERINTEGRASI & TERSTANDAR")}</span>
          <ul className="flex flex-wrap gap-2.5">
            <li className="fb">
              <Icon name="shield-check" className="w-4 h-4" />
              {t("BPJS Kesehatan")}
            </li>
            <li className="fb">
              <Icon name="link-2" className="w-4 h-4" />
              {t("SATUSEHAT")}
            </li>
            <li className="fb">
              <Icon name="badge-check" className="w-4 h-4" />
              {t("PSE Kominfo")}
            </li>
            <li className="fb">
              <Icon name="pen-line" className="w-4 h-4" />
              {t("TTE")}
            </li>
            <li className="fb">
              <Icon name="layers" className="w-4 h-4" />
              {t("HL7 FHIR R4")}
            </li>
          </ul>
        </div>{" "}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-white/55">
          <p>{t("© 2026 Intramedika. Hak cipta dilindungi.")}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 hover:text-white transition"
          >
            {t("Kembali ke atas")} <Icon name="arrow-up" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
