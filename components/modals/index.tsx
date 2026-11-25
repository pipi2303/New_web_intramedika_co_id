import PuskesmasModal from "./PuskesmasModal";
import PosyanduModal from "./PosyanduModal";
import HospitalModal from "./HospitalModal";
import IntraClinicModal from "./IntraClinicModal";
import IntraDocModal from "./IntraDocModal";
import CohortModal from "./CohortModal";
import ContactModal from "./ContactModal";

/** Semua popup dipasang sekali di layout agar bisa dibuka dari halaman mana pun (mis. link produk di footer). */
export default function Modals() {
  return (
    <>
      <PuskesmasModal />
      <PosyanduModal />
      <HospitalModal />
      <IntraClinicModal />
      <IntraDocModal />
      <CohortModal />
      <ContactModal />
    </>
  );
}
