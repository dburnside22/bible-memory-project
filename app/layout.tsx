import "./globals.css";

export const metadata = {
  title: "Bible Memory Project",
  description: "An App to help you memorize scripture",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-300">{children}</body>
    </html>
  );
}
