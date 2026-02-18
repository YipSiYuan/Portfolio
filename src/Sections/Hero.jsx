import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import HeroText from "../Components/HeroText.jsx"
import ParallaxBackground from "../Components/ParallexBackground"
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })

  return (
    <div className="flex items-start justify-center md:items-center md:justify-center min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#030412]" />
    </div>
  )
}

export default Hero
