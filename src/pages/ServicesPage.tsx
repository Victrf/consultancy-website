import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"

import ServicesHero from "../components/ServicesHero"
import CoreCapabilities from "../components/CoreCapabilities"
import ServiceWorkflow from "../components/ServiceWorkflow"
import ProjectEnvironments from "../components/ProjectEnvironments"
import ServicesClosing from "../components/ServicesClosing"

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main
        className="relative overflow-hidden animate-[gradientMove_15s_ease_infinite]"
        style={{
          background: `
            linear-gradient(
              -45deg,
              #0f172a,
              #1e1b4b,
              #312e81,
              #0e7490,
              #172554,
              #4c1d95
            )
          `,
          backgroundSize: "400% 400%",
        }}
      >

        {/* Hero */}
        <ServicesHero />

        {/* Core services */}
        <CoreCapabilities />

        {/* Integrated workflow */}
        <ServiceWorkflow />

        {/* Sectors / project environments */}
        <ProjectEnvironments />

        {/* Closing */}
        <ServicesClosing />

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  )
}

export default ServicesPage