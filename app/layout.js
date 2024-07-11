import { Inter } from "next/font/google";
import "./globals.css";

// This is the banner for the FOYM website. Delete this before deploying!
import Banner from "@/components/sections/999 - banner";

const inter = Inter({ subsets: ["latin"] });

// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://planet.foym.org/'),
  title: "Green Planet - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up environmental organization called “Green Planet.”  It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
  openGraph: {
    title: "Green Planet - An FOYM Template",
    description: "This is a template for organizations modeled after a made-up environmental organization called “Green Planet.”  It is entirely free to use and customize. FOYM, a project by Ruslan Mukhamedvaleev, created this website under the MIT license.",
    url: 'https://planet.foym.org/',
    siteName: 'Green Planet - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image on the the website\s name "Green Planet Template - FOYM" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        {/* This is the banner for the FOYM website. Feel free to delete this! */}
        <Banner />
        
        
        {children}</body>
    </html>
  );
}
