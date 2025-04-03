import "./globals.css"   // instead of "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CeramiX - Website Design",
  description: "The leader in website design",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        {children}
      </body>
    </html>
  )
}