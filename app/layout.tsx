import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LangProvider, LANG_BOOT_SCRIPT } from "@/lib/i18n";
import { ModalProvider } from "@/components/ModalProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Modals from "@/components/modals";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTRAMEDIKA",
  description:
    "Platform ekosistem digital kesehatan terintegrasi — menghubungkan rumah sakit, klinik, Puskesmas, Posyandu, dokter, dan pasien melalui satu platform cerdas.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOT_SCRIPT }} />
      </head>
      <body>
        <LangProvider>
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
            <Modals />
          </ModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}
