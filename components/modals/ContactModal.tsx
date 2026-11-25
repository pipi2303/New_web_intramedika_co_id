"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export default function ContactModal() {
  const { t } = useLang();
  const { closeModal } = useModal();
  const { openId, contactRequest } = useModal();
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const isOpen = openId === "m-kontak";

  // Isi otomatis "Produk yang Diminati" bila dibuka dari popup produk
  useEffect(() => {
    const f = formRef.current;
    if (!f || !contactRequest.nonce) return;
    const select = f.elements.namedItem("produk") as HTMLSelectElement | null;
    if (select && contactRequest.product) select.value = contactRequest.product;
  }, [contactRequest]);

  const reset = () => {
    formRef.current?.reset();
    setSent(false);
  };

  // Setelah popup ditutup dalam keadaan "terkirim", kembalikan ke formulir
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reset saat popup ditutup
    if (!isOpen && sent) reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Formulir membuka aplikasi email dengan isi yang sudah terisi (tanpa server)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const subject = `${t("Permintaan Demo")} ${v.produk} - ${v.institusi}`;
    const body = [
      `${t("Nama")}: ${v.nama}`,
      `${t("Institusi")}: ${v.institusi}`,
      `Email: ${v.email}`,
      `${t("Telepon")}: ${v.telepon || "-"}`,
      `${t("Produk yang Diminati")}: ${v.produk}`,
      "",
      `${t("Pesan")}:`,
      v.pesan,
    ].join("\n");
    window.location.href = `mailto:sales@intramedika.co.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <Modal
      id="m-kontak"
      aria-labelledby="m-kontak-t"
      className="modal p-0 m-auto w-[calc(100%-1.5rem)] max-w-6xl max-h-[92vh] rounded-3xl bg-gradient-to-br from-[#eef4ff] via-[#f5f9ff] to-[#eef8f2] shadow-2xl backdrop:bg-slate-900/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative px-5 py-8 md:px-10 md:py-10">
        <button
          type="button"
          onClick={closeModal}
          aria-label={t("Tutup")}
          className="absolute z-20 top-4 right-4 md:top-5 md:right-5 w-11 h-11 rounded-full bg-white/80 text-g9 hover:bg-[#16a316] hover:text-white shadow grid place-items-center transition outline-none focus-visible:ring-4 focus-visible:ring-green-300"
        >
          <Icon name="x" className="w-5 h-5" />
        </button>
        <div className="text-center max-w-3xl mx-auto px-6">
          <span className="inline-block text-xs md:text-sm font-extrabold tracking-[.16em] px-5 py-1.5 rounded-full bg-green-50 text-g6 border border-g6/30">
            {t("MULAI TRANSFORMASI DIGITAL")}
          </span>{" "}
          <h2 id="m-kontak-t" className="mt-4 text-2xl md:text-4xl font-extrabold text-[#1d2b6b] tracking-tight">
            {t("Siap membawa pelayanan kesehatan ke level berikutnya?")}
          </h2>
          <p className="mt-3 text-slate-600 md:text-lg">
            {t(
              "Bergabung dengan rumah sakit dan klinik di Indonesia yang telah mempercayakan transformasi digital mereka kepada Intramedika. Jadwalkan demo gratis hari ini.",
            )}
          </p>
        </div>
        <div className="mt-8 grid lg:grid-cols-[0.78fr_1.22fr] gap-6 items-start">
          <aside className="rounded-2xl bg-white/70 border border-slate-200/80 p-6 md:p-7">
            <h3 className="text-sm font-extrabold tracking-[.16em] text-[#1f5fd0]">{t("KONTAK UMUM")}</h3>
            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 items-baseline">
              <dt className="text-sm font-bold text-slate-600">{t("Penjualan")}</dt>
              <dd>
                <a href="mailto:sales@intramedika.co.id" className="text-[#1f5fd0] hover:underline break-all">
                  {t("sales@intramedika.co.id")}
                </a>
              </dd>
              <dt className="text-sm font-bold text-slate-600">{t("Informasi")}</dt>
              <dd>
                <a href="mailto:inquiry@intramedika.co.id" className="text-[#1f5fd0] hover:underline break-all">
                  {t("inquiry@intramedika.co.id")}
                </a>
              </dd>
              <dt className="text-sm font-bold text-slate-600">{t("Situs Web")}</dt>
              <dd>
                <a href="https://www.intramedika.co.id" target="_blank" rel="noopener" className="text-[#1f5fd0] hover:underline">
                  {t("www.intramedika.co.id")}
                </a>
              </dd>
            </dl>
            <h3 className="mt-7 text-sm font-extrabold tracking-[.16em] text-[#1f5fd0]">{t("LOKASI KANTOR")}</h3>
            <ul className="mt-4 space-y-5">
              <li className="flex gap-3">
                <span className="w-9 h-9 shrink-0 rounded-full bg-white shadow-sm border border-slate-100 grid place-items-center">
                  <Icon name="map-pin" className="w-4 h-4 text-[#1d2b6b]" />
                </span>
                <div>
                  <b className="text-navy">{t("Kantor Bisnis")}</b>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {t("South Quarter Tower A, Lantai 18")}
                    <br />
                    {t("Jl. RA Kartini Kav. 8, Jakarta 12430")}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="w-9 h-9 shrink-0 rounded-full bg-white shadow-sm border border-slate-100 grid place-items-center">
                  <Icon name="map-pin" className="w-4 h-4 text-[#1d2b6b]" />
                </span>
                <div>
                  <b className="text-navy">{t("Kantor Operasional")}</b>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    {t("Boston View Building, Boston Square")}
                    <br />
                    {t("RK 1/6, Kota Wisata, Bogor 16968")}
                  </p>
                </div>
              </li>
            </ul>
          </aside>
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 md:px-7 py-5 bg-slate-50/70 border-b border-slate-200">
              <h3 className="text-xl font-extrabold text-[#1d2b6b]">{t("Kirim Pesan")}</h3>
              <p className="mt-1 text-sm text-slate-600">{t("Isi formulir di bawah dan tim kami akan menghubungi Anda segera.")}</p>
            </div>
            <form
              id="kontak-form"
              ref={formRef}
              onSubmit={onSubmit}
              hidden={sent}
              className="p-6 md:p-7 grid sm:grid-cols-2 gap-x-4 gap-y-5"
            >
              <label>
                <span className="block mb-2 text-sm font-bold text-navy">
                  {t("Nama Lengkap")} <span className="text-red-500">{"*"}</span>
                </span>
                <input
                  name="nama"
                  required
                  autoComplete="name"
                  placeholder={t("Dr. Budi Santoso")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100"
                />
              </label>
              <label>
                <span className="block mb-2 text-sm font-bold text-navy">
                  {t("Institusi / Fasilitas Kesehatan")} <span className="text-red-500">{"*"}</span>
                </span>
                <input
                  name="institusi"
                  required
                  autoComplete="organization"
                  placeholder={t("RS Harapan Bangsa")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100"
                />
              </label>
              <label>
                <span className="block mb-2 text-sm font-bold text-navy">
                  {t("Email")} <span className="text-red-500">{"*"}</span>
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t("budi@rshb.co.id")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100"
                />
              </label>
              <label>
                <span className="block mb-2 text-sm font-bold text-navy">{t("Nomor Telepon")}</span>
                <input
                  name="telepon"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+62 812 3456 7890"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100"
                />
              </label>
              <label className="sm:col-span-2">
                <span className="block mb-2 text-sm font-bold text-navy">
                  {t("Produk yang Diminati")} <span className="text-red-500">{"*"}</span>
                </span>
                <span className="relative block">
                  <select
                    name="produk"
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100 appearance-none pr-10 cursor-pointer"
                  >
                    <option value="">{t("-- Pilih Produk --")}</option>
                    <option>{t("IntraHospital")}</option>
                    <option>{t("IntraClinic")}</option>
                    <option>{t("IntraDoc")}</option>
                    <option>{t("IntraPuskesmas")}</option>
                    <option>{t("Posyandu AI")}</option>
                    <option>{t("Intravision (AI Imaging)")}</option>
                    <option>{t("Clinical Cohort Builder")}</option>
                    <option>{t("Solusi Lainnya")}</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                    <Icon name="chevron-down" className="w-4 h-4" />
                  </span>
                </span>
              </label>
              <label className="sm:col-span-2">
                <span className="block mb-2 text-sm font-bold text-navy">
                  {t("Pesan")} <span className="text-red-500">{"*"}</span>
                </span>
                <textarea
                  name="pesan"
                  required
                  rows={5}
                  placeholder={t("Ceritakan kebutuhan dan tantangan digital Anda...")}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-navy placeholder:text-slate-400 outline-none transition focus:border-g6 focus:ring-4 focus:ring-green-100 resize-y min-h-[140px]"
                />
              </label>
              <p className="sm:col-span-2 text-xs text-slate-500 leading-relaxed">
                {t(
                  "Data yang Anda berikan hanya digunakan untuk keperluan tindak lanjut oleh tim Intramedika. Kami menghormati privasi Anda dan tidak akan membagikan informasi kepada pihak ketiga tanpa izin Anda.",
                )}
              </p>
              <button
                type="submit"
                className="sm:col-span-2 w-full rounded-xl bg-gradient-to-r from-[#1f9d5c] to-[#2bb673] hover:from-g9 hover:to-g6 text-white font-bold py-3.5 shadow-md hover:shadow-lg transition inline-flex items-center justify-center gap-2"
              >
                {t("Kirim Pesan")} <Icon name="arrow-right" className="w-4 h-4" />
              </button>
            </form>
            <div id="kontak-ok" hidden={!sent} className="p-10 text-center">
              <span className="mx-auto w-16 h-16 rounded-full bg-green-100 text-g6 grid place-items-center">
                <Icon name="check" className="w-8 h-8" />
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-[#1d2b6b]">{t("Terima kasih!")}</h3>
              <p className="mt-2 text-slate-600">
                {t(
                  "Aplikasi email Anda telah dibuka dengan pesan yang sudah terisi. Kirim email tersebut dan tim kami akan segera menghubungi Anda.",
                )}
              </p>
              <button
                type="button"
                id="kontak-reset"
                onClick={reset}
                className="mt-6 px-6 py-2.5 rounded-full border-2 border-g6 text-g9 font-bold hover:bg-mint transition"
              >
                {t("Kirim pesan lain")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
