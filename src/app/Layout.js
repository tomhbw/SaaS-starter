export const metadata = {
  title: 'Meine SaaS',
  description: 'Minimal-Next.js App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
