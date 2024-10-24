import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Graham Carkner",
  description: "HELLO WELCOME HELLO WELCOME",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">

        <div className="flex flex-row space-x-4 px-8 py-4 border-b border-black">
          <div>Graham Carkner</div>
          <div>{"->"}</div>
          <div className="space-x-2">
            <button>Creative,</button>
            <button>Technical,</button>
            <button>People</button>
          </div>
        </div>

        {children}

      </body>
    </html>
  );
}
