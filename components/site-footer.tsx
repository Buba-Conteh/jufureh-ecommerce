import Link from "next/link"
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-muted/40">
      <div className="container py-10 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">JUFUREH</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for trendy fashion and accessories.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">About Us</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
              <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Men's Clothing</Link></li>
              <li><Link href="#" className="hover:underline">Women's Clothing</Link></li>
              <li><Link href="#" className="hover:underline">Accessories</Link></li>
              <li><Link href="#" className="hover:underline">Shoes</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/jufure/" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2023 BeliBeli.com. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

