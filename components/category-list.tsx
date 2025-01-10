import { Shirt, ShirtIcon, PocketIcon as Jacket, PinIcon as PantsIcon, ShoppingBag, Footprints, Watch, HardHatIcon as Hat } from 'lucide-react'

export function CategoryList() {
  const categories = [
    { name: "T-Shirt", icon: Shirt },
    { name: "Jacket", icon: Jacket },
    { name: "Shirt", icon: ShirtIcon },
    { name: "Jeans", icon: PantsIcon },
    { name: "Bag", icon: ShoppingBag },
    { name: "Shoes", icon: Footprints },
    { name: "Watches", icon: Watch },
    { name: "Cap", icon: Hat },
  ]

  return (
    <section className="container py-8">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href="#"
            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
          >
            <category.icon className="h-8 w-8" />
            <span className="text-sm font-medium">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

