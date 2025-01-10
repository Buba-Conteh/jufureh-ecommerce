"use client"

import { useState } from 'react'
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  isOnSale?: boolean
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  isOnSale,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()

  return (
    <Card 
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5" />
        </Button>
        {isOnSale && (
          <Badge className="absolute left-2 top-2 z-10" variant="destructive">
            Sale
          </Badge>
        )}
        <div className="aspect-square relative">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-105"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
              <Button onClick={() => addToCart({ id, name, price, image })}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 p-4">
        <h3 className="font-medium leading-none">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold">Rp{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              D {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

