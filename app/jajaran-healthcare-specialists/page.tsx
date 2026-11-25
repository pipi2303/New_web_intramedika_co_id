import type { Metadata } from "next";
import HealthcareSpecialists from "@/components/HealthcareSpecialists";

export const metadata: Metadata = {
  title: "Jajaran Healthcare Specialists – INTRAMEDIKA",
};

export default function JajaranHealthcareSpecialistsPage() {
  return <HealthcareSpecialists />;
}
