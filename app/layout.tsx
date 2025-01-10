import { CartProvider } from '@/context/cart-context'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex flex-1 justify-center flex-col items-center">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

