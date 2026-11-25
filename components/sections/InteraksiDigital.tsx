"use client";

import { useLang } from "@/lib/i18n";
import { useModal } from "@/components/ModalProvider";

export default function InteraksiDigital() {
  const { t } = useLang();
  const { openContact } = useModal();

  return (
    <section id="s12" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.45fr_1fr] items-stretch gap-y-8">
          <div className="lg:pr-0">
            <div className="flex items-start">
              <span className="inline-flex items-center h-11 text-sm md:text-base font-extrabold tracking-wide px-6 rounded-full bg-green-100 text-g9 shrink-0">
                {t("MASA DEPAN LAYANAN KESEHATAN")}
              </span>
              <span className="hidden lg:block flex-1 ml-4 mt-[21px] border-t-2 border-g6" />
              <span className="hidden lg:block w-12 h-12 mt-[21px] border-t-2 border-r-2 border-g6 rounded-tr-[48px] shrink-0" />
            </div>
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-[2.3rem] xl:text-[2.8rem] font-extrabold leading-[1.15]">
              <span className="text-navy">{t("Interaksi Digital adalah")}</span>
              <br />
              <span className="text-g9">{t("Masa Depan Layanan Kesehatan.")}</span>
            </h2>
            <p className="mt-6 text-lg text-[#24406b] max-w-2xl">
              {t(
                "Dari telehealth dan portal pasien hingga pengingat personal dan pemantauan setelah pasien pulang — Intramedika menghubungkan pasien dan tenaga kesehatan di setiap titik, kapan pun dan di mana pun.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="inline-flex items-center px-10 py-4 rounded-full font-bold text-white bg-gradient-to-r from-g6 to-g9 shadow-lg hover:shadow-xl transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
              >
                {t("Jadwalkan Demo →")}
              </a>
              <a
                href="#"
                className="inline-flex items-center px-10 py-4 rounded-full font-bold text-g9 border-2 border-g9 hover:bg-mint transition"
              >
                {t("Lihat Cara Kerja")}
              </a>
            </div>
          </div>
          <div className="relative lg:pt-[69px]">
            <span className="hidden lg:block absolute left-0 top-[69px] bottom-0 right-6 border-l-2 border-b-2 border-g6 rounded-bl-[90px]" />
            <div className="lg:-mt-14 lg:pl-4 lg:pb-3 max-w-xl mx-auto">
              <span
                role="img"
                aria-label={t(
                  "Aplikasi Intramedika di laptop dan ponsel: telekonsultasi video dengan dokter, resep digital, hasil lab, dan riwayat kunjungan.",
                )}
                className="block w-full"
                style={{
                  aspectRatio: "598/472",
                  background: "url('/assets/interaksi-digital.webp') no-repeat",
                  backgroundSize: "279.60% auto",
                  backgroundPosition: "97.95% 5.97%",
                  mixBlendMode: "multiply",
                  WebkitMaskImage: "linear-gradient(to right,transparent,#000 9%)",
                  maskImage: "linear-gradient(to right,transparent,#000 9%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"01"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Pengalaman Pasien Omnichannel")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Satu pengalaman pasien yang konsisten — dari aplikasi mobile, portal web, hingga kios di faskes.")}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"02"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Telehealth HD & Perawatan Virtual")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Konsultasi video HD terenkripsi, chat real-time, dan layanan kesehatan virtual tanpa batas geografis.")}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"03"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Komunikasi Personal & Pengingat Cerdas")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Pengingat otomatis untuk jadwal, obat, dan tindak lanjut — dipersonalisasi sesuai profil kesehatan pasien.")}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"04"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Portal Swalayan & Aplikasi Mobile")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Pasien mengakses rekam medis, hasil lab, resep, dan riwayat kunjungan dari genggaman tangan.")}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"05"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Pemantauan Pasca-Pulang")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Pantau kondisi pasien setelah pulang — tanda vital, kepatuhan obat, dan peringatan otomatis untuk klinisi.")}
              </p>
            </div>
          </div>
          <div className="card !rounded-2xl bg-gradient-to-br from-white to-mint/70 p-6 flex items-center gap-5">
            <span className="text-4xl font-extrabold text-g9 shrink-0 w-14">{"06"}</span>
            <span className="self-stretch w-0.5 bg-g6/60 shrink-0" />
            <div>
              <h3 className="text-lg font-extrabold text-navy leading-snug">{t("Dorongan Perilaku & Kepatuhan")}</h3>
              <p className="mt-1.5 text-sm text-slate-700">
                {t("Intervensi berbasis data mendorong kepatuhan pengobatan dan gaya hidup sehat secara berkelanjutan.")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
