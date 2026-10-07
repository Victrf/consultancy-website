import Navbar from "../components/Navbar"
import Carousel from "../components/Carousel"
import ExpertiseImpact from "../components/ExpertiseImpact"
import WhoWeAre from "../components/WhoWeAre"
import VideoBanner from "../components/VideoBanner"
import Sectors from "../components/Sectors"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SocialImpact from "../components/SocialImpact"
import CTA from "../components/CTA"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import GradientSection from "../components/GradientSection"

import consultingImage1 from "../assets/consulting-1.jpg"
import consultingImage2 from "../assets/consulting-2.jpg"
import consultingVideo1 from "../assets/consulting.mp4"
import consultingVideo2 from "../assets/consulting-2.mp4"
import bannerVideo from "../assets/light-corporation-banner.mp4"

const slides = [
  {
    id: 1,
    type: "image" as const,
    src: consultingImage1,
    label: "Consulting",
    title: "Strategic solutions for modern businesses",
    description:
      "Helping organizations make informed decisions and build sustainable growth.",
  },
  {
    id: 2,
    type: "video" as const,
    src: consultingVideo1,
    label: "Our Approach",
    title: "Experience-driven consulting",
    description:
      "Practical strategies designed around your organization's objectives.",
  },
  {
    id: 3,
    type: "image" as const,
    src: consultingImage2,
    label: "Partnership",
    title: "Working with you from strategy to execution",
    description:
      "A collaborative approach focused on measurable outcomes.",
  },
  {
    id: 4,
    type: "video" as const,
    src: consultingVideo2,
    label: "Innovation",
    title: "Building solutions for what's next",
    description:
      "Combining insight, strategy, and execution to create lasting impact.",
  },
]

function Home() {
  return (
    <>
      {/* Animated page background */}
      <div className="page-gradient" />

      <Navbar />

      <main>
        <Carousel
          slides={slides}
          autoPlay={true}
          interval={5000}
        />

        <ExpertiseImpact />

        <WhoWeAre />

        <GradientSection />

        <VideoBanner
          src={bannerVideo}
          scrollThreshold={250}
        />

        <Sectors />

        <Services />

        <Projects />

        <SocialImpact />

        <CTA />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  )
}

export default Home