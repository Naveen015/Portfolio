import Header from "@/components/header";
import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import PageTransition from "@/components/page-transition";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Naveen | Software Engineer",
  description: "MS in Computer Science from University of Texas at Dallas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${nunito.className} bg-light-background text-light-text relative dark:bg-dark-background dark:text-dark-text`}
      >
        <ThemeContextProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <Toaster position="top-right" />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
