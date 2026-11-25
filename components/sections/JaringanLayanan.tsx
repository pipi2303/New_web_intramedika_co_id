"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function JaringanLayanan() {
  const { t } = useLang();
  const { openContact } = useModal();

  return (
    <section id="s7" className="overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-block text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-[#0b4a26]">
              {t("SOLUSI JARINGAN LAYANAN KESEHATAN")}
            </span>
            <h2 className="mt-4 text-3xl md:text-[2.7rem] font-extrabold text-navy leading-[1.15] tracking-[-0.02em]">
              {t("Transformasi Skala Grup Rumah", "s7")}
              <br className="hidden md:block" /> {t("Sakit & Jaringan", "s7")}{" "}
              <span className="relative inline-block">
                {t("Fasilitas", "s7")}
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
            <p className="mt-6 text-lg text-[#24406b]">
              {t(
                "Untuk grup rumah sakit, pusat medis akademik, dan jaringan fasilitas kesehatan yang membutuhkan tata kelola terpusat serta koordinasi antarunit yang mulus.",
              )}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <span className="text-lg font-extrabold text-[#0b4a26] pr-3 mr-1 border-r-2 border-slate-300">{t("UNTUK SIAPA")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("RS Pendidikan Universitas")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("RS Tipe A, B, C, D")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("RS Paripurna, Utama, Madya, Dasar")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("Puskesmas")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("Posyandu")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("Klinik Spesialis")}</span>
              <span className="text-[15px] px-4 py-2 rounded-full bg-green-100 text-navy">{t("Lab Diagnostik")}</span>
            </div>
            <a
              href="#kontak"
              className="mt-7 inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-lg font-bold text-white bg-[#0b5d2e] shadow-lg hover:bg-dk transition"
              onClick={(e) => {
                e.preventDefault();
                openContact();
              }}
            >
              {t("Hubungi Tim Enterprise")} <Icon name="arrow-right" className="w-5 h-5" />
            </a>
          </div>
          <div role="img" aria-label={t("Gedung rumah sakit modern dengan logo palang hijau")} className="lg:-mr-24 xl:-mr-32">
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "712/418",
                background: "url('/assets/network.webp') no-repeat",
                backgroundSize: "234.83% auto",
                backgroundPosition: "100.00% 7.65%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <div className="card !rounded-2xl p-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
              <span
                aria-hidden="true"
                className="block w-[72px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "88/78",
                  background: "url('/assets/network.webp') no-repeat",
                  backgroundSize: "1900.00% auto",
                  backgroundPosition: "3.91% 58.29%",
                  mixBlendMode: "multiply",
                }}
              />
              <h3 className="text-xl font-extrabold text-navy leading-tight tracking-[-0.01em]">{t("Manajemen Grup Rumah Sakit")}</h3>
            </div>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5">
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Tata kelola multi-lokasi & multi-entitas")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Manajemen master data & kebijakan terpusat")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Rujukan pasien & koordinasi perawatan lintas lokasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Pelaporan eksekutif terkonsolidasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Manajemen BPJS Kesehatan & asuransi tingkat grup")}</span>
              </li>
            </ul>
          </div>
          <div className="card !rounded-2xl p-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
              <span
                aria-hidden="true"
                className="block w-[72px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "86/78",
                  background: "url('/assets/network.webp') no-repeat",
                  backgroundSize: "1944.19% auto",
                  backgroundPosition: "29.38% 58.29%",
                  mixBlendMode: "multiply",
                }}
              />
              <h3 className="text-xl font-extrabold text-navy leading-tight tracking-[-0.01em]">{t("Pusat Medis Akademik")}</h3>
            </div>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5">
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Manajemen riset & studi klinis")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Clinical Cohort Builder untuk dataset riset")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Alur kerja komite etik terintegrasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Pemantauan pendidikan & pelatihan medis")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Publikasi riset & tata kelola data")}</span>
              </li>
            </ul>
          </div>
          <div className="card !rounded-2xl p-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
              <span
                aria-hidden="true"
                className="block w-[72px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "86/78",
                  background: "url('/assets/network.webp') no-repeat",
                  backgroundSize: "1944.19% auto",
                  backgroundPosition: "54.73% 58.29%",
                  mixBlendMode: "multiply",
                }}
              />
              <h3 className="text-xl font-extrabold text-navy leading-tight tracking-[-0.01em]">{t("Tata Kelola Data Enterprise")}</h3>
            </div>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5">
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Indeks Induk Pasien Enterprise (EMPI)")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Mesin kualitas data & kerangka validasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Arsitektur data lake HL7 FHIR R4")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Kueri terfederasi di seluruh lokasi")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Audit trail & reprodusibilitas riset")}</span>
              </li>
            </ul>
          </div>
          <div className="card !rounded-2xl p-5">
            <div className="flex items-center gap-4 pb-4 border-b border-slate-200">
              <span
                aria-hidden="true"
                className="block w-[72px] shrink-0 rounded-xl"
                style={{
                  aspectRatio: "86/78",
                  background: "url('/assets/network.webp') no-repeat",
                  backgroundSize: "1944.19% auto",
                  backgroundPosition: "80.08% 58.29%",
                  mixBlendMode: "multiply",
                }}
              />
              <h3 className="text-xl font-extrabold text-navy leading-tight tracking-[-0.01em]">{t("Keamanan & Kepatuhan Enterprise")}</h3>
            </div>
            <ul className="space-y-2.5 text-[15px] leading-snug text-navy mt-5">
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Isolasi multi-tenant & pemisahan data")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Manajemen identitas & akses terpusat")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Enkripsi & manajemen kunci kelas enterprise")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Operasional selaras SOC 2 / ISO 27001")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check" className="w-5 h-5 shrink-0 text-[#16a316] stroke-[3] mt-0.5" />
                <span>{t("Pelaporan kepatuhan regulasi otomatis")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
