"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";

export default function PengalamanPasien() {
  const { t } = useLang();

  return (
    <section id="s11" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-block text-sm md:text-base font-extrabold tracking-wide px-5 py-1.5 rounded-full bg-green-100 text-g9">
              {t("PENGALAMAN PASIEN")}
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-[2.3rem] xl:text-[2.65rem] font-extrabold leading-[1.1]"
              style={{ fontFamily: "Georgia,'Times New Roman',serif" }}
            >
              <span className="text-navy">{t("Pengalaman digital yang lebih baik")}</span>
              <br />
              <span className="text-g9">{t("di sepanjang perjalanan pasien.")}</span>
            </h2>
            <p className="mt-5 text-lg text-slate-600">
              {t(
                "Kami menempatkan pasien sebagai pusat melalui layanan digital terhubung yang membuat layanan kesehatan lebih mudah diakses, personal, dan berkelanjutan.",
              )}
            </p>
            <h3 className="mt-8 border-l-4 border-g9 pl-5 text-2xl font-extrabold text-navy">{t("PASIEN SEBAGAI PUSAT")}</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-5 rounded-full bg-slate-100 pr-5">
                <span className="w-10 h-10 rounded-full bg-gradient-to-b from-g6 to-g9 text-white font-bold grid place-items-center shrink-0 shadow ring-4 ring-white">
                  {"1"}
                </span>
                <span className="text-slate-800">{t("Satu pasien. Satu rekam medis. Perawatan terhubung.")}</span>
              </div>
              <div className="flex items-center gap-5 rounded-full bg-slate-100 pr-5">
                <span className="w-10 h-10 rounded-full bg-gradient-to-b from-g6 to-g9 text-white font-bold grid place-items-center shrink-0 shadow ring-4 ring-white">
                  {"2"}
                </span>
                <span className="text-slate-800">{t("Kolaborasi yang mulus untuk hasil perawatan yang lebih baik.")}</span>
              </div>
              <div className="flex items-center gap-5 rounded-full bg-slate-100 pr-5">
                <span className="w-10 h-10 rounded-full bg-gradient-to-b from-g6 to-g9 text-white font-bold grid place-items-center shrink-0 shadow ring-4 ring-white">
                  {"3"}
                </span>
                <span className="text-slate-800">{t("Kesehatan Anda, di tangan Anda.")}</span>
              </div>
            </div>
          </div>
          <div
            role="img"
            aria-label={t(
              "Pasien di pusat perawatan: Primary Care, Specialist Care, Nursing Care, Pharmacy Care, dan Allied Health saling terhubung.",
            )}
          >
            <span
              aria-hidden="true"
              className="inline-block shrink-0 "
              style={{
                width: "100%",
                aspectRatio: "885/485",
                background: "url('/assets/patient-experience.webp') no-repeat",
                backgroundSize: "191.64% auto",
                backgroundPosition: "92.73% 3.39%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-[0.75fr_1.2fr_1.1fr] gap-5 mt-12">
          <div className="card overflow-hidden flex flex-col bg-gradient-to-b from-white to-mint p-6 pb-0">
            <h3 className="text-xl font-extrabold text-navy tracking-tight">{t("PORTAL PASIEN — INTRADOC")}</h3>
            <p className="mt-1 text-slate-600">{t("Kesehatan Anda, di tangan Anda.")}</p>
            <div className="mt-auto pt-6 flex justify-center">
              <div className="w-full max-w-[300px]">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 "
                  style={{
                    width: "100%",
                    aspectRatio: "300/290",
                    background: "url('/assets/patient-experience.webp') no-repeat",
                    backgroundSize: "565.33% auto",
                    backgroundPosition: "7.02% 97.02%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card p-6 flex flex-col">
            <h3 className="text-xl font-extrabold text-navy tracking-tight">{t("KELANJUTAN PASCA PULANG")}</h3>
            <p className="mt-1 text-slate-600">{t("Perawatan setelah pasien pulang, didukung oleh EHR.")}</p>
            <div className="mt-5 flex gap-3 items-center flex-1">
              <div className="space-y-2.5 flex-1 relative z-10">
                <div className="flex items-center gap-3 rounded-xl bg-white shadow-sm border border-slate-100 pr-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "44px",
                      aspectRatio: "54/50",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "3140.74% auto",
                      backgroundPosition: "31.55% 70.70%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Pengingat tindak lanjut dan instruksi perawatan otomatis")}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white shadow-sm border border-slate-100 pr-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "44px",
                      aspectRatio: "54/50",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "3140.74% auto",
                      backgroundPosition: "31.55% 76.40%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Pemantauan jarak jauh tanda vital dan progres pemulihan")}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white shadow-sm border border-slate-100 pr-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "44px",
                      aspectRatio: "54/52",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "3140.74% auto",
                      backgroundPosition: "31.55% 82.51%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Pesan aman dengan tim perawatan untuk panduan dan ketenangan")}
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-white shadow-sm border border-slate-100 pr-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "44px",
                      aspectRatio: "54/54",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "3140.74% auto",
                      backgroundPosition: "31.55% 88.66%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Rencana perawatan dan kepatuhan obat terpantau secara real-time")}
                  </span>
                </div>
              </div>
              <div className="hidden sm:block w-[34%] shrink-0 rounded-xl overflow-hidden leading-[0]">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 "
                  style={{
                    width: "100%",
                    aspectRatio: "250/245",
                    background: "url('/assets/patient-experience.webp') no-repeat",
                    backgroundSize: "678.40% auto",
                    backgroundPosition: "56.57% 87.98%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-xl bg-gradient-to-r from-g9 to-g6 text-white px-5 py-3 font-semibold text-sm">
              <Icon name="heart-pulse" className="w-7 h-7 shrink-0" />
              {t("Pemulihan lebih baik. Rawat inap ulang lebih sedikit. Masyarakat lebih sehat.")}
            </div>
          </div>
          <div className="card p-6 flex flex-col">
            <h3 className="text-xl font-extrabold text-navy tracking-tight">{t("DATA TERPERCAYA. PRIVASI TERLINDUNGI.")}</h3>
            <p className="mt-1 text-slate-600">{t("Kami menjaga data setiap pasien dengan standar keamanan tertinggi.")}</p>
            <div className="mt-5 flex gap-3 items-center flex-1">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "46px",
                      aspectRatio: "60/56",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "2826.67% auto",
                      backgroundPosition: "68.46% 70.38%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Enkripsi end-to-end untuk data saat dikirim maupun disimpan")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "46px",
                      aspectRatio: "60/56",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "2826.67% auto",
                      backgroundPosition: "68.46% 77.04%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Kontrol akses berbasis peran dan prinsip hak akses minimum")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "46px",
                      aspectRatio: "60/55",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "2826.67% auto",
                      backgroundPosition: "68.46% 83.49%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Kepatuhan terhadap regulasi nasional dan standar global (ISO, selaras GDPR)")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-block shrink-0 "
                    style={{
                      height: "46px",
                      aspectRatio: "60/56",
                      background: "url('/assets/patient-experience.webp') no-repeat",
                      backgroundSize: "2826.67% auto",
                      backgroundPosition: "68.46% 90.24%",
                      mixBlendMode: "multiply",
                    }}
                  />
                  <span className="text-sm text-slate-700 leading-snug">
                    {t("Persetujuan yang transparan dan kendali pasien atas datanya")}
                  </span>
                </div>
              </div>
              <div className="hidden sm:block w-[38%] shrink-0">
                <span
                  aria-hidden="true"
                  className="inline-block shrink-0 "
                  style={{
                    width: "100%",
                    aspectRatio: "208/235",
                    background: "url('/assets/patient-experience.webp') no-repeat",
                    backgroundSize: "815.38% auto",
                    backgroundPosition: "94.89% 87.43%",
                    mixBlendMode: "multiply",
                  }}
                />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-xl bg-gradient-to-r from-g9 to-g6 text-white px-5 py-3 font-semibold text-sm">
              <Icon name="shield-check" className="w-7 h-7 shrink-0" />
              {t("Data Anda aman. Kepercayaan Anda prioritas kami.")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
