import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

<link rel="icon" href="/favicon.svg" />;

export const metadata: Metadata = {
  title: "Ashim Rudra Paul",
  description:
    "Experienced Software Engineer with 2+ years in MERN stack, TypeScript, Next.js, React Native, AWS, Docker, and more. Sylhet Polytechnic Institute graduate. Let's bring your ideas to life with scalable, efficient web solutions!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-[#1e1e1e] text-white">{children}</div>
      </body>
    </html>
  );
}
