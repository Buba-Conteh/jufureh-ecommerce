'use client'

import { useState } from 'react'
import { ShoppingCart, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Checkout functionality to be implemented')
    clearCart()
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cart.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cart.length === 0 ? (
          <p className="text-center mt-4">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y">
              {cart.map((item) => (
                <li key={item.id} className="py-4 flex items-center space-x-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Rp{item.price.toLocaleString()}</p>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => removeFromCart(item.id)}>
                    <X className="h-4 w-4" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between font-medium">
                <span>Total:</span>
                <span>Rp{totalPrice.toLocaleString()}</span>
              </div>
              <Button className="w-full" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

