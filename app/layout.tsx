import Providers from "@/redux/Provider";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Classic Fashion",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en">
        <body className="relative" suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </Providers>
  );
}
