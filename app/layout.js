export const metadata = {
  title: 'Jam Duke Mësuar',
  description: 'Një mbishkrim i bukur për të mësuar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
