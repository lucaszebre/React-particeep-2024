import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "particeep",
  description: "test technique particeep",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center `}>
        <main className="max-w-[1440px] w-[90%] ">
        {children}

        </main>
        </body>
    </html>
  );
}
