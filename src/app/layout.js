import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>KŽ pedagogė</title>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <header class="header">
        <a href="/"><h2>KŽ</h2></a>
        <nav>
          <a href="/">Pagrindinis</a>
          <a href="/Apiemane">Apie mane</a>
          <a href="/Paslaugos">Paslaugos</a>
          <a href="/Kontaktai">Kontaktai</a>
          <a href="/Kainos">Kainos</a>
          <a href="/Laikorezervacija">Laiko rezervacija</a>
        </nav>
        <div class="menu-toggle" id="menuToggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
      </header>
      {children}
      <footer class="footer">
            <p>@ 2024 Karolina Žemčūžnikovienė</p>
            <a href="/"><img src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt="logo" /></a>
        </footer>
      </body>
      
    </html>
  );
  
}



