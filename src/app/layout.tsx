import './globals.css'

export const metadata: Metadata = {
  title: 'Hello Socian',
  description: 'Empowering Busineeses, Revolutionizing Employment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  )
}
