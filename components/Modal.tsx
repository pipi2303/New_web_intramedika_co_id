"use client";

import { useEffect, useRef } from "react";
import { useModal } from "./ModalProvider";

type ModalProps = React.DialogHTMLAttributes<HTMLDialogElement> & { id: string };

/** <dialog> native yang dikendalikan oleh ModalProvider (showModal/close, klik backdrop, tombol Esc). */
export default function Modal({ id, children, ...rest }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const { openId, closeModal } = useModal();
  const isOpen = openId === id;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (isOpen && !d.open) d.showModal();
    else if (!isOpen && d.open) d.close();
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      id={id}
      {...rest}
      onClose={() => closeModal(id)}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal(id);
      }}
    >
      {children}
    </dialog>
  );
}
