export const metadata = {
  title: "LUXORA",
  description: "Luxury woven handbags",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
