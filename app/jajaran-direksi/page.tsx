import type { Metadata } from "next";
import Direksi from "@/components/Direksi";

export const metadata: Metadata = {
  title: "Jajaran Managemen – INTRAMEDIKA",
};

export default function JajaranDireksiPage() {
  return <Direksi />;
}
