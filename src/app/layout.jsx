import { Provider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Starter",
  description: "Next.js app with NextAuth in JS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
