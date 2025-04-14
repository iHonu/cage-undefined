import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
