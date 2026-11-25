"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function Ekosistem() {
  const { t } = useLang();

  return (
    <section id="s5" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2.5 text-base md:text-lg font-extrabold tracking-wide px-7 py-2 rounded-full bg-green-100 text-g9">
            <span className="w-2.5 h-2.5 rounded-full bg-[#16a316]" />
            {t("EKOSISTEM DIGITAL")}
          </span>
          <h2 className="mt-6 text-3xl md:text-[2.75rem] font-extrabold leading-[1.25] text-navy tracking-[-0.01em]">
            {t("Masalahnya bukan")} <span className="text-[#16a34a]">{t("kurangnya data.")}</span>
            <br />
            {t("Melainkan")} <span className="text-[#16a34a]">{t("fragmentasi")}</span> {t("antar sistem.")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#24406b]">
            {t(
              "Fasilitas kesehatan menghasilkan data dalam jumlah besar setiap hari, namun tetap tersebar di sistem-sistem yang tidak terhubung. Ini menciptakan silo, memperlambat pengambilan keputusan, dan menghambat pelayanan pasien yang optimal.",
            )}
          </p>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-mint/30 shadow-[0_6px_24px_rgba(15,23,42,.06)] px-3 md:px-5 pt-5 pb-7">
          <div className="text-center">
            <span className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-[#0b5d2e] via-[#0e6b34] to-[#0b5d2e] text-white pl-12 pr-10 py-2 text-lg md:text-2xl font-semibold shadow-md">
              <span
                aria-hidden="true"
                className="block w-12 md:w-14 shrink-0 rounded-lg"
                style={{
                  aspectRatio: "61/61",
                  background: "url('/assets/ekosistem.webp') no-repeat",
                  backgroundSize: "2716.39% auto",
                  backgroundPosition: "31.77% 44.03%",
                  mixBlendMode: "normal",
                }}
              />
              <span>
                {t("Ekosistem Kesehatan Digital")} <b className="font-extrabold">{t("Intramedika")}</b>
              </span>
            </span>
          </div>
          <div className="hidden lg:block relative h-12">
            <span className="absolute left-1/2 top-0 h-1/2 w-0.5 -translate-x-1/2 bg-[#16a316]" />
            <span className="absolute top-1/2 left-[6.25%] right-[6.25%] h-0.5 bg-[#16a316] rounded" />
            <div className="absolute inset-x-0 top-1/2 bottom-0 grid grid-cols-8">
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
              <div className="relative">
                <span className="absolute left-1/2 top-0 bottom-1.5 w-0.5 -translate-x-1/2 bg-[#16a316]" />
                <span className="absolute left-1/2 bottom-0 w-3 h-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#16a316]" />
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-2.5">
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "6.18% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Sistem", "s5")}
                <br />
                {t("Rumah Sakit", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("HIMS & EMR")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Manajemen Klinis")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Manajemen Sumber Daya")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "18.93% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Sistem", "s5")}
                <br />
                {t("Klinik", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Manajemen Rawat Jalan")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Pendaftaran & Antrian")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Penagihan & Pelaporan")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "31.56% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Sistem", "s5")}
                <br />
                {t("Puskesmas", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Manajemen Layanan Kesehatan Masyarakat")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Pelaporan & Surveilans")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Integrasi Program")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "44.05% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Sistem", "s5")}
                <br />
                {t("Posyandu", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Pendataan Ibu & Anak")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Pemantauan Tumbuh Kembang")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Edukasi & Imunisasi")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "56.54% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Aplikasi", "s5")}
                <br />
                {t("Dokter", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Manajemen Pasien")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Konsultasi & Catatan")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("e-Resep & Tindak Lanjut")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "68.90% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Layanan", "s5")}
                <br />
                {t("Pasien", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Portal Pasien")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Telekonsultasi")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Rekam Medis & Pengingat")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "81.20% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("Kesiapan", "s5")}
                <br />
                {t("Integrasi", "s5")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Standar HL7 / FHIR")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Arsitektur API-First")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Integrasi EHR & Pihak Ketiga")}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-mint/60 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-lg transition">
              <div className="px-2 pt-3">
                <span
                  aria-hidden="true"
                  className="block w-full max-w-[140px] mx-auto"
                  style={{
                    aspectRatio: "136/88",
                    background: "url('/assets/ekosistem.webp') no-repeat",
                    backgroundSize: "1218.38% auto",
                    backgroundPosition: "93.75% 59.47%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
              <h3 className="mt-1 text-center text-lg xl:text-[1.2rem] font-extrabold text-navy leading-tight">
                {t("AI / Data")}
                <br />
                {t("& Cloud")}
              </h3>
              <ul className="mt-3 flex-1 bg-mint/70 rounded-t-xl px-2 py-3 space-y-2 text-[12px] leading-snug text-navy">
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("AI & Analitik")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Kecerdasan Data")}</span>
                </li>
                <li className="flex gap-1">
                  <Icon name="check" className="w-3.5 h-3.5 mt-px shrink-0 text-[#16a316] stroke-[3]" />
                  <span>{t("Infrastruktur Cloud yang Aman")}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 mx-auto max-w-6xl rounded-[2rem] border-2 border-[#9fdc9f] bg-white px-6 py-4 grid sm:grid-cols-2 lg:flex lg:justify-between items-center gap-4 lg:gap-5">
            <div className="flex items-center justify-center gap-4">
              <Icon name="layers" className="w-11 h-11 text-[#16a316] shrink-0" />
              <b className="text-lg xl:text-xl font-extrabold text-navy leading-tight whitespace-nowrap">
                {t("Satu Ekosistem", "s5")}
                <br />
                {t("Terintegrasi", "s5")}
              </b>
            </div>
            <span className="hidden lg:block w-0.5 h-10 bg-[#16a316]/70" />
            <div className="flex items-center justify-center gap-4">
              <Icon name="shield-check" className="w-11 h-11 text-[#16a316] shrink-0" />
              <b className="text-lg xl:text-xl font-extrabold text-navy leading-tight whitespace-nowrap">
                {t("Data Aman", "s5")}
                <br />
                {t("dan Tervalidasi", "s5")}
              </b>
            </div>
            <span className="hidden lg:block w-0.5 h-10 bg-[#16a316]/70" />
            <div className="flex items-center justify-center gap-4">
              <Icon name="zap" className="w-11 h-11 text-[#16a316] shrink-0" />
              <b className="text-lg xl:text-xl font-extrabold text-navy leading-tight whitespace-nowrap">
                {t("Sinkronisasi", "s5")}
                <br />
                {t("Real-time", "s5")}
              </b>
            </div>
            <span className="hidden lg:block w-0.5 h-10 bg-[#16a316]/70" />
            <div className="flex items-center justify-center gap-4">
              <Icon name="users" className="w-11 h-11 text-[#16a316] shrink-0" />
              <b className="text-lg xl:text-xl font-extrabold text-navy leading-tight whitespace-nowrap">
                {t("Meningkatkan Kualitas", "s5")}
                <br />
                {t("Layanan Kesehatan", "s5")}
              </b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
