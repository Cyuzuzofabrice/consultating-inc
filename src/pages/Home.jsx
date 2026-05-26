import Hero from "../components/Hero"
import FeaturedMenu from "../components/FeaturedMenu"
import ExperienceSection from "../components/ExperienceSection"
import GallerySection from "../components/GallerySection"

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedMenu />
      <ExperienceSection />
      <GallerySection />
    </div>
  )
}