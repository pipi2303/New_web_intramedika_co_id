"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type ModalContextValue = {
  /** id dialog yang sedang terbuka, mis. "m-hospital" atau "m-kontak" */
  openId: string | null;
  openModal: (id: string) => void;
  /** Tutup dialog. Bila `id` diberikan, hanya menutup jika dialog itu yang sedang terbuka. */
  closeModal: (id?: unknown) => void;
  /** Buka popup Kontak; `product` mengisi otomatis pilihan "Produk yang Diminati". */
  openContact: (product?: string) => void;
  contactRequest: { product?: string; nonce: number };
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [contactRequest, setContactRequest] = useState<{ product?: string; nonce: number }>({ nonce: 0 });

  const openModal = useCallback((id: string) => setOpenId(id), []);
  const closeModal = useCallback((id?: unknown) => setOpenId((cur) => (typeof id === "string" && cur !== id ? cur : null)), []);
  const openContact = useCallback((product?: string) => {
    setContactRequest((r) => ({ product, nonce: r.nonce + 1 }));
    setOpenId("m-kontak");
  }, []);

  // Kunci scroll halaman selama dialog terbuka (sama seperti versi HTML)
  useEffect(() => {
    document.documentElement.style.overflow = openId ? "hidden" : "";
  }, [openId]);

  const value = useMemo(
    () => ({ openId, openModal, closeModal, openContact, contactRequest }),
    [openId, openModal, closeModal, openContact, contactRequest],
  );
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal harus dipakai di dalam <ModalProvider>");
  return ctx;
}
