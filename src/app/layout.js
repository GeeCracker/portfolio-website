import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Graham Carkner",
  description: "HELLO WELCOME HELLO WELCOME",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
