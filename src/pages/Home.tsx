
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

const bannerVideo =
  "https://res.cloudinary.com/dtpqq0qcp/video/upload/v1794628811/light-corporation-banner_jss7wx.mp4"

const slides = [
  {
    id: 1,
    type: "video" as const,
    src: "https://res.cloudinary.com/dtpqq0qcp/video/upload/v1794628044/consulting-2_jkbmpn.mp4",
    label: "Our Approach",
    title: "Experience-driven consulting",
    description:
      "Practical strategies designed around your organization's objectives.",
  },
  {
    id: 2,
    type: "image" as const,
    src: "https://res.cloudinary.com/dtpqq0qcp/image/upload/v1794628043/consulting-1_idafmf.jpg",
    label: "Consulting",
    title: "Strategic solutions for modern businesses",
    description:
      "Helping organizations make informed decisions and build sustainable growth.",
  },
  {
    id: 3,
    type: "video" as const,
    src: "https://res.cloudinary.com/dtpqq0qcp/video/upload/v1794628047/consulting_ag0foc.mp4",
    label: "Innovation",
    title: "Building solutions for what's next",
    description:
      "Combining insight, strategy, and execution to create lasting impact.",
  },
  {
    id: 4,
    type: "image" as const,
    src: "https://res.cloudinary.com/dtpqq0qcp/image/upload/v1794628043/consulting-2_ujb0t4.jpg",
    label: "Partnership",
    title: "Working with you from strategy to execution",
    description:
      "A collaborative approach focused on measurable outcomes.",
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
