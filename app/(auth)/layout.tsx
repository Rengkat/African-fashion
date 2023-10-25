import "../globals.css";

export const metadata = {
  title: "Classic Fashion - Sign up and login",
  description: "Buy your African Native and cooperate wears online and connect with stylist",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
