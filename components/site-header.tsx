import Link from "next/link"
import { Search } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cart } from "@/components/cart"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center gap-4 m-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
         JUFUREH
        </Link>
        <div className="flex-1 flex items-center gap-2">
          <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
            <option>All Category</option>
            <option>Clothing</option>
            <option>Accessories</option>
            <option>Footwear</option>
          </select>
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search product or brand here..."
              className="pl-8"
            />
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <Link href="/signup">
            <Button variant="ghost" size="sm">
              Sign Up
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Cart />
        </nav>
      </div>
    </header>
  )
}

