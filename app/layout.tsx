import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";
import SessionProvider from "./provider/SessionProvider";
import { getServerSession } from "next-auth";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "./provider/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platform  1.0",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    // basePath="/pnev/api/auth"
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session} basePath="/pnev/api/auth">
          <QueryProvider>
            <AuthProvider>
              {children}
              <Toaster />{" "}
            </AuthProvider>
          </QueryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}