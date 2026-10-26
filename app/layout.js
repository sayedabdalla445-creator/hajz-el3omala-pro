import { Reem_Kufi, Tajawal } from "next/font/google";
import site from "../site.config";
import "./globals.css";

const display = Reem_Kufi({ subsets: ["arabic"], weight: ["600"], variable: "--display" });
const body = Tajawal({ subsets: ["arabic"], weight: ["400", "700"], variable: "--body" });

export const metadata = { title: `${site.brand} | ${site.title}`, description: site.subtitle };

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`} style={{ "--gold": site.accent }}>
      <body>{children}</body>
    </html>
  );
}
