export const metadata = {
  title: "Mystic Madness",
  description: "E-commerce website for Mystic Madness, made in Cali, CO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
