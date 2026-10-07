import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  FiPause,
  FiPlay,
  FiVolume2,
  FiVolumeX,
  FiX,
} from "react-icons/fi"

type VideoBannerProps = {
  src: string
  poster?: string
  scrollThreshold?: number
}

const smoothEase = [0.22, 1, 0.36, 1] as const

function VideoBanner({
  src,
  poster,
  scrollThreshold = 250,
}: VideoBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [volume, setVolume] = useState(1)

  /*
   * Detect page scrolling.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (isClosed) return

      if (window.scrollY >= scrollThreshold) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollThreshold, isClosed])

  /*
   * Automatically start the video.
   */
  useEffect(() => {
    if (!isVisible || isClosed || !videoRef.current) return

    const video = videoRef.current

    video.volume = volume
    video.muted = isMuted

    video
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch(() => {
        setIsPlaying(false)
      })
  }, [isVisible, isClosed])

  /*
   * Synchronize volume and mute state.
   */
  useEffect(() => {
    if (!videoRef.current) return

    videoRef.current.volume = volume
    videoRef.current.muted = isMuted
  }, [volume, isMuted])

  const togglePlay = async () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      try {
        await video.play()
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const video = videoRef.current

    if (!video) return

    const newMutedState = !video.muted

    video.muted = newMutedState
    setIsMuted(newMutedState)
  }

  const handleVolumeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newVolume = Number(event.target.value)

    setVolume(newVolume)

    const video = videoRef.current

    if (!video) return

    video.volume = newVolume

    if (newVolume === 0) {
      video.muted = true
      setIsMuted(true)
    } else {
      video.muted = false
      setIsMuted(false)
    }
  }

  const closeBanner = () => {
    const video = videoRef.current

    if (video) {
      video.pause()
    }

    setIsPlaying(false)
    setIsVisible(false)
    setIsClosed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && !isClosed && (
        <motion.aside
          initial={{
            x: "120%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          exit={{
            x: "120%",
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
            ease: smoothEase,
          }}
          className="
            fixed
            bottom-0
            right-0
            z-[100]
            w-[175px]
            overflow-hidden
            rounded-tl-xl
            rounded-tr-none
            rounded-bl-none
            rounded-br-none
            bg-black
            shadow-2xl

            xs:w-[190px]

            sm:w-[220px]
            sm:rounded-tl-2xl

            md:w-[260px]
          "
        >
          {/* Video */}
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted={isMuted}
              playsInline
              loop
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="h-full w-full object-cover"
            />

            {/* Gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Top controls */}
            <div
              className="
                absolute
                right-2
                top-2
                flex
                items-center
                gap-1.5

                sm:right-3
                sm:top-3
                sm:gap-2

                md:right-4
                md:top-4
              "
            >
              {/* Volume */}
              <div
                className="
                  flex
                  items-center
                  gap-1
                  rounded-full
                  bg-black/50
                  px-1
                  backdrop-blur-md

                  sm:gap-1.5
                  sm:px-1.5

                  md:gap-2
                  md:px-2
                "
              >
                <motion.button
                  type="button"
                  onClick={toggleMute}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={
                    isMuted ? "Unmute video" : "Mute video"
                  }
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    transition-colors
                    hover:bg-black/30

                    sm:h-8
                    sm:w-8

                    md:h-9
                    md:w-9
                  "
                >
                  {isMuted ? (
                    <FiVolumeX size={14} />
                  ) : (
                    <FiVolume2 size={14} />
                  )}
                </motion.button>

                {/* Volume slider */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  aria-label="Video volume"
                  className="
                    h-1
                    w-10
                    cursor-pointer
                    accent-white

                    sm:w-14

                    md:w-20
                  "
                />
              </div>

              {/* Close */}
              <motion.button
                type="button"
                onClick={closeBanner}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Close video"
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-black/50
                  text-white
                  backdrop-blur-md
                  transition-colors
                  hover:bg-black/70

                  sm:h-8
                  sm:w-8

                  md:h-9
                  md:w-9
                "
              >
                <FiX size={15} />
              </motion.button>
            </div>

            {/* Play / Pause */}
            <div
              className="
                absolute
                bottom-3
                left-3

                sm:bottom-4
                sm:left-4

                md:bottom-5
                md:left-5
              "
            >
              <motion.button
                type="button"
                onClick={togglePlay}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label={
                  isPlaying ? "Pause video" : "Play video"
                }
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-neutral-950
                  shadow-lg

                  sm:h-10
                  sm:w-10

                  md:h-11
                  md:w-11
                "
              >
                {isPlaying ? (
                  <FiPause size={15} />
                ) : (
                  <FiPlay size={15} />
                )}
              </motion.button>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default VideoBanner