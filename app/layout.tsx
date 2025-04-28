import "./globals.css"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { CopyRight } from "@/components/copy-right"
import { Nav } from "@/components/nav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata : Metadata = {
  title: "umemiya.fyi",
  description:
    "umemiya.fyi is a blog about finance, coding, and other things.",
  openGraph: {
    title: "umemiya.fyi",
    description:
      "umemiya.fyi is a blog about finance, coding, and other things.",
    url: "https://umemiya.fyi",
    siteName: "umemiya.fyi",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@umemiyaxbt",
    creator: "@umemiyaxbt",
  },
  metadataBase: new URL("https://umemiya.fyi"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="max-w-5xl m-auto lg:py-8 lg:px-8 p-6 flex gap-4 justify-end items-center">
            <Nav />
            <ModeToggle />
          </header>
          <main className="font-[family-name:var(--font-inter)] max-w-3xl m-auto px-6">
            {children}
          </main>
          <footer className="max-w-5xl m-auto lg:p-8 p-6 flex justify-between items-center">
            <CopyRight />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
