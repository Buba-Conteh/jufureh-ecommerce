import { Timer } from 'lucide-react'
import { ProductCard } from "./product-card"

export function FlashSale() {
  const products = [
    {
      name: "EliteShield Performance Men's Jackets",
      price: 255000,
      originalPrice: 345000,
      image: "./Jufureh/jfr-20.jpg",
      isOnSale: true,
    },
    {
      name: "Gentlemen's Summer Shirt - Premium Blend",
      price: 99000,
      originalPrice: 150000,
      image: "./Jufureh/jfr-cls-on.jpg",
      isOnSale: true,
    },
    {
      name: "OptiZoom Camera Shoulder Bag",
      price: 250000,
      originalPrice: 425000,
      image: "./Jufureh/jfr3.jpg",
      isOnSale: true,
    },
    {
      name: "Cloudy Chic - Grey Peep Toe Heeled Sandals",
      price: 270000,
      originalPrice: 460000,
      image: "./Jufureh/jfr-w-2.jpg",
      isOnSale: true,
    },
  ]

  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h2 className="text-2xl font-bold">Flash Sale</h2>
          <div className="flex items-center gap-1 text-red-500">
            <Timer className="h-4 w-4" />
            <span className="text-sm font-medium">05:10:30</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

