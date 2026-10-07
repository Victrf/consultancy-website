import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp"
import AboutHero from "../components/AboutHero"
import VisionMission from "../components/VisionMission"
import OurCommitment from "../components/OurCommitment"
import TripleMiniCarousel from "../components/TripleMiniCarousel"
import OurApproach from "../components/OurApproach"
import InternationalPerspective from "../components/InternationalPerspective"
import OurPrinciples from "../components/OurPrinciples"

function About() {
  return (
    <>
      <Navbar />

      <main
        className="relative min-h-screen overflow-hidden animate-[gradientMove_15s_ease_infinite]"
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
        {/* Glowing bubbles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Blue bubble */}
          <div
            className="absolute h-40 w-40 rounded-full bg-blue-400/20 blur-2xl animate-[bubbleOne_14s_ease-in-out_infinite]"
          />

          {/* Violet bubble */}
          <div
            className="absolute right-[10%] top-[15%] h-52 w-52 rounded-full bg-violet-400/20 blur-3xl animate-[bubbleTwo_18s_ease-in-out_infinite]"
          />

          {/* Cyan bubble */}
          <div
            className="absolute bottom-[15%] left-[25%] h-44 w-44 rounded-full bg-cyan-300/20 blur-2xl animate-[bubbleThree_16s_ease-in-out_infinite]"
          />

          {/* Pink bubble */}
          <div
            className="absolute bottom-[5%] right-[20%] h-36 w-36 rounded-full bg-fuchsia-400/15 blur-2xl animate-[bubbleFour_20s_ease-in-out_infinite]"
          />

          {/* Small white glow */}
          <div
            className="absolute left-[45%] top-[35%] h-24 w-24 rounded-full bg-white/10 blur-xl animate-[bubbleFive_12s_ease-in-out_infinite]"
          />

        </div>
        <AboutHero />
        <OurApproach />
        <VisionMission />
        <InternationalPerspective />
        <OurPrinciples />
        <TripleMiniCarousel />
        <OurCommitment />

        {/* About page sections will go here */}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default About