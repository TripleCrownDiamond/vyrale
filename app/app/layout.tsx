import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google"; // Import Raleway
import "./globals.css";
import { cn } from "@/lib/utils"; // Assuming Shadcn setup created this

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"], // Specify needed weights
});

export const metadata: Metadata = {
  title: "Vyrale App", // Update title
  description: "AI Community Management", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Add 'dark' class and font variables */}
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased dark", // Add 'dark' class here
        inter.variable,
        raleway.variable
      )}>
        {children}
      </body>
    </html>
  );
}
