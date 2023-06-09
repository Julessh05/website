import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './globals.css'

export const metadata = {
  title: 'Julian Schumacher - Home',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
