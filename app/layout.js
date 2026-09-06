import './globals.css';

export const metadata = {
  title: 'Deon Davies Chingwe — Founder & Builder',
  description: 'Founder and builder working across mobility, fitness, consumer products and cross-border infrastructure between Zimbabwe and Poland.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
