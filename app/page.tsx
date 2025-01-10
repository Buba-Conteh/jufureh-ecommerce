import { HeroSection } from "@/components/hero-section"
import { CategoryList } from "@/components/category-list"
import { FlashSale } from "@/components/flash-sale"
import { TodaysForYou } from "@/components/todays-for-you"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategoryList />
      <FlashSale />
      <TodaysForYou />
    </>
  )
}

