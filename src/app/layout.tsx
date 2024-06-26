import type {Metadata} from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Fullstack App Test",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
        <header className="text-xl font-bold leading-[3rem]"></header>
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
}
