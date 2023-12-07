import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

import Sidebar from "@/components/Sidebar";
import Player from "@/components/Player";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to Music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={twMerge(figtree.className, "flex h-full")}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs} />
            <main className="h-full flex-1 overflow-y-auto py-2 px-2 md:pl-0 ">
              {children}
            </main>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
