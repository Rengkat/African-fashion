import Providers from "@/redux/Provider";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Classic Fashion - Home",
  description: "Buy your African Native and cooperate wears online and connect with stylist",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <html lang="en" suppressHydrationWarning={true}>
        <body className="relative">{children}</body>
      </html>
    </Providers>
  );
}
