import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swiss-permit-navigator.kreisquadratur.chatgpt.site"),
  title: "PermitPilot",
  description: "Find the likely Swiss work and residence permit route, responsibilities, paperwork and official cantonal sources.",
  openGraph: {
    title: "PermitPilot",
    description: "Your route to the right Swiss permit.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PermitPilot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PermitPilot",
    description: "Your route to the right Swiss permit.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
