import { ProductCard } from "./product-card"

export function TodaysForYou() {
  const products = [
    {
      name: "Essential Men's Long-Sleeve Crewneck Shirt",
      price: 179000,
      image: "./Jufureh/jufure-group.jpg",
    },
    {
      name: "Stylishzen Men's Fashionable Sneakers",
      price: 199000,
      originalPrice: 299000,
      image: "./Jufureh/jfr-s-b.jpg",
      isOnSale: true,
    },
    {
      name: "Essential Long-Sleeve Crewneck Shirt for Men",
      price: 120000,
      image: "./Jufureh/jfr2.jpg",
    },
    {
      name: "UrbanFlex Men's Short Pants Collection",
      price: 162000,
      image: "./Jufureh/jfr-art.jpg",
    },
  ]

  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Today's For You!</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md">
            Best Seller
          </button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Keep Stylin
          </button>
          <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Special Discount
          </button>
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

