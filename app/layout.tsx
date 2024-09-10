import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/sections/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Landing Labs",
  description: "Conheça a Landing Labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
