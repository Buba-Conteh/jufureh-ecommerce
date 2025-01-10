import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex bg-muted/40 w-full justify-center px-20 py-10">
      <div className="container flex md:flex-rowitems-center gap-8 py-12">
        <div className="flex-1 space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Big Fashion Sale
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
          Inspired by the majestic tales of African royalty and the empowering spirit of its heritage
            {/* <br />
            Up to <span className="text-primary">50% OFF!</span> */}
          </h1>
          <p className="text-xl text-muted-foreground">
            Redefine Your Everyday Style
          </p>
          <Button size="lg">Shop Now</Button>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-4">
          {/* src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop&q=80" */}
            <img
              src="./Jufureh/jfr1.jpg"
              alt="White T-shirt"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="Jufureh/jfr-w-2.jpg"
              alt="Grey T-shirt"
              className="rounded-lg object-cover w-full h-full"
            />
            <img
              src="Jufureh/jfr-b-w.jpg"
              alt="Black T-shirt"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

