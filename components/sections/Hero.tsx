"use client";

import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import { useModal } from "@/components/ModalProvider";

export default function Hero() {
  const { t } = useLang();
  const { openContact } = useModal();

  return (
    <section id="beranda" className="relative overflow-hidden bg-[#dfeccf] lg:h-[62.55vw]">
      <div
        role="img"
        aria-label={t("Dokter berkonsultasi dengan pasien di ruang praktik modern bernuansa hijau")}
        className="absolute inset-0 hidden lg:block"
        style={{ background: "url('/assets/hero-bersih.webp') center/100% 100% no-repeat" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{ background: "url('/assets/hero-bersih.webp') 18% 50%/cover no-repeat", filter: "blur(3px)" }}
      />
      <div aria-hidden="true" className="absolute inset-0 lg:hidden bg-[#eef6e6]/55" />
      <div className="relative z-10 px-5 pt-28 pb-10 lg:p-0 lg:pl-[6.35vw] lg:pt-[14.55vw]">
        <h1 className="text-[2.6rem] md:text-6xl lg:text-[3.62vw] font-extrabold text-[#123b24] leading-[1.15] lg:leading-[4.2vw] tracking-[-0.01em]">
          {t("Memajukan", "beranda")}
          <br />
          <span className="text-[#16a34a]">{t("Masa Depan", "beranda")}</span>
          <br />
          {t("Kesehatan", "beranda")} <span className="text-[#16a34a]">{t("Digital")}</span>
          <br />
          {t("Indonesia", "beranda")}
        </h1>
        <p className="mt-5 lg:mt-[1.55vw] max-w-xl lg:max-w-[41vw] text-lg lg:text-[1.36vw] lg:leading-[2.07vw] font-bold text-[#163a26]">
          {t(
            "Platform ekosistem digital kesehatan terintegrasi — menghubungkan rumah sakit, klinik, puskesmas, posyandu, dokter, dan pasien melalui satu platform cerdas. Lokal dalam desain, global dalam standar.",
          )}
        </p>{" "}
        <a
          href="#kontak"
          className="mt-8 lg:mt-[4.85vw] inline-flex items-center gap-3 lg:gap-[1.5vw] px-6 py-3 lg:px-[1.3vw] lg:py-0 lg:h-[3.15vw] lg:px-[1.5vw] whitespace-nowrap rounded-full bg-[#0b5d2e] text-white font-bold text-base lg:text-[1.15vw] shadow-lg hover:bg-dk transition"
          onClick={(e) => {
            e.preventDefault();
            openContact();
          }}
        >
          {t("Jadwalkan Demo")} <Icon name="arrow-right" className="w-5 h-5 lg:w-[1.4vw] lg:h-[1.4vw]" />
        </a>{" "}
        <div className="mt-8 lg:mt-[2.05vw] flex flex-wrap gap-3 lg:gap-[1vw]">
          <div className="rounded-xl lg:rounded-[0.7vw] bg-[#0b5d2e] text-white pl-2 pr-4 py-2 lg:py-0 lg:h-[3.3vw] lg:pl-[0.6vw] lg:pr-[1.1vw] flex gap-3 lg:gap-[0.75vw] items-center shadow-md">
            <span
              aria-hidden="true"
              className="block w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full shrink-0"
              style={{
                background: "url('/assets/hero.webp') no-repeat",
                backgroundSize: "4405.56% auto",
                backgroundPosition: "6.97% 86.30%",
              }}
            />
            <div className="leading-tight">
              <b className="block text-sm lg:text-[0.83vw]">{t("BPJS Kesehatan")}</b>
              <span className="block text-xs lg:text-[0.72vw] text-white/90">{t("Terintegrasi Penuh")}</span>
            </div>
          </div>
          <div className="rounded-xl lg:rounded-[0.7vw] bg-[#0b5d2e] text-white pl-2 pr-4 py-2 lg:py-0 lg:h-[3.3vw] lg:pl-[0.6vw] lg:pr-[1.1vw] flex gap-3 lg:gap-[0.75vw] items-center shadow-md">
            <span
              aria-hidden="true"
              className="block w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full shrink-0"
              style={{
                background: "url('/assets/hero.webp') no-repeat",
                backgroundSize: "4405.56% auto",
                backgroundPosition: "19.16% 86.30%",
              }}
            />
            <div className="leading-tight">
              <b className="block text-sm lg:text-[0.83vw]">{t("SATUSEHAT")}</b>
              <span className="block text-xs lg:text-[0.72vw] text-white/90">{t("Terhubung ke Kemenkes RI")}</span>
            </div>
          </div>
          <div className="rounded-xl lg:rounded-[0.7vw] bg-[#0b5d2e] text-white pl-2 pr-4 py-2 lg:py-0 lg:h-[3.3vw] lg:pl-[0.6vw] lg:pr-[1.1vw] flex gap-3 lg:gap-[0.75vw] items-center shadow-md">
            <span
              aria-hidden="true"
              className="block w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full shrink-0"
              style={{
                background: "url('/assets/hero.webp') no-repeat",
                backgroundSize: "4405.56% auto",
                backgroundPosition: "31.68% 86.30%",
              }}
            />
            <div className="leading-tight">
              <b className="block text-sm lg:text-[0.83vw]">{t("PSE Kominfo")}</b>
              <span className="block text-xs lg:text-[0.72vw] text-white/90">{t("Terdaftar Resmi")}</span>
            </div>
          </div>
          <div className="rounded-xl lg:rounded-[0.7vw] bg-[#0b5d2e] text-white pl-2 pr-4 py-2 lg:py-0 lg:h-[3.3vw] lg:pl-[0.6vw] lg:pr-[1.1vw] flex gap-3 lg:gap-[0.75vw] items-center shadow-md">
            <span
              aria-hidden="true"
              className="block w-8 h-8 lg:w-[2.2vw] lg:h-[2.2vw] rounded-full shrink-0"
              style={{
                background: "url('/assets/hero.webp') no-repeat",
                backgroundSize: "4173.68% auto",
                backgroundPosition: "43.22% 86.48%",
              }}
            />
            <div className="leading-tight">
              <b className="block text-sm lg:text-[0.83vw]">{t("TTE")}</b>
              <span className="block text-xs lg:text-[0.72vw] text-white/90">{t("Tanda Tangan Digital")}</span>
            </div>
          </div>
        </div>
        <div
          role="img"
          aria-label={t("Dokter berkonsultasi dengan pasien")}
          className="lg:hidden mt-10 rounded-2xl overflow-hidden shadow-lg"
          style={{
            aspectRatio: "726/640",
            background: "url('/assets/hero-bersih.webp') no-repeat",
            backgroundSize: "218.46% auto",
            backgroundPosition: "100% 100%",
          }}
        />
      </div>
    </section>
  );
}
