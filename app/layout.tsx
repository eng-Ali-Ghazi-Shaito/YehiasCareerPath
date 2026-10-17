import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yehia — Career Path",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav aria-label="Main navigation">
            <ul className="site-nav-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/plan">Plan</Link>
              </li>
              <li>
                <Link href="/opportunities">Opportunities</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}