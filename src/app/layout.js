import { Inter_Tight } from 'next/font/google'
import "./globals.css";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata = {
  title: "Anh Do",
  description: "Anh's website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
