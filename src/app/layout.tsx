import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/Navbar";
import { AuthProvider } from "@/context/AuthContext";
import { Toaster } from "react-hot-toast";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookVerse",
  description: "Discover, manage and explore books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <AuthProvider>
          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{
              top: 24,
            }}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "16px",
                padding: "14px 18px",
                fontSize: "14px",
                fontWeight: 500,
                background: "#ffffff",
                color: "#111827",
                border: "1px solid #e5e7eb",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
              },
              success: {
                iconTheme: {
                  primary: "#2563eb",
                  secondary: "#ffffff",
                },
              },
              error: {
                iconTheme: {
                  primary: "#ef4444",
                  secondary: "#ffffff",
                },
              },
            }}
          />

        </AuthProvider>
      </body>
    </html>
  );
}