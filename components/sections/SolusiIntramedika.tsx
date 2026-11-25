"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function SolusiIntramedika() {
  const { t } = useLang();
  const { openContact } = useModal();

  return (
    <section id="s3" className="">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-[1.08fr_1fr] gap-10 items-center">
          <div>
            <span className="inline-block text-sm md:text-base font-extrabold tracking-wide px-5 py-2 rounded-full bg-green-100 text-g9">
              {t("SOLUSI INTRAMEDIKA")}
            </span>
            <h2 className="mt-6 text-3xl md:text-[2.5rem] lg:text-[2.05rem] xl:text-[2.45rem] font-extrabold leading-[1.18] tracking-[-0.02em]">
              <span className="text-navy">{t("Lebih dari sekadar software.")}</span>
              <br />
              <span className="text-[#16a316]">{t("Fondasi yang terhubung")}</span>
              <br />
              <span className="text-navy">{t("untuk transformasi layanan kesehatan.")}</span>
            </h2>
            <div className="mt-6 w-32 h-1.5 rounded-full bg-[#16a316]" />
            <p className="mt-6 text-[17px] leading-relaxed text-[#1e2a3a]">
              {t(
                "INTRAMEDIKA membangun ekosistem digital kesehatan next generation di Indonesia dengan menghubungkan sarana kesehatan secara utuh. Lebih dari sekadar software, kami menghadirkan fondasi yang andal, interoperabel, dan siap mendukung pelayanan kesehatan yang lebih cerdas, efisien, dan terjangkau.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <a
                href="#kontak"
                className="inline-flex items-center gap-3 px-11 py-4 rounded-full font-bold text-lg text-white bg-[#0e8a1e] shadow-lg hover:bg-g9 transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
              >
                {t("Minta Demo")} <Icon name="arrow-right" className="w-5 h-5" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center px-12 py-4 rounded-full font-bold text-lg text-[#0e8a1e] border-2 border-[#16a316] hover:bg-mint transition"
                onClick={(e) => {
                  e.preventDefault();
                  openContact();
                }}
              >
                {t("Hubungi Tim Penjualan")}
              </a>
            </div>
          </div>
          <div
            role="img"
            aria-label={t(
              "Dashboard Intramedika di laptop: pasien aktif, kunjungan hari ini, tingkat layanan, grafik, dan aktivitas terbaru",
            )}
          >
            <span
              aria-hidden="true"
              className="block w-full"
              style={{
                aspectRatio: "795/535",
                background: "url('/assets/solusi.webp') no-repeat",
                backgroundSize: "199.37% auto",
                backgroundPosition: "96.84% 8.75%",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="card !rounded-2xl p-7">
            <span
              aria-hidden="true"
              className="block w-[84px]"
              style={{
                aspectRatio: "96/88",
                background: "url('/assets/solusi.webp') no-repeat",
                backgroundSize: "1651.04% auto",
                backgroundPosition: "5.51% 66.37%",
                mixBlendMode: "multiply",
              }}
            />
            <h3 className="mt-4 text-xl xl:text-[1.4rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
              {t("01 Operasional Terintegrasi")}
            </h3>
            <p className="mt-4 text-lg leading-snug text-[#1e2a3a]">
              {t("Sistem operasional klinis, administratif, dan manajerial dalam satu platform yang terhubung.")}
            </p>
          </div>
          <div className="card !rounded-2xl p-7">
            <span
              aria-hidden="true"
              className="block w-[84px]"
              style={{
                aspectRatio: "96/88",
                background: "url('/assets/solusi.webp') no-repeat",
                backgroundSize: "1651.04% auto",
                backgroundPosition: "31.16% 66.37%",
                mixBlendMode: "multiply",
              }}
            />
            <h3 className="mt-4 text-xl xl:text-[1.4rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
              {t("02 Layanan Berpusat pada Pasien")}
            </h3>
            <p className="mt-4 text-lg leading-snug text-[#1e2a3a]">
              {t("Platform digital yang menyederhanakan layanan pasien dan meningkatkan pengalaman berobat.")}
            </p>
          </div>
          <div className="card !rounded-2xl p-7">
            <span
              aria-hidden="true"
              className="block w-[84px]"
              style={{
                aspectRatio: "96/88",
                background: "url('/assets/solusi.webp') no-repeat",
                backgroundSize: "1651.04% auto",
                backgroundPosition: "56.28% 66.37%",
                mixBlendMode: "multiply",
              }}
            />
            <h3 className="mt-4 text-xl xl:text-[1.4rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
              {t("03 Kecerdasan Siap AI")}
            </h3>
            <p className="mt-4 text-lg leading-snug text-[#1e2a3a]">
              {t(
                "Manfaatkan AI dan analitik untuk mengolah data menjadi insight yang dapat mendukung pengambilan keputusan berbasis data.",
              )}
            </p>
          </div>
          <div className="card !rounded-2xl p-7">
            <span
              aria-hidden="true"
              className="block w-[84px]"
              style={{
                aspectRatio: "96/88",
                background: "url('/assets/solusi.webp') no-repeat",
                backgroundSize: "1651.04% auto",
                backgroundPosition: "81.80% 66.37%",
                mixBlendMode: "multiply",
              }}
            />
            <h3 className="mt-4 text-xl xl:text-[1.4rem] font-extrabold text-navy leading-tight tracking-[-0.01em]">
              {t("04 Fondasi Siap Cloud")}
            </h3>
            <p className="mt-4 text-lg leading-snug text-[#1e2a3a]">
              {t("Dibangun dengan AI dan arsitektur cloud yang aman, mudah dikembangkan, dan siap mendukung ekspansi masa depan.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
