import { Inter } from "next/font/google";
import "../app/styles/globals.css";
import "../app/styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "새미네 부엌",
  description: "새미네 부엌 클론코딩",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
