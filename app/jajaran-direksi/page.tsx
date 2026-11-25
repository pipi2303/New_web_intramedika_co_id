import type { Metadata } from "next";
import Direksi from "@/components/Direksi";

export const metadata: Metadata = {
  title: "Jajaran Direksi – INTRAMEDIKA",
};

export default function JajaranDireksiPage() {
  return <Direksi />;
}
