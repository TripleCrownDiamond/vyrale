import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "⚡vyrale - AI-Powered Social Media Management",
  description: "Automate and optimize your social media presence with AI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${raleway.variable} font-sans`}>
          <ThemeProvider defaultTheme="light" storageKey="vyrale-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
