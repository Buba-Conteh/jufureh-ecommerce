import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative flex bg-muted/40 w-full justify-center px-4 md:px-20 py-10">
      <div className="container flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Big Fashion Sale
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
            Inspired by the majestic tales of African royalty and the empowering spirit of its heritage
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Redefine Your Everyday Style
          </p>
          <Button size="lg">Shop Now</Button>
        </div>
        <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
              className="rounded-lg object-cover w-full h-full hidden md:block"
            />
            </div>
        </div>
      </div>
    </section>
  )
}
