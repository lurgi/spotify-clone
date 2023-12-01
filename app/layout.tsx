import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import { twMerge } from "tailwind-merge";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(figtree.className, "flex h-full")}>
        <Sidebar>Side Bar</Sidebar>
        <main className="h-full flex-1 overflow-y-auto py-2 px-2 md:pl-0 ">
          {children}
        </main>
      </body>
    </html>
  );
}
